import logoImg from "../../assests/logo.svg";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Financial Control" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}
