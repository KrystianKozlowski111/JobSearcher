import styled from 'styled-components';
import { media } from '../../assets/Mixins';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #4943da10;
  box-sizing: border-box;
  gap: 20px;
  padding-bottom: 60px;
`;
export const Loader = styled.div`
  margin: 0 auto;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #4943daa3;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  box-sizing: border-box;
  grid-auto-rows: 1fr;
  ${media.lg`
  grid-template-columns: 1fr 1fr 1fr;
`};
  ${media.md`
  grid-template-columns: 1fr 1fr;
`};
  ${media.xs`
grid-template-columns: 1fr;
`};
`;

export const Input = styled.input`
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.143;
  border: 0;
  min-width: 200px;
  font-family: Nunito, sans-serif;
  color: #000000;
  text-decoration: none;
  padding: 10px;
  box-sizing: border-box;
  outline: none;
  ${media.xs`
  width: 100%
    `};
`;

export const Button = styled.button`
  background: #4943daa3;
  border-radius: 6px;
  font-style: normal;
  font-weight: 550;
  font-size: 18px;
  line-height: 1.1117;
  box-sizing: border-box;
  border: 0;
  text-align: center;
  font-family: Nunito, sans-serif;
  color: #f9f9ff;
  text-decoration: none;
  padding: 8px 25px;
  transition: all 0.3s linear;
  cursor: pointer;
  &:hover {
    background: #4943da;
    color: #f9f9ff;
  }
  ${media.xs`
width: 100%
  `};
`;

export const TopWrapper = styled.div`
  display: block;
  max-width: 1220px;
  width: 100%;
  box-sizing: border-box;

  margin: 0 auto;
  padding: 0px 20px;
`;
export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
  width: 100%;
  box-sizing: border-box;

  gap: 20px;
  ${media.xs`
flex-direction: column;
align-items: stretch;
  `};
`;
