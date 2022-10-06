import { FormEvent, useState } from 'react'
import Modal from 'react-modal'

import { Container, ContainerRadio } from './styles'
import close from '../../assets/close.svg'
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import { useTransactionContext } from '../../hooks/useTransactionContext'

Modal.setAppElement('#root')

interface Props {
    isOpen: boolean
    onClose: () => void
}

export function NewTransactionModal( props: Props ) {

    const [ title, setTitle ] = useState('');
    const [ amount, setAmount ] = useState(0);
    const [ type, setType ] = useState< 'deposit' | 'withdraw' >('deposit')    
    const [ category, setCategory ] = useState('')

    const { create } = useTransactionContext()

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        await create({ title, amount, type, category })
        props.onClose()
        
        setTitle('')
        setAmount(0)
        setType('deposit')
        setCategory('')
    }

    return (
        <Modal
            isOpen={props.isOpen}
            shouldCloseOnEsc
            shouldCloseOnOverlayClick
            onRequestClose={props.onClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <Container onSubmit={handleSubmit}>

                <button type='button' onClick={props.onClose} className='react-modal-close'>
                    <img src={close} alt="Fechar Modal"/>
                </button>

                <h2>Cadastrar Transação</h2>

                <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Título'/>
                <input value={amount} onChange={(e) => setAmount(Number(e.target.value))} placeholder='Valor' type='number'/>

                <ContainerRadio>
                    <button type='button' className={type === 'deposit' ? 'deposit' : ''} onClick={() => setType('deposit')}>
                        <img src={income} alt="Entrada" />
                        <span>Entrada</span>
                    </button>

                    <button type='button' className={type === 'withdraw' ? 'withdraw' : ''} onClick={() => setType('withdraw')}>
                        <img src={outcome} alt="Saída" />
                        <span>Saída</span>
                    </button>
                </ContainerRadio>

                <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Categoria'/>
                
                <button type='submit'>Cadastrar</button>
            </Container>
        </Modal>
    )
}