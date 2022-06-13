import React from 'react';
import { Wrapper, SocialMedia, Img, Container, Text } from './Footer.style';
import Linkedin from '../../assets/icons/linkedin.svg';
import Github from '../../assets/icons/github.svg';

const Footer: React.FC = ({ ...props }) => {
  return (
    <>
      <Wrapper>
        <Container>
          <Text>© 2022 - Krystian Kozłowski IT</Text>
          <SocialMedia>
            <a href="https://www.linkedin.com/in/krystian-koz%C5%82owski-5626b11b5/">
              <Img src={Linkedin} />
            </a>
            <a href="https://github.com/KrystianKozlowski111/JobSearcher">
              <Img src={Github} />
            </a>
          </SocialMedia>
        </Container>
      </Wrapper>
    </>
  );
};

export default Footer;
