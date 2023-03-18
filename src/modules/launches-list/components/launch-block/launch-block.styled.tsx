import styled from 'styled-components';

import { BREAKPOINTS, COLORS } from '../../../common/constants/style';

export const LaunchBlockWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  justify-content: flex-start;
  border-radius: 15px;
  width: 23%;
  padding: 20px;
  background-color: ${COLORS.grey};
  cursor: pointer;
  text-align: center;
  @media screen and (max-width: ${BREAKPOINTS.small_laptop}) {
    width: 30%;
  }
  @media screen and (max-width: ${BREAKPOINTS.little_tablet}) {
    padding: 10px;
  }
  @media screen and (max-width: ${BREAKPOINTS.phone}) {
    width: 45%;
  }
`

export const LaunchMiniImg = styled('img')`
  height: 200px;
  @media screen and (max-width: ${BREAKPOINTS.netbook}) {
    height: 150px;
  }
  @media screen and (max-width: ${BREAKPOINTS.tablet}) {
    height: 100px;
  }
  @media screen and (max-width: ${BREAKPOINTS.little_tablet}) {
    height: 70px;
  }
`

export const LaunchBlockTitle = styled('h3')`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  @media screen and (max-width: ${BREAKPOINTS.netbook}) {
    font-size: 16px;
  }
  @media screen and (max-width: ${BREAKPOINTS.tablet}) {
    font-size: 14px;
  }
  @media screen and (max-width: ${BREAKPOINTS.little_tablet}) {
    font-size: 12px;
  }
  @media screen and (max-width: ${BREAKPOINTS.phone}) {
    font-size: 10px;
  }
`
