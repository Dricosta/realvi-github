import styled from 'styled-components';

export const CommitsContent = styled.div`
    background: #333;
    height: 100%;
    min-height: 100vh;
    display: flex;
    text-align: center;
    padding: 60px 0px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    a{
        text-decoration: none;
        display: flex;
        align-items: center;
        color: #fff;
        transition: opacity 0.3 ease-in-out;
        margin-bottom: 30px;
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

export const CardCommits = styled.div`

    background: #fff;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 15px;
    min-width: 50%;
    width: 50%;
    margin: 10px 0px;

    @media (max-width: 1000px) {
        width: 90%;
    }

    p{
        text-align: left;
        margin-top: 20px;
        line-height: 24px;
        strong{
            color: blueviolet;
            font-weight: 700;
        }
    }

`;

export const CardCommitAuthor = styled.div`
    display: flex;
    align-items: center;
    img{
        border-radius: 100%;
        width: 70px;
        height: 70px;
        margin-right: 20px;
        @media (max-width: 600px) {
            width: 40px;
            height: 40px;
        }
    }

    div{
        display: flex;
        flex-direction: column;
        margin-right: 20px;
    }

    span{
        display: block;
        text-align: left;
        line-height: 24px;
    }
`;

export const InputSearch = styled.input`
    width: 50%;
    background: none;
    border: 1px solid #ddd;
    padding: 10px 15px;
    font-size: 16px;
    color: #fff;
    border-radius: 2px;
    margin-bottom: 20px;

    @media (max-width: 1000px) {
        width: 90%;
    }
`;
