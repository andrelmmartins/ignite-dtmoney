import { useState } from "react";
import { Dashboard } from "../../components/Dashboard";
import { Header } from "../../components/Header";
import { NewTransactionModal } from "../../components/NewTransactionModal";
import { GlobalStyle } from "../../styles/global";

export function App() {

  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  function handleOpenModal() {
      setModalIsOpen(true)
  }

  function handleCloseModal() {
      setModalIsOpen(false)
  }

  return (
    <>
      <Header onOpenModal={handleOpenModal}/>
      <Dashboard/>

      <NewTransactionModal isOpen={modalIsOpen} onClose={handleCloseModal}/>

      <GlobalStyle/>
    </>
  )
}

