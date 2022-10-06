import styled from 'styled-components'
import { darken, transparentize } from 'polished'

export const Container = styled.form `
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid var(--input-border);
        background: var(--input-background);
        font-size: 1rem;
        font-weight: 400;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: var(--white);
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        transition: 0.2s;
        font-weight: 600;

        &:hover {
            filter: brightness(0.9)
        }
    
    }

`

export const ContainerRadio = styled.div `

    margin: 1rem 0%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    button {
        height: 4rem;
        border: 1px solid var(--input-border);
        border-radius: 0.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.2s;

        &:hover {
            border-color: ${ darken(0.1, '#D7D7D7')};
        }

        &.deposit {
            background: ${ transparentize(0.85, '#33CC95')};
        }

        &.withdraw {
            background: ${ transparentize(0.85, '#e52e40')};
        }

        img {
            width: 20px;
            height: 20px;
        }

        span {
            display: inline-block;
            margin-left: 1rem;
            font-size: 1rem;
            color: var(--text-title);
        }
    }

`