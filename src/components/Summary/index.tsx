import upImg from "../../assests/up.svg";
import downImg from "../../assests/down.svg";
import balanceImg from "../../assests/balance.svg";

import { Container } from "./styles";
import { useTransaction } from "../../contexts/TransactionsProvider";
import { convertCurrencyInBRL } from "../../utils/convertCurrency";

export function Summary() {
  const { transactions } = useTransaction();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.desposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      desposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={upImg} alt="Entradas" />
        </header>
        <strong>{convertCurrencyInBRL(summary.desposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={downImg} alt="Saídas" />
        </header>
        <strong>- {convertCurrencyInBRL(summary.withdraws)}</strong>
      </div>
      <div className="high-light-background">
        <header>
          <p>Saldo</p>
          <img src={balanceImg} alt="Saldo" />
        </header>
        <strong>{convertCurrencyInBRL(summary.total)}</strong>
      </div>
    </Container>
  );
}
