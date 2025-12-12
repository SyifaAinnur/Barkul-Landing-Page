import ic_document_duplicate from '../../../../public/svgs/ic_document_duplicate.svg';
import ic_identification from '../../../../public/svgs/ic_identification.svg';
import ic_lock_closed from '../../../../public/svgs/ic_lock_closed.svg';

// For desktop
export const desktopHeaderPhrase = ["Introducing Brand", 'Mission and Loyalty Program'];
export const desktopParagraphPhrase = [
  " to cultivate enduring​ relationships, enhance customer satisfaction,​​",
  'and drive long-term business value.',
  'convenience.',
];

// For mobile
export const mobileHeaderPhrase = ["Introducing Brand", 'Mission and Loyalty Program'];
export const mobileParagraphPhrase = [
 " to cultivate enduring​ relationships, enhance customer satisfaction,​​",
  'and drive long-term business value.',
];

export const edges = [
  {
    point: 'Daily Check-in',
    details:
      'Your card features a daily check-in feature, allowing you to log in and check out quickly, making your earn coins easier.',
    icon: ic_document_duplicate,
  },
  {
    point: 'Majang',
    details:
      'Capture your products on self, making it easy for customers to get coins.',
    icon: ic_identification,
  },
  {
    point: 'Transaction',
    details:
      'Get coins by completing missions and transactions, making it easier for you to get coins.',
    icon: ic_lock_closed,
  },
];
