import { execSync, spawn } from "node:child_process";
import http from "node:http";

const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;
const TITLE = "WongCo Food";
const STARTUP_TIMEOUT = 30_000; // 30 seconds
const POLL_INTERVAL = 500; // 500ms

function waitForServer() {
  return new Promise((resolve, reject) => {
    const start = Date.now();

    function check() {
      http
        .get(BASE_URL, (res) => {
          if (res.statusCode === 200) {
            res.resume();
            resolve();
          } else {
            res.resume();
            // Keep polling — server may be starting up
            setTimeout(check, POLL_INTERVAL);
          }
        })
        .on("error", (err) => {
          if (Date.now() - start > STARTUP_TIMEOUT) {
            reject(new Error(`Preview server did not start within ${STARTUP_TIMEOUT}ms`));
          } else {
            setTimeout(check, POLL_INTERVAL);
          }
        });
    }

    check();
  });
}

function verifyPage() {
  return new Promise((resolve, reject) => {
    http.get(BASE_URL, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Expected HTTP 200, got ${res.statusCode}`));
        return;
      }

      let body = "";
      res.on("data", (chunk) => {
        body += chunk;
      });
      res.on("end", () => {
        if (!body.includes(`<title>${TITLE}</title>`)) {
          reject(
            new Error(
              `Page title mismatch. Expected "<title>${TITLE}</title>", got: "${body.match(/<title>.*?<\/title>/)?.[0] || "(none)"}"`,
            ),
          );
          return;
        }
        resolve();
      });
    }).on("error", (err) => {
      reject(new Error(`Failed to fetch page: ${err.message}`));
    });
  });
}

// --- Main ---
console.log("Checking TypeScript...");
try {
  execSync("npm exec tsc", { stdio: "inherit" });
} catch (err) {
  console.error("TypeScript check failed:", err.message);
  process.exit(1);
}

console.log("Building production bundle...");
try {
  execSync("npm exec vite build", { stdio: "inherit" });
} catch (err) {
  console.error("Build failed:", err.message);
  process.exit(1);
}

console.log(`Starting preview server on port ${PORT}...`);
const preview = spawn("npm", ["exec", "vite", "preview", `--port=${PORT}`], {
  stdio: "pipe",
});

preview.stderr?.on("data", (chunk) => {
  process.stderr.write(chunk);
});

preview.on("error", (err) => {
  console.error(`Failed to start preview: ${err.message}`);
  process.exit(1);
});

try {
  console.log("Waiting for server to be ready...");
  await waitForServer();

  console.log("Verifying page content...");
  await verifyPage();

  console.log(`OK — ${BASE_URL} returned HTTP 200 with <title>${TITLE}</title>`);
  process.exit(0);
} catch (err) {
  console.error(`Build verification failed: ${err.message}`);
  process.exit(1);
} finally {
  if (preview.pid) preview.kill("SIGTERM");
}
