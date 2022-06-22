import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 90vh;

    hr {
        border: 1px solid var(--color-grey-3);
    }
`

export const NavBar = styled.nav`
    > div {
        display: flex;
        justify-content: space-between;
        margin: 15px;

        @media screen and (min-width: 880px) {
            width: 50%;
            margin: 15px auto;
        }
    }

    button {
        background: var(--color-grey-3);
        width: 65px;
        height: 35px;
        color: var(--color-grey-0);
        font-size: 12px;
        font-weight: 600;
        border: none;
        border-radius: 4px;
        transition: 0.4s;
        &:hover {
            background: var(--color-grey-0);
            color: var(--color-grey-3);
        }
    }
`

export const Header = styled.header`
    margin: 30px 15px;
    line-height: 35px;

    span {
        color: var(--color-grey-1);
        font-size: 12px;
    }

    @media screen and (min-width: 880px) {
        width: 50%;
        margin: 30px auto;
    }
`

export const Main = styled.div`
    margin: 15px;

    > div {
        display: flex;
        justify-content: space-between;

        h3 {
            font-size: 16px;
            font-weight: 500;
        }

        button {
            border-radius: 4px;
            background-color: var(--color-grey-3);
            color: var(--color-grey-0);
            border: none;
            width: 30px;
            height: 30px;
            font-size: 22px;
            padding-bottom: 5px;
            transition: 0.4s;
            &:hover {
                background: var(--color-grey-0);
                color: var(--color-grey-3);
            }
        }
    }

    @media screen and (min-width: 880px) {
        width: 50%;
        margin: 15px auto;
    }
`

export const FlexColum = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
    padding: 15px 0;
    background: var(--color-grey-3);
    border-radius: 4px;
    max-height: 400px;
    overflow: auto;


    @media screen and (max-height: 800px) {
        max-height: 380px;
    }
`