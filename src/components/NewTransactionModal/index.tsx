import Modal from "react-modal";

import { useTransaction } from "../../contexts/TransactionsProvider";

import upImg from "../../assests/up.svg";
import downImg from "../../assests/down.svg";
import { FormEvent, useState } from "react";

import { FormContainer, RadioBox, TransactionTypeContainer } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("deposit");
  const [category, setCategory] = useState("");

  const { createTransaction } = useTransaction();

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      description,
      amount,
      type,
      category,
    });

    setDescription("");
    setAmount(0);
    setType("deposit");
    setCategory("");
    onRequestClose();
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
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
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
