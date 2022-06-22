import styled, { css } from "styled-components";

export const Container = styled.div`
    text-align: left;
    font-size: 12px;
    font-weight: 300;
    div {
        background: var(--color-grey-3);
        span {
            color: var(--color-negative);
        }
    }
`

export const InputContainer = styled.div`
    background-color: var(--color-grey-3);
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;
    padding: 5px 0;
    width: 100%;
    display: flex;

    ${props => props.isErrored && css`
        border-color: var(--color-negative);
    `}

    input {
        font-size: 14px;
        color: var(--color-grey-0);
        height: 30px;
        background: var(--color-grey-2);
        border-radius: 3.20867px;
        text-indent: 10px;
        flex: 1;
        border: 0;
        &::placeholder {
            color: var(--color-grey-1);
            font-size: 12px;
        }
    }
`