import styled from 'styled-components';
import { media } from '../../assets/Mixins';
export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
  flex-direction: column;
  box-sizing: border-box;
  gap: 20px;
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 15px;
  padding: 20px;
  box-shadow: 0px 1px 8px rgba(30, 30, 30, 0.15);
  border-radius: 10px;
  background-color: #fff;
`;

export const Button = styled.a`
  background: #e8e9fe;
  border-radius: 6px;
  box-sizing: border-box;
  font-style: normal;
  font-weight: 550;
  font-size: 18px;
  line-height: 21px;
  border: 0;
  text-align: center;
  font-family: Nunito, sans-serif;
  color: #4943da;
  text-decoration: none;
  padding: 5px;
  transition: all 0.3s linear;
  &:hover {
    background: #4943daa3;
    color: #f9f9ff;
  }
`;
export const Title = styled.div`
  display: flex;
  font-style: normal;
  font-family: Nunito, sans-serif;
  font-weight: 500;
  box-sizing: border-box;
  font-size: 20px;
  line-height: 1.2;
  gap: 16px;
  align-items: flex-start;
  flex: 1;
  width: 100%;
`;
export const Text = styled.div`
  display: flex;
  font-family: Nunito, sans-serif;
  font-weight: 400;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.2;
`;
export const Img = styled.img`
  display: block;
  max-width: 40px;
  min-width: 40px;
`;
export const CityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  box-sizing: border-box;
`;
