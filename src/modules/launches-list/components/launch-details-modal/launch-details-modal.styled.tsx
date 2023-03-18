import styled from 'styled-components';

import { BREAKPOINTS, COLORS } from '../../../common/constants/style';

export const ModalWrap = styled('div')`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 3;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(217, 217, 217, 0.7);;
`;

export const ModalBlock = styled('div')`
  width: 80%;
  height: 80%;
  background-color: ${COLORS.grey};
  border-radius: 20px;
  padding: 20px;
  display: flex;
  column-gap: 60px;
  overflow-x: auto;
  @media screen and (max-width: ${BREAKPOINTS.netbook}) {
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
  }
  @media screen and (max-width: ${BREAKPOINTS.phone}) {
    width: 90%;
    height: 90%;
  }
`;

export const ModalClose = styled('img')`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  @media screen and (max-width: ${BREAKPOINTS.netbook}) {
    top: -160px
  }
  @media screen and (max-width: ${BREAKPOINTS.phone}) {
    height: 16px;
  }
`;

export const ModalBlockLeft = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 15px;
  width: 300px;
  @media screen and (max-width: ${BREAKPOINTS.netbook}) {
    flex-direction: row;
    align-items: center;
    column-gap: 15px;
  }

`;

export const ModalImg = styled('img')`
  width: 250px;
  @media screen and (max-width: ${BREAKPOINTS.netbook}) {
    width: auto;
    height: 150px;
  }
`;

export const ModalLinksWrap = styled('div')`
  display: flex;
  align-items: center;
  column-gap: 30px;
  height: 50px;
  @media screen and (max-width: ${BREAKPOINTS.netbook}) {
    flex-direction: column;
    height: fit-content;
    row-gap: 10px;
  }
`;

export const ModalLinkImg = styled('img')`
  width: 50px;
  height: 50px;
  @media screen and (max-width: ${BREAKPOINTS.netbook}) {
    width: 30px;
    height: 30px;
  }
`;

export const ModalLink = styled('a')`
  cursor: pointer;
`;

export const ModalBlockRight = styled('div')`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
  position: relative;
  @media screen and (max-width: ${BREAKPOINTS.netbook}) {
    flex-grow: 0;
    width: 100%;
  }
`;

export const ModalTitle = styled('h2')`
  font-weight: 600;
  width: 70%;
  font-size: 36px;
  text-align: center;
  @media screen and (max-width: ${BREAKPOINTS.tablet}) {
    font-size: 24px;
  }
  @media screen and (max-width: ${BREAKPOINTS.phone}) {
    font-size: 18px;
  }
`;

export const ModalBlockInfoWrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  @media screen and (max-width: ${BREAKPOINTS.tablet}) {
    row-gap: 6px;
  }
`;

export const ModalInfoBlock = styled('div')`
  font-size: 18px;
  font-weight: 500;
  @media screen and (max-width: ${BREAKPOINTS.tablet}) {
    font-size: 14px;
  }
  @media screen and (max-width: ${BREAKPOINTS.phone}) {
    font-size: 10px;
  }
`;

export const BoldText = styled('span')`
  font-weight: 700;
`
