import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LaunchesWrapper, ScrollTopBtn, ScrollUpBtnImg } from './launches-list.styled';
import { getLaunches } from '../common/store/slices/launches.slice';
import { AppDispatch } from '../common/store/store';
import { ILaunch } from '../common/types/launch.types';
import LaunchBlock from './components/launch-block';
import SortingBar from './components/sorting-bar';
import LaunchDetailsModal from './components/launch-details-modal';
import useComponentVisible from '../common/hooks/useComponentVisible';

import arrow from '../../assets/up_arrow.svg';

const LaunchesList = () => {
  const { launches, status, totalPages } = useSelector(state => state['launchesReducers']);

  const [sortParams, setSortParams] = useState<string>('name');

  const [sortOrder, setSortOrder] = useState<number>(-1);

  const [searchQuery, setSearchQuery] = useState<string>('');

  const [pageNumber, setPageNumber] = useState<number>(1);

  const [scrollTop, setScrollTop] = useState<number>(0);

  const [launchForModal, setLaunchForModal] = useState<ILaunch | null>(null);

  const [isOnlyWithDetails, setIsOnlyWithDetails] = useState<boolean>(false);

  const [isOnlySuccess, setIsOnlySuccess] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true);

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  useEffect(() => {
    const windowHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    if (scrollTop !== 0
      &&
      scrollTop + window.innerHeight > windowHeight - window.innerHeight
      &&
      status !== 'pending'
      &&
      pageNumber < totalPages
    ) {
      setPageNumber(pageNumber + 1);
      setScrollTop(0);
    }
  }, [scrollTop]);


  useEffect(() => {
    dispatch(getLaunches({
      pageNumber,
      sortOrder,
      sortParams,
      searchQuery,
      details: isOnlyWithDetails,
      success: isOnlySuccess
    }));
  }, [pageNumber]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageNumber(1);
    dispatch(getLaunches({
      pageNumber: 1,
      sortOrder,
      sortParams,
      searchQuery,
      details: isOnlyWithDetails,
      success: isOnlySuccess
    }));
  }, [sortOrder, sortParams, searchQuery, isOnlyWithDetails, isOnlySuccess]);

  useEffect(() => {
    launchForModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible';
  }, [launchForModal, setLaunchForModal]);

  useEffect(() => {
    if (!isComponentVisible) {
      setLaunchForModal(null);
      setIsComponentVisible(true);
    }
  }, [isComponentVisible]);

  return (
    <>
      {!!launchForModal &&
        <LaunchDetailsModal setLaunchForModal={setLaunchForModal} reference={ref} launch={launchForModal} />}
      <SortingBar
        sortParams={sortParams}
        setSortParams={setSortParams}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isOnlyWithDetails={isOnlyWithDetails}
        setIsOnlyWithDetails={setIsOnlyWithDetails}
        isOnlySuccess={isOnlySuccess}
        setIsOnlySuccess={setIsOnlySuccess}
      />
      <LaunchesWrapper>
        {!!launches.length && launches.map((launch) =>
          <LaunchBlock setLaunchForModal={setLaunchForModal} data={launch} key={launch.id} />
        )}
      </LaunchesWrapper>
      <ScrollTopBtn onClick={() => window.scroll(0, 0)} theme={{ visible: scrollTop > window.innerHeight }}>
        <ScrollUpBtnImg src={arrow} alt='arrow' />
      </ScrollTopBtn>
    </>
  );
};

export default LaunchesList;
