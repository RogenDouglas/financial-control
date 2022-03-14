import upImg from "../../assests/up.svg";
import downImg from "../../assests/down.svg";
import balanceImg from "../../assests/balance.svg";

import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={upImg} alt="Entradas" />
        </header>
        <strong>R$: 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={downImg} alt="Saídas" />
        </header>
        <strong>R$: 500,00</strong>
      </div>
      <div className="high-light-background">
        <header>
          <p>Saldo</p>
          <img src={balanceImg} alt="Saldo" />
        </header>
        <strong>R$: 500,00</strong>
      </div>
    </Container>
  );
}
