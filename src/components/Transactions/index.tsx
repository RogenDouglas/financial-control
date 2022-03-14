import { Container } from "./styles";

export function Transactions() {
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
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$: 5.000</td>
            <td>tdabalho</td>
            <td>20/02/2022</td>
          </tr>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="withdraw">- R$: 5.000</td>
            <td>tdabalho</td>
            <td>20/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
