import styled from 'styled-components'

export const Container = styled.section `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;
`

export const Card = styled.div<{ type: 'income' | 'outcome' | 'result', showInRed?: boolean }> `
    background: ${ 
        props => props.type === 'result' ? 
            props.showInRed ? 'var(--red)': 'var(--green)'
        : 'var(--shape)'};
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;

    header {
        display: flex;
        justify-content: space-between;
        color: ${ props => props.type === 'result' ? 'var(--white)' : 'var(--text-title)'};
    }

    h4 {
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 400;
        display: block;
        line-height: 3rem;
        color: ${ props => props.type === 'result' ? 'var(--white)' : props.type === 'outcome' ? 'var(--red)' : 'var(--text-title)'};

        strong {
            font-weight: 500;
        }
    }
`