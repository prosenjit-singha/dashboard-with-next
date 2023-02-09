import Transaction from "@/types/transaction.type";

const transactionHistory: Transaction[] = [
  {
    id: "4431",
    name: "Marvin McKinney",
    price: 500,
    category: "Paycheck",
    paymentMethod: "Online Banking",
    status: "pending",
    date: new Date(),
    transactionType: "income",
    profilePhoto: null,
  },
  {
    id: "3587",
    name: "Jane Cooper",
    price: 400,
    transactionType: "expense",
    category: "Fuel",
    paymentMethod: "Online Banking",
    status: "progress",
    date: new Date(),
    profilePhoto: null,
  },
  {
    id: "8573",
    name: "Ralph Edwards",
    price: 300,
    transactionType: "expense",
    category: "Snacks",
    paymentMethod: "Online Banking",
    status: "completed",
    date: new Date(),
    profilePhoto: null,
  },
  {
    id: "9694",
    name: "Savannah Nguyen",
    price: 200,
    transactionType: "expense",
    category: "Misc.",
    paymentMethod: "Online Banking",
    status: "completed",
    date: new Date(),
    profilePhoto: null,
  },
];

export default transactionHistory;
