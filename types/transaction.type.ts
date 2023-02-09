type Transaction = {
  id: string;
  name: string;
  price: number;
  date: Date;
  category: string;
  paymentMethod: string;
  status: "pending" | "progress" | "completed";
  transactionType: "income" | "expense";
  profilePhoto: null | string;
};

export default Transaction;
