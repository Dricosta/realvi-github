import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FaArrowLeft } from 'react-icons/fa';
import { CommitsContent, CardCommits, CardCommitAuthor, InputSearch } from './styles';
import api from '../../services/api';
import { Link } from 'react-router-dom';

function Commits({ userName, repositoryName }) {
    const [commits, setCommits] = useState([]);
    const [searchCommit, setSearchCommit] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    async function FetchCommitsRepository(user, repo) {
        const response = await api.get(`/repos/${user}/${repo}/commits`);

        if (response.data.length > 20) {
            const commitsFiltered = response.data.slice(0, 20);
            setCommits(commitsFiltered);
            setSearchResults(commitsFiltered);
        } else {
            setCommits(response.data);
            setSearchResults(response.data);
        }
    }

    useEffect(() => {
        FetchCommitsRepository(userName, repositoryName);
    }, []);

    useEffect(() => {
        const result = commits.filter(commit =>
            commit.commit.message.includes(searchCommit)
        );
        setSearchResults(result);
    }, [searchCommit]);

    return (
        <CommitsContent>
            <Link to="/repository">
                <FaArrowLeft /> return to repositories
            </Link>

            <InputSearch
                type="text"
                placeholder="Search commit by description..."
                value={searchCommit}
                onChange={e => setSearchCommit(e.target.value)}
            />

            {searchResults.map(commit => {
                const dateCommit = new Date(commit.commit.author.date);

                return (
                    <CardCommits key={commit.sha}>
                        <CardCommitAuthor>
                            {commit.author ? (
                                <img
                                    src={commit.author.avatar_url}
                                    alt="avatar github"
                                />
                            ) : (
                                <img
                                    src={`https://www.caribbeangamezone.com/wp-content/uploads/2018/03/avatar-placeholder.png`}
                                    alt="avatar github"
                                />
                            )}
                            <div>
                                <span>Name: {commit.commit.author.name}</span>
                                <span>
                                    Github Name:{' '}
                                    {commit.author
                                        ? commit.author.login
                                        : commit.commit.author.name}{' '}
                                </span>
                            </div>
                            <div>
                                <span>Email: {commit.commit.author.email}</span>
                                <span>
                                    Date Commit:{' '}
                                    {`${dateCommit.getDate()}/${dateCommit.getMonth()}/${dateCommit.getFullYear()}`}
                                </span>
                            </div>
                        </CardCommitAuthor>
                        <p>
                            <strong>Description Commited:</strong>{' '}
                            {commit.commit.message}
                        </p>
                    </CardCommits>
                );
            })}
        </CommitsContent>
    );
}

const mapStateToProps = state => ({
    userName: state.user.userName,
    repositoryName: state.user.repositoryName,
});

export default connect(mapStateToProps, null)(Commits);
