import Modal from "react-modal";
import { FormContainer, RadioBox, TransactionTypeContainer } from "./styles";

import upImg from "../../assests/up.svg";
import downImg from "../../assests/down.svg";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("deposit");
  const [category, setCategory] = useState("");

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      description,
      value,
      type,
      category,
    };

    api.post("/transaction", data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        X
      </button>
      <FormContainer onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            typeTransaction="deposit"
          >
            <img src={upImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            typeTransaction="withdraw"
          >
            <img src={downImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </FormContainer>
    </Modal>
  );
}
