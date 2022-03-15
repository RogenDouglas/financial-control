import logoImg from "../../assests/logo.svg";
import { Container, Content } from "./styles";

type HeaderProps = {
  onOpenNewTransaction: () => void;
};

export function Header({ onOpenNewTransaction }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Financial Control" />
        <button type="button" onClick={onOpenNewTransaction}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
