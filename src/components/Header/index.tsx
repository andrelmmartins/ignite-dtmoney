import logo from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface Props {
    onOpenModal: () => void
}

export function Header(props: Props) {
    return (
        <Container>
            <Content>
                <img src={logo} alt="dt money"/>
                <button type='button' onClick={props.onOpenModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}