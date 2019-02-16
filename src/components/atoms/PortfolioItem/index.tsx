import React, { PureComponent } from 'react';
import styled from 'styled-components';
import FontAwesomeLink from '../FontAwesomeLink';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const StyledPortfolioItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  width: 300px;
  border-radius: 10px;
  background-color: white;
  overflow: hidden;
`;

const StyledDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 2em;
  background-color: white;
  border-top: 2px solid lightgray;
  /* border-bottom: 2px solid lightgray; */
`;

const StyledDetailsTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  font-weight: 600;
  width: 100%;
  height: 100%;
  border-right: 2px solid lightgray;
  overflow: hidden;

  &:hover {
    background-color: steelblue;
    color: white;
  }
`;

const StyledLastDetailTab = styled(StyledDetailsTab)`
  border-right: none;
`;
class PortfolioItem extends PureComponent<PortfolioItemProps> {
  public static FaLink = (props: any) => <FontAwesomeLink {...props} />;

  public render() {
    return (
      <StyledPortfolioItem>
        <div>{this.props.name}</div>
        <StyledDetailsContainer>
          <StyledDetailsTab>
            <FontAwesomeLink icon={faEnvelope} size={'1x'} />
            Link
          </StyledDetailsTab>
          <StyledDetailsTab>Github</StyledDetailsTab>
          <StyledLastDetailTab>About</StyledLastDetailTab>
        </StyledDetailsContainer>
      </StyledPortfolioItem>
    );
  }
}

interface PortfolioItemProps {
  name: string;
}

{
  /* <PortfolioItem>
<div>Meme Generator</div>	        <div>Img Stuff</div>
  <StyledDetailsContainer>
    <StyledDetailsTab>Link</StyledDetailsTab>
    <StyledDetailsTab>Github</StyledDetailsTab>
    <StyledLastDetailTab>About</StyledLastDetailTab>
  </StyledDetailsContainer>
</PortfolioItem>
<PortfolioItem>Meme Generator</PortfolioItem> */
}

export default PortfolioItem;
