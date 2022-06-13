import styled from 'styled-components';
import { media } from '../../assets/Mixins';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #4943da20;
  box-sizing: border-box;
  padding-top: 20px;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 15px 20px;
  width: 100%;
  box-sizing: border-box;
  ${media.xs`
  flex-direction:column;
  gap:15px;
  `};
`;
export const Text = styled.div`
  display: flex;
  font-style: normal;
  font-family: Nunito, sans-serif;
  font-weight: 500;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 1.2;
`;

export const SocialMedia = styled.div`
  display: flex;
  box-sizing: border-box;
  gap: 15px;
`;
export const Img = styled.img`
  display: block;
  max-width: 40px;
  min-width: 40px;
`;
