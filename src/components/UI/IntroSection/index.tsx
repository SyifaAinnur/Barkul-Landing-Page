'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Edge, Edges, Title } from '../FinancialFreedom/styles';
import lola_card from '../../../../public/images/lola_card.png';
import orange_card from '../../../../public/images/orange_card.png';
import terry_card from '../../../../public/images/terry_card.png';
import {
  Wrapper,
  Inner,
  Header,
  HeaderMainText,
  CardsContainer,
  LeftImage,
  MiddleImage,
  RightImage,
} from './styles';
import { MaskText } from '@/components';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  edges,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
} from './constants';


import mission1 from '../../../../public/images/image/MISSION1.png';
import mission2 from '../../../../public/images/image/MiSSION2.png';
import mission3 from '../../../../public/images/image/MISSION3.png';

const IntroSection = () => {
  const isMobile = useIsMobile();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Wrapper>
      <Inner>
        <Header>
          <h3>Introducing</h3>
          <HeaderMainText>
            {isMobile ? (
              <>
                <MaskText phrases={mobileHeaderPhrase} tag="h1" />
                <MaskText phrases={mobileParagraphPhrase} tag="p" />
              </>
            ) : (
              <>
                <MaskText phrases={desktopHeaderPhrase} tag="h1" />
                <MaskText phrases={desktopParagraphPhrase} tag="p" />
              </>
            )}
          </HeaderMainText>
        </Header>
        <CardsContainer>
          <LeftImage
            className={isHovered ? 'active' : ''}
            src={mission2}
            alt="orange_atm_card"
            // style={{
            //   height: "40%", width: "40%"
            // }}
          />
          <MiddleImage
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            src={mission1}
            alt="blue card"
          />
          <RightImage
            className={isHovered ? 'active' : ''}
            src={mission3}
            alt="terry card"
            // style={{
            //   height: "40%", width: "40%"
            // }}
          />
        </CardsContainer>
        <Edges>
          {edges.map((edge, i) => (
            <Edge key={i}>
              <Title>
                {/* <Image src={edge.icon} alt="icon" /> */}
                <MaskText phrases={new Array(edge.point)} tag="h3" />
              </Title>
              <MaskText phrases={new Array(edge.details)} tag="p" />
            </Edge>
          ))}
        </Edges>
      </Inner>
    </Wrapper>
  );
};

export default IntroSection;
