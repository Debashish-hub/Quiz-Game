import styled from 'styled-components'


export const Button = styled.button`
    border: 1px solid #616A94;
    border-radius: 30px;
    padding: 15px 30px;
    text-decoration: none;
    color: black;
    background-color: white;
    transition: 0.3s;
    font-size: 1em;
    cursor: pointer;
    outline: none;

    &:hover {
        color: white;
        background-color: #00008B;
    }
`;

export default Button
