import React from 'react';
import { Oval } from 'react-loader-spinner';

import { PreloaderWrapper } from './preloader.styled';
import { COLORS } from '../../../common/constants/style';

const Preloader = () => {
  return (
    <PreloaderWrapper>
      <Oval
        height={100}
        width={100}
        color="#000000"
        visible
        ariaLabel="oval-loading"
        secondaryColor={COLORS.white}
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </PreloaderWrapper>
  );
};

export default Preloader;
