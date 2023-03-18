import styled from 'styled-components';

import { BREAKPOINTS, COLORS } from '../../../common/constants/style';

export const SortWrapper = styled('div')`
  width: 100%;
  display: flex;
  height: 50px;
  z-index: 1;
  padding: 0 150px;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.white};
  box-shadow: 0 4px 10px 1px ${COLORS.dark_grey};
  position: relative;
  @media screen and (max-width: ${BREAKPOINTS.big_laptop}) {
    padding: 0 70px;
  }
  @media screen and (max-width: ${BREAKPOINTS.small_laptop}) {
    padding: 0 50px;
  }
  @media screen and (max-width: ${BREAKPOINTS.tablet}) {
    justify-content: space-between;
    padding: 0 30px;
  }
`;

export const SpacexLogo = styled('img')`
  display: none;
  height: 30px;
  @media screen and (max-width: ${BREAKPOINTS.tablet}) {
    display: block;
  }
`;

export const SortContent = styled('div')`
  display: flex;
  width: 100%;
  align-items: center;
  z-index: -1;
  justify-content: space-between;
  transition: all .2s linear;
  @media screen and (max-width: ${BREAKPOINTS.tablet}) {
    padding: 30px;
    width: 100%;
    box-shadow: inset 0 10px 10px -5px ${COLORS.dark_grey};
    background-color: ${COLORS.white};
    position: absolute;
    top: 50px;
    left: ${props => props.theme.isOpen ? '0' : '100%'};
    align-items: flex-end;
    flex-direction: column;
    row-gap: 15px;
  }
`;

export const SortSide = styled('div')`
  display: flex;
  align-items: center;
  column-gap: 15px;
  @media screen and (max-width: ${BREAKPOINTS.tablet}) {
    flex-direction: column;
    align-items: flex-end;
    row-gap: 10px;
  }
`;

export const BurgerBtn = styled('button')`
  cursor: pointer;
  display: none;
  background: none;
  padding: 0;
  border: none;
  @media screen and (max-width: ${BREAKPOINTS.tablet}) {
    display: block;
  }
`;

export const CheckBoxWrap = styled('div')`
  display: flex;
  align-items: center;
  column-gap: 8px;
  font-size: 14px;
`;

export const CheckBox = styled('div')`
  width: 15px;
  height: 15px;
  border-radius: 3px;
  border: 1px solid ${COLORS.dark_grey};
  cursor: pointer;
  user-select: none;
`;

export const SearchInput = styled('input')`
  height: 30px;
  width: 150px;
  background-color: ${COLORS.grey};
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  padding: 0 10px;
  @media screen and (max-width: ${BREAKPOINTS.small_laptop}) {
    width: 120px;
  }
`;

export const OrderBtn = styled('img')`
  height: 30px;
  cursor: pointer;
`;

export const SortDropDownWrapper = styled('div')`
  position: relative;
`;

export const SortDropdownBtn = styled('button')`
  height: 30px;
  width: 170px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  background-color: ${COLORS.dark_grey};
  border: none;
  cursor: pointer;
  @media screen and (max-width: ${BREAKPOINTS.small_laptop}) {
    width: 140px;
  }
`;
export const SortDropdownMenu = styled('div')`
  position: absolute;
  width: 100%;
  top: 30px;
  left: 0;
  display: ${props => props.theme.isOpen ? 'block' : 'none'};
  background-color: ${COLORS.dark_grey};
`;

export const SortDropdownElement = styled('div')`
  height: 30px;
  width: 100%;
  border-top: 1px solid ${COLORS.white};
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
`;
