import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../public/images/esther_howard.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "Works in sync with your existing business flow—no disruption, just collaboration.​ ​ Opportunities:​​ Empowering Your existing Business Partner & Ecosystem",
    person: 'Business​ Collaboration​',
    avatar: robert_fox,
  },
  {
    testimony:
      "Serving In Between​ Sales Call Order Management & Promotion​",
    person: 'Capture 365 Days​ 24/7 Business​ Opportunities​',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "Improve Mitra Density, Additional​ Coverage & Direct Distribution​",
    person: 'Additional New​ Customer Register​ (Business Expansion)​',
    avatar: esther_howard,
  },
  // {
  //   testimony:
  //     "I can't express how grateful I am to RAFT. Their wealth management services have been a game-changer for my family's financial security. The expert guidance and personalized strategies have given us peace of mind, knowing that our future is in capable hands.",
  //   person: 'Cameron Williamson',
  //   avatar: cameron_williamson,
  // },
  // {
  //   testimony:
  //     "RAFT has transformed my approach to finance. Their smart investing options have helped me grow my wealth, and their user-friendly platform makes managing my money a breeze. I've never felt more confident about my financial future.",
  //   person: 'Robert Fox',
  //   avatar: robert_fox,
  // },
];

export const desktopHeaderPhrase = ['Business Impact​', ''];
