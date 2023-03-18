import styled from 'styled-components';

import { BREAKPOINTS } from '../common/constants/style';

export const LaunchesWrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  padding: 40px 150px;
  @media screen and (max-width: ${BREAKPOINTS.big_laptop}) {
    padding: 40px 70px;
  }
  @media screen and (max-width: ${BREAKPOINTS.small_laptop}) {
    padding: 40px 50px;
  }
  @media screen and (max-width: ${BREAKPOINTS.tablet}) {
    gap: 15px;
  }
  @media screen and (max-width: ${BREAKPOINTS.little_tablet}) {
    padding: 20px;
  }
`;

export const ScrollTopBtn = styled('button')`
  background: #0073B1;
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.25);
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: fixed;
  bottom: ${props => props.theme.visible ? '100px' : '-80px'};
  right: 60px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .2s linear;
  @media screen and (max-width: ${BREAKPOINTS.little_tablet}) {
    width: 40px;
    height: 40px;
  }
`;

ScrollTopBtn.defaultProps = {
  theme: {
    visible: false
  }
};

export const ScrollUpBtnImg = styled('img')`
  height: 30px;
  @media screen and (max-width: ${BREAKPOINTS.little_tablet}) {
    height: 20px;
  }
`;
