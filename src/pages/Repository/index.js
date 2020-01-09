import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaStar, FaCodeBranch } from 'react-icons/fa';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    RepositoryContent,
    Title,
    RepositoryCard,
    RepositoryName,
    RepositoryUrl,
    RepositoryForks,
    RepositoryLanguages,
    RepositoryDescription,
    RepositoryFooter,
    Button,
    RepositoryStars,
    OrderBy,
    OrderByContent,
} from './styles';
import api from '../../services/api';
import * as UserActions from '../../store/modules/user/actions';

function Repository({
    userName,
    onSetUserName,
    repositories,
    onSetUserRepository,
    onSetRepositoryName,
}) {
    const [repositoriesFiltered, setRepositoriesFiltered] = useState([]);

    async function FetchRepositoryUser(user) {
        const response = await api.get(`/users/${user}/repos`);

        onSetUserRepository(response.data);
        setRepositoriesFiltered(response.data);
    }

    useEffect(() => {
        FetchRepositoryUser(userName);
    }, []);

    function OrderByMethod(orderBy) {
        const repositoriesFilteredAux = [...repositories];

        function compareStrings(a, b) {
            const result = { resultA: a.name, resultB: b.name };

            if (result.resultA < result.resultB) {
                return -1;
            }
            return 0;
        }

        function compareStringsInverse(a, b) {
            const result = { resultA: a.name, resultB: b.name };

            if (result.resultA > result.resultB) {
                return -1;
            }
            return 0;
        }

        switch (orderBy) {
            case 'starsBigger':
                repositoriesFilteredAux.sort(
                    (a, b) => b.stargazers_count - a.stargazers_count
                );
                setRepositoriesFiltered(repositoriesFilteredAux);
                break;
            case 'starsSmaller':
                repositoriesFilteredAux.sort(
                    (a, b) => a.stargazers_count - b.stargazers_count
                );
                setRepositoriesFiltered(repositoriesFilteredAux);
                break;
            case 'forksBigger':
                repositoriesFilteredAux.sort((a, b) => b.forks - a.forks);
                setRepositoriesFiltered(repositoriesFilteredAux);
                break;
            case 'forksSmaller':
                repositoriesFilteredAux.sort((a, b) => a.forks - b.forks);
                setRepositoriesFiltered(repositoriesFilteredAux);
                break;
            case 'alphabet':
                repositoriesFilteredAux.sort(compareStrings);
                setRepositoriesFiltered(repositoriesFilteredAux);
                break;
            case 'alphabetReverse':
                repositoriesFilteredAux.sort(compareStringsInverse);
                setRepositoriesFiltered(repositoriesFilteredAux);
                break;
            default:
                setRepositoriesFiltered(repositoriesFiltered);
        }
    }

    return (
        <RepositoryContent>
            <Title>
                Lista de repositórios do usuário <strong>{userName}</strong>
            </Title>
            <Link className="return_home" to="/">
                <FaArrowLeft /> return to Github Name
            </Link>

            <OrderBy>
                <h3>Order repositories</h3>
                <OrderByContent>
                    <div>
                        <span onClick={() => OrderByMethod('starsBigger')}>
                            More Stars <FaStar />
                        </span>
                        <span onClick={() => OrderByMethod('starsSmaller')}>
                            Less Stars <FaStar />
                        </span>
                        <span onClick={() => OrderByMethod('forksBigger')}>
                            More Forks <FaCodeBranch />
                        </span>
                    </div>
                    <div>
                        <span onClick={() => OrderByMethod('forksSmaller')}>
                            Less Forks <FaCodeBranch />
                        </span>
                        <span onClick={() => OrderByMethod('alphabet')}>
                            Order by A-Z
                        </span>
                        <span onClick={() => OrderByMethod('alphabetReverse')}>
                            Order by Z-A
                        </span>
                    </div>
                </OrderByContent>
            </OrderBy>

            {repositoriesFiltered.map(repo => (
                <RepositoryCard key={repo.id}>
                    <RepositoryName>
                        <strong>Repository:</strong> {repo.name}
                    </RepositoryName>
                    <RepositoryUrl>
                        <strong>Repository:</strong> {repo.url}
                    </RepositoryUrl>
                    <RepositoryDescription>
                        <strong>Description:</strong> {repo.description}
                    </RepositoryDescription>
                    <RepositoryForks>
                        <strong>Forks:</strong> {repo.forks}
                    </RepositoryForks>
                    <RepositoryStars>
                        <strong>Stars:</strong> {repo.stargazers_count}
                    </RepositoryStars>
                    <RepositoryFooter>
                        <RepositoryLanguages>
                            <strong>Language:</strong> {repo.language}
                        </RepositoryLanguages>
                        <Button
                            onClick={() => onSetRepositoryName(repo.name)}
                            to="/commits"
                        >
                            View last commits
                        </Button>
                    </RepositoryFooter>
                </RepositoryCard>
            ))}
        </RepositoryContent>
    );
}

const mapStateToProps = state => ({
    userName: state.user.userName,
    repositories: state.user.repository,
});

const mapDispatchToProps = dispatch => ({
    onSetUserName: userName =>
        dispatch(UserActions.setUserNameGithub(userName)),
    onSetUserRepository: repository =>
        dispatch(UserActions.setUserRepository(repository)),
    onSetRepositoryName: repositoryName =>
        dispatch(UserActions.setRepositoryName(repositoryName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Repository);
