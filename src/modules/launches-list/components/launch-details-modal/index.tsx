import React, { Dispatch, SetStateAction } from 'react';

import {
  BoldText,
  ModalBlock, ModalBlockInfoWrapper,
  ModalBlockLeft, ModalBlockRight, ModalClose,
  ModalImg, ModalInfoBlock,
  ModalLink, ModalLinkImg,
  ModalLinksWrap, ModalTitle,
  ModalWrap
} from './launch-details-modal.styled';
import { ILaunch } from '../../../common/types/launch.types';

import image_placeholder from '../../../../assets/image_placeholder.png';
import youtube from '../../../../assets/modal-links/youtube.svg';
import wikipedia from '../../../../assets/modal-links/wikipedia.svg';
import space from '../../../../assets/modal-links/space.svg';
import cross from '../../../../assets/modal_cross.svg';

const LaunchDetailsModal = (
  {
    launch,
    reference,
    setLaunchForModal
  }: { launch: ILaunch, reference: any, setLaunchForModal: Dispatch<SetStateAction<ILaunch>> }
) => {
  const datePresenter = (date) => date.split('T')[0].split('-').join('.');

  return (
    <ModalWrap>
      <ModalBlock ref={reference}>
        <ModalBlockLeft>
          <ModalImg src={launch.links.patch.small || image_placeholder} alt='img' />
          <ModalLinksWrap>
            {launch.links.webcast &&
              <ModalLink target='_blank' href={launch.links.webcast}>
                <ModalLinkImg src={youtube} alt='youtube' />
              </ModalLink>
            }
            {launch.links.wikipedia &&
              <ModalLink target='_blank' href={launch.links.wikipedia}>
                <ModalLinkImg src={wikipedia} alt='wikipedia' />
              </ModalLink>
            }
            {launch.links.article &&
              <ModalLink target='_blank' href={launch.links.article}>
                <ModalLinkImg src={space} alt='space' />
              </ModalLink>
            }
          </ModalLinksWrap>
        </ModalBlockLeft>
        <ModalBlockRight>
          <ModalTitle>{launch.name}</ModalTitle>
          <ModalBlockInfoWrapper>
            <ModalInfoBlock>
              <BoldText>Success:</BoldText> {launch.success ? 'yes' : 'no'}
            </ModalInfoBlock>
            <ModalInfoBlock>
              <BoldText>Flight number:</BoldText> {launch.flight_number}
            </ModalInfoBlock>
            <ModalInfoBlock>
              <BoldText>Date:</BoldText> {datePresenter(launch.date_local)}
            </ModalInfoBlock>
            <ModalInfoBlock>
              <BoldText>Details:</BoldText> {launch.details || 'no details'}
            </ModalInfoBlock>
          </ModalBlockInfoWrapper>
          <ModalClose onClick={() => setLaunchForModal(null)} src={cross} alt='cross' />
        </ModalBlockRight>
      </ModalBlock>
    </ModalWrap>
  );
};

export default LaunchDetailsModal;
