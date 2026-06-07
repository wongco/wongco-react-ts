import * as stylex from "@stylexjs/stylex";
import React from "react";

interface OptimizedImageProps extends React.ComponentPropsWithoutRef<"img"> {
  /** Original image source (JPG/PNG fallback) */
  src: string;
  /** WebP source (required for WebP optimization to work) */
  srcWebp: string;
  /** Whether to lazy load (default: true for off-screen images) */
  lazy?: boolean;
  /** Width hint for responsive images */
  width?: number;
  /** Height hint for responsive images */
  height?: number;
  /** Stylex styles to apply to the img element */
  imgStyle?: stylex.StyleXStyles;
  /** Stylex styles to apply to the picture container */
  containerStyle?: stylex.StyleXStyles;
}

const styles = stylex.create({
  image: {
    display: "block",
    maxWidth: "100%",
    height: "auto",
  },
});

/**
 * OptimizedImage component that provides:
 * - WebP format with JPG/PNG fallback for modern browsers
 * - Lazy loading for off-screen images
 * - Optional responsive image support
 */
export function OptimizedImage({
  src,
  srcWebp,
  lazy = true,
  alt,
  className,
  style,
  imgStyle,
  containerStyle,
  width,
  height,
  ...rest
}: OptimizedImageProps) {
  // Determine if this is a critical (above-the-fold) image
  const isCritical = !lazy;
  const loadAttribute = isCritical ? "eager" : "lazy";

  // Build responsive srcset if dimensions are provided
  const srcSet =
    width && height ? `${src} ${width}w, ${srcWebp} ${width}w` : undefined;

  return (
    <picture {...stylex.props(containerStyle)}>
      {/* WebP source for modern browsers */}
      <source srcSet={srcSet} type="image/webp" />
      {/* Fallback source for older browsers */}
      <source srcSet={srcSet} type={`image/${src.split(".").pop()}`} />
      {/* Fallback img element */}
      <img
        {...stylex.props(styles.image, imgStyle)}
        src={src}
        srcSet={srcSet}
        loading={loadAttribute}
        decoding="async"
        alt={alt}
        className={className}
        style={style}
        width={width}
        height={height}
        {...rest}
      />
    </picture>
  );
}
