import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RepositoryContent = styled.div`
    background: #333;
    height: 100%;
    min-height: 100vh;
    display: flex;
    text-align: center;
    padding: 60px 0px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .return_home {
        text-decoration: none;
        display: flex;
        align-items: center;
        color: #fff;
        transition: opacity 0.3 ease-in-out;
        margin-bottom: 40px;
        svg{
            transition: transform 0.3s ease-in-out;
            margin-right: 8px;
            font-size: 12px;
        }
        &:hover{
            opacity: 0.7;
            svg{
                transform: translateX(-5px);
            }
        }
    }
`;

export const Title = styled.h1`
    font-size: 22px;
    color: #fff;
    margin-bottom: 30px;
    strong{
        color: yellowgreen;
    }

    @media (max-width: 600px) {
        padding: 0px 60px;
    }
`;

export const RepositoryCard = styled.div`

    padding: 15px;
    background: #fff;
    border: 1px solid #ddd;
    margin: 10px 0px;
    width: 50%;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow-x: scroll;

    @media (max-width: 600px) {
        width: 90%;
    }

    @media (min-width: 1200px)  {
        width: 50%;
    }

    span{
        line-height: 24px;
        display: block;
        text-align: left;
    }

    strong{
        color: #333;
        opacity: 0.9;
    }
`;

export const RepositoryName = styled.span``;

export const RepositoryUrl = styled.span``;

export const RepositoryForks = styled.span``;

export const RepositoryLanguages = styled.span``;

export const RepositoryDescription = styled.span``;

export const RepositoryStars = styled.span``;

export const RepositoryFooter = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const Button = styled(Link)`
    display: flex;
    background: green;
    color: #fff;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
    border-radius: 2px;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: 500;
    &:hover{
        opacity: 0.9;
    }
`;

export const OrderBy = styled.div`
    width: 50%;
    text-align: left;
    h3{
        font-weight: 700;
        color: #fff;
        font-size: 18px;
    }
`;

export const OrderByContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px 0px;

    div{
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;

        @media (max-width: 768px) {
            flex-direction: column;
        }
    }

    span{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 15px;
        border-radius: 2px;
        min-width: 220px;
        text-align: center;
        background: #ddd;
        color: #333;
        font-weight: 700;
        margin-right: 10px;
        cursor: pointer;
        transition: opacity 0.3s ease-in-out;

        &:hover{
            opacity: 0.7;
        }

        svg{
            font-size: 14px;
            margin-left: 5px;
        }

        @media (max-width: 768px) {
            margin-bottom: 10px;
        }
    }
`;
