type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently asked', 'questions'];
export const mobileHeaderPhrase = ['Frequently', 'asked', 'questions'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'What is Barangkulakan?',
    answer:
      'Barangkulakan is an e-Distribution platform that carries a wide range of product categories from Multi-Principal, which serving General Trade Channel with sharing economy concept through innovative digital solutions. ​',
  },
  {
    question: 'How to get Barangkulakan?',
    answer:
      'you can download Barangkulakan from the Google Play Store. or click the button​',
  },
  {
    question: 'How to register as a customer?',
    answer:
      'Next, you can open the Barangkulakan application, then click "Login", followed by "Register", and select "New User". After that, click "Start Registration". Please enter your store name, phone number, and a valid address. If you do not have a referral code, you may leave it blank. Then, proceed with the next steps as guided in the application.',
  },
  // {
  //   question: 'What benefits does RAFT offer for wealth management?',
  //   answer:
  //     'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  // },
];
