import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
  const [isOpenModalNewTransaction, setIsOpenModalNewTransaction] =
    useState(false);

  function handleOpenModalNewTransaction() {
    setIsOpenModalNewTransaction(true);
  }

  function handleCloseModalNewTransaction() {
    setIsOpenModalNewTransaction(false);
  }

  return (
    <>
      <Header onOpenNewTransaction={handleOpenModalNewTransaction} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isOpenModalNewTransaction}
        onRequestClose={handleCloseModalNewTransaction}
      />

      <GlobalStyle />
    </>
  );
}
