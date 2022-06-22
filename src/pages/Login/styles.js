import styled from "styled-components";

export const Form = styled.form`
    width: 350px;
    height: fit-content;
    background: var(--color-grey-3);
    padding: 25px 15px;
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;

    @media screen and (max-width: 310px) {
        width: 250px;
    }
`

export const CenterElement = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    height: 50px;

    span {
        font-size: 12px;
        color: var(--color-grey-1);
    }
`