import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainContent = styled.div`
    background: #333;
`;

export const Container = styled.div`
    height: 100vh;
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 10%;
`;

export const CardSearch = styled.div`
    background: #fff;
    width: 50%;
    margin: 0 auto;
    border-radius: 4px;
    @media (max-width: 768px) {
        width: 80%;
    }
    @media (max-width: 600px) {
        width: 90%;
    }
`;

export const CardSearchHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 15px 0px 15px;
    svg{
        font-size: 28px;
        color: #333;
    }
`;

export const CardSearchTitle = styled.div`
    color: #333;
    font-weight: 700;
    font-size: 16px;
    margin-left: 10px;
`;

export const ContentInput = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

export const Input = styled.input`
    width: 78%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 2px;
    font-size: 14px;

    @media (max-width: 600px) {
        width: 100%;
        margin-bottom: 20px;
    }
`;

export const Button = styled(Link)`
    display: flex;
    background: green;
    color: #fff;
    font-weight: 500;
    width: 20%;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
    border-radius: 2px;
    text-decoration: none;

    @media (max-width: 600px) {
        width: 100%;
        padding: 10px;
    }

    &:hover{
        opacity: 0.9;
    }
`;

export const MessageNotification = styled.span`
    display: ${props => props.show ? 'block' : 'none'};
    color: red;
    font-weight: 700;
    font-size: 14px;
    width: 100%;
    padding: 5px 15px;
`
