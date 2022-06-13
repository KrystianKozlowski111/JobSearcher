import React from 'react';
import { Wrapper, SocialMedia, Img, Container, Text } from './Header.style';
import Api from '../../assets/icons/api.svg';
import Logo from '../../assets/icons/logo.svg';

const Header: React.FC = ({ ...props }) => {
  return (
    <>
      <Wrapper>
        <Container>
          <Text>
            <Img src={Logo} />
            Graphql Job Searcher app
          </Text>
          <SocialMedia>
            <a href="https://api.graphql.jobs/">
              <Img src={Api} />
            </a>
          </SocialMedia>
        </Container>
      </Wrapper>
    </>
  );
};

export default Header;
