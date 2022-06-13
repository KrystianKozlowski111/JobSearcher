import styled from 'styled-components';
import { media } from '../../assets/Mixins';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #4943da10;
  padding-bottom: 60px;
  box-sizing: border-box;
  padding-top: 60px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  box-sizing: border-box;
  grid-auto-rows: 1fr;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0px 20px;

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
export const Button = styled.a`
  background: #e8e9fe;
  border-radius: 10px;
  font-style: normal;
  font-weight: 550;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  font-family: Nunito, sans-serif;
  box-sizing: border-box;
  color: #4943da;
  text-decoration: none;
  padding: 5px;
  &:hover {
    background: #4943da;
    color: #f9f9ff;
    transition: 0.3s;
  }
`;
export const Title = styled.div`
  display: flex;
  font-style: normal;
  font-family: Nunito, sans-serif;
  font-weight: 500;
  font-size: 25px;
  box-sizing: border-box;
  line-height: 29px;
  text-align: center;
`;
export const Text = styled.div`
  display: flex;
  font-family: Nunito, sans-serif;
  font-weight: 400;
  font-size: 18px;
  box-sizing: border-box;
  line-height: 21px;
`;

export const FilterButton = styled.div`
  padding: 7px 10px;
  border: 2px solid #4943da;
  border-radius: 20px;
  font-family: Nunito, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  white-space: now-wrap;
  line-height: 21px;
  box-sizing: border-box;
  text-align: center;
  color: #4943da;
  cursor: pointer;
  &:hover {
    background: #4943da11;
    transition: 0.3s;
  }
`;
export const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin: 0 auto;
  gap: 30px;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0px 20px;
`;
