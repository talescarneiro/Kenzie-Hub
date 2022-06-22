import styled from "styled-components";

export const Form = styled.form`
    width: 350px;
    height: fit-content;
    background: var(--color-grey-3);
    padding: 25px 15px;
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;

    @media screen and (max-width: 370px) {
        width: 250px;
    }
`

export const CenterElement = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    align-items: center;
    height: 50px;

    span {
        font-size: 12px;
        color: var(--color-grey-1);
        margin: 15px;
    }
`

export const HubHeader = styled.div`
    width: 350px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        background: var(--color-grey-3);
        width: 65px;
        height: 30px;
        color: var(--color-grey-0);
        font-size: 10px;
        font-weight: 600;
        border: none;
        border-radius: 4px;
        transition: 0.4s;
        &:hover {
            background: var(--color-grey-0);
            color: var(--color-grey-3);
        }
    }

    @media screen and (max-width: 370px) {
        width: 250px;
    }
`

export const Stack = styled.div`
    display: flex;
`