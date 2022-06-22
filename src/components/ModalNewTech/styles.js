import styled from "styled-components";

export const ModalHeader = styled.div`
    width: 350px;
    display: flex;
    justify-content: space-between;
    background: var(--color-grey-2);

    span, button {
        margin: 10px 15px;
    }

    span {
        color: var(--color-grey-0);
    }

    button {
        background: none;
        border: none;
        color: var(--color-grey-1);
        font-size: 14px;
    }
`

export const ModalBody = styled.div`
    width: 350px;
    min-height: 250px;
    background: var(--color-grey-3);
    padding: 15px;
    color: var(--color-grey-0);
`