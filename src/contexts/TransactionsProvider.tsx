import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface Transaction {
  id: number;
  description: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionsContextProvider {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({
  children,
}: TransactionsContextProvider) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function createTransaction(transaction: TransactionInput) {
    const response = await api.post("/transaction", {
      ...transaction,
      createdAt: new Date(),
    });

    const { transaction: newTransaction } = response.data;

    setTransactions([...transactions, newTransaction]);
  }

  useEffect(() => {
    api
      .get("/transaction")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransaction() {
  return useContext(TransactionsContext);
}
