'use client';
import Image from 'next/image';
import big_banner from '../../../../public/images/big_banner.png';
import featured_mobile_banner from '../../../../public/images/featured_mobile_banner.png';
import ParallaxText from '@/components/Common/ParallaxImages';
import companies_image from '../../../../public/images/companies.png';
import { Wrapper, Inner, ImageContainer, ParallaxImages, Div } from './styles';
import RevealCover from '@/components/Common/RevealCover';
import { useIsMobile } from '../../../../libs/useIsMobile';

import map from '../../../../public/images/image/MAP.png';
import garuda from '../../../../public/images/image/garuda.png';
import dilan from '../../../../public/images/image/dilan.png';
import montea from '../../../../public/images/image/montea.png';
import prochiz from '../../../../public/images/image/prochiz.png';
import garudasehat from '../../../../public/images/image/garudasehat.png';
import chocolatos from '../../../../public/images/image/chocolatos.png';
import skippy from '../../../../public/images/image/skippy.png';
import clevp from '../../../../public/images/image/clevp.png';
import topchiz from '../../../../public/images/image/topchiz.png';
import tudung from '../../../../public/images/image/tudung.png';
import gerry from '../../../../public/images/image/gerry.png';
import gerrysalut from '../../../../public/images/image/gerrysalut.png';
import okky from '../../../../public/images/image/okky.png';
import quaker from '../../../../public/images/image/queker.png';
import ransfood from '../../../../public/images/image/ransfood.png';
import pedua from '../../../../public/images/image/pedua.png';
import { Stat, Stats } from '../FinancialFuture/styles';
import { stats } from '../FinancialFuture/constants';
import MaskText from '@/components/Common/MaskText';


export const imageVariants = {
  hidden: {
    scale: 1.6,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.6, 0.05, -0.01, 0.9],
      delay: 0.2,
    },
  },
};

const Featured = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <ImageContainer>
          <RevealCover />
          <Div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.25, once: true }}
          >
            {isMobile ? (
              <Image
                src={map}
                alt="featured_mobile_banner"
                fill
              />
            ) : (
              <Image
                src={map}
                alt="big_banner"
                fill
                style={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  color: 'transparent',
                  transform: 'rotate(332deg) scale(1)',
                  objectFit: 'contain'
                }}
              />

            )}
          </Div>
        </ImageContainer>

        <Stats
          style={{
            margin: '6.25rem auto',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '80px',
          }}
        >

          {stats.map((stat, i) => (
            <Stat key={i}>
              <MaskText phrases={new Array(stat.number)} tag="h1" />
              <MaskText phrases={new Array(stat.subtitle)} tag="p" />
            </Stat>
          ))}
        </Stats>
        <h2>Member of Garudafood Group​</h2>
        <ParallaxImages>
          <ParallaxText baseVelocity={-4}>
            <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
              <Image src={garuda} alt="garuda" style={{
                width: 150,
                height: 80
              }} />
              <Image src={dilan} alt="dilan" style={{
                width: 150,
                height: 80
              }} />
              <Image src={montea} alt="montea" style={{
                width: 150,
                height: 80
              }} />
              <Image src={prochiz} alt="prochiz" style={{
                width: 150,
                height: 80
              }} />
              <Image src={garudasehat} alt="garudasehat" style={{
                width: 250,
                height: 80
              }} />
              <Image src={chocolatos} alt="chocolatos" style={{
                width: 150,
                height: 80
              }} />
              <Image src={skippy} alt="skippy" style={{
                width: 150,
                height: 80
              }} />
              <Image src={clevp} alt="clevp" style={{
                width: 150,
                height: 80
              }} />
              <Image src={topchiz} alt="topchiz" style={{
                width: 150,
                height: 80
              }} />
              <Image src={tudung} alt="tudung" style={{
                width: 150,
                height: 80
              }} />
              <Image src={gerry} alt="gerry" style={{
                width: 150,
                height: 80
              }} />
              <Image src={gerrysalut} alt="gerrysalut" style={{
                width: 150,
                height: 80
              }} />
              <Image src={okky} alt="okky" style={{
                width: 150,
                height: 80
              }} />
              <Image src={quaker} alt="quaker" style={{
                width: 100,
                height: 80
              }} />
              <Image src={ransfood} alt="ransfood" style={{
                width: 150,
                height: 80
              }} />
              <Image src={pedua} alt="pedua" style={{
                width: 150,
                height: 80
              }} />
            </div>
          </ParallaxText>

        </ParallaxImages>
      </Inner>
    </Wrapper>
  );
};

export default Featured;
