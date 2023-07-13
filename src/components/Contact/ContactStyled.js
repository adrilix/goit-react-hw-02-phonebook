import styled from "styled-components"

export const ContactStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ContactDataStyled = styled.span`
    width: 120px;
`

export const ButtonDeleteStyled = styled.button`
    font-size: 10px;
    border: none;
    outline: none;
    border-radius: 6px;
    padding: 4px;
    text-transform: uppercase;
    background: #1ab188;
    color: #fff;

  &:hover {
    background: #fff;
    color: #1ab188;
    cursor: pointer;
}
`