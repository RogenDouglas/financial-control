import { useTransaction } from "../../contexts/TransactionsProvider";
import { convertCurrencyInBRL } from "../../utils/convertCurrency";
import { Container } from "./styles";

export function Transactions() {
  const { transactions } = useTransaction();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.description}</td>
              <td className={transaction.type}>
                {convertCurrencyInBRL(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
