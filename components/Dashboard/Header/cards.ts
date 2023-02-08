export type Card = {
  number: number;
  balance: number;
  currency: string;
  expDate: Date;
};

const cards: Card[] = [
  {
    number: 3475738137591234,
    balance: 3215352,
    currency: "USD",
    expDate: new Date("2024-04"),
  },
  {
    number: 3475738137591234,
    balance: 3215352,
    currency: "USD",
    expDate: new Date("2024-04"),
  },
];

export default cards;
