import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Turn as Hamburger } from 'hamburger-react';

import {
  BurgerBtn,
  CheckBox,
  CheckBoxWrap,
  OrderBtn, SearchInput, SortContent,
  SortDropdownBtn,
  SortDropdownElement,
  SortDropdownMenu,
  SortDropDownWrapper, SortSide,
  SortWrapper, SpacexLogo
} from './sorting-bar.styled';
import useComponentVisible from '../../../common/hooks/useComponentVisible';
import useDebounce from '../../../common/hooks/useDebounce';

import sort_up from '../../../../assets/sort_to_up.svg';
import sort_down from '../../../../assets/sort_to_down.svg';
import check from '../../../../assets/check.svg';
import spacex_logo from '../../../../assets/spacex_logo.svg';
import useWindowDimensions from '../../../common/hooks/useWindowsDimentions';

interface ISortingBarProps {
  sortParams: string,
  setSortParams: Dispatch<SetStateAction<string>>
  searchQuery: string,
  setSearchQuery: Dispatch<SetStateAction<string>>
  sortOrder: number,
  setSortOrder: Dispatch<SetStateAction<number>>
  isOnlyWithDetails: boolean,
  setIsOnlyWithDetails: Dispatch<SetStateAction<boolean>>
  isOnlySuccess: boolean,
  setIsOnlySuccess: Dispatch<SetStateAction<boolean>>
}


const SortingBar = ({
                      sortParams,
                      setSortParams,
                      setSearchQuery,
                      sortOrder,
                      setSortOrder,
                      isOnlyWithDetails,
                      setIsOnlyWithDetails,
                      isOnlySuccess,
                      setIsOnlySuccess
                    }: ISortingBarProps
) => {
  const [isSortDropOpen, setIsSortDropOpen] = useState<boolean>(false);

  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);

  const [inputValue, setInputValue] = useState<string>('');

  const debounced = useDebounce(inputValue);

  const { width } = useWindowDimensions();

  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true);

  useEffect(() => {
    setIsBurgerOpen(false);
  }, [width]);

  const sortVariants = [
    {
      name: 'Name',
      param: 'name'
    },
    {
      name: 'Date',
      param: 'date_unix'
    },
    {
      name: 'Fire date',
      param: 'static_fire_date_unix'
    }
  ];

  const outputParam = sortVariants.find((el) => el.param === sortParams).name;

  useEffect(() => {
    setSearchQuery(debounced);
  }, [debounced]);

  useEffect(() => {
    setIsSortDropOpen(false);
  }, [sortParams, sortOrder]);

  useEffect(() => {
    if (!isComponentVisible) {
      setIsSortDropOpen(false);
      setIsComponentVisible(true);
    }
  }, [isComponentVisible]);

  return (
    <SortWrapper>
      <SortContent theme={{ isOpen: isBurgerOpen }}>
        <SortSide>
          <SearchInput placeholder='search...' type='text' onChange={(e) => setInputValue(e.target.value)} />
          <CheckBoxWrap>
            Only with details:
            <CheckBox onClick={() => setIsOnlyWithDetails(!isOnlyWithDetails)}>
              {isOnlyWithDetails && <img src={check} alt='check' />}
            </CheckBox>
          </CheckBoxWrap>
          <CheckBoxWrap>
            Only success:
            <CheckBox onClick={() => setIsOnlySuccess(!isOnlySuccess)}>
              {isOnlySuccess && <img src={check} alt='check' />}
            </CheckBox>
          </CheckBoxWrap>
        </SortSide>
        <SortSide>
          Sort by:
          <SortDropDownWrapper>
            <SortDropdownBtn onClick={() => setIsSortDropOpen(!isSortDropOpen)}>
              {outputParam}
            </SortDropdownBtn>
            <SortDropdownMenu ref={ref} theme={{ isOpen: isSortDropOpen }}>
              {sortVariants.map((variant) =>
                variant.param === sortParams ? null :
                  <SortDropdownElement onClick={() => setSortParams(variant.param)} key={variant.param}>
                    {variant.name}
                  </SortDropdownElement>
              )}
            </SortDropdownMenu>
          </SortDropDownWrapper>
          <OrderBtn onClick={() => setSortOrder(-sortOrder)} src={sortOrder > 0 ? sort_up : sort_down} alt='btn' />
        </SortSide>
      </SortContent>
      <SpacexLogo src={spacex_logo} alt='logo' />
      <BurgerBtn type='submit' onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
        <Hamburger size={26} toggled={isBurgerOpen} />
      </BurgerBtn>
    </SortWrapper>
  );
};

export default SortingBar;
