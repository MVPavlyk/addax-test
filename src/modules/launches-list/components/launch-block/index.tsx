import React, { Dispatch, SetStateAction } from 'react';

import { ILaunch } from '../../../common/types/launch.types';
import { LaunchBlockTitle, LaunchBlockWrapper, LaunchMiniImg } from './launch-block.styled';

import image_placeholder from '../../../../assets/image_placeholder.png';

const LaunchBlock = (
  {
    data,
    setLaunchForModal
  }
    :
    {
      data: ILaunch,
      setLaunchForModal: Dispatch<SetStateAction<ILaunch>>
    }
) => {
  return (
    <LaunchBlockWrapper onClick={() => setLaunchForModal(data)}>
      <LaunchMiniImg src={data.links.patch.small || image_placeholder} alt={data.name} />
      <LaunchBlockTitle>{data.name}</LaunchBlockTitle>
    </LaunchBlockWrapper>
  );
};

export default LaunchBlock;
