export function setUserNameGithub(userName) {
  return {
    type: '@user/SET_USERNAME',
    userName,
  };
}

export function setUserRepository(repository) {
  return {
    type: '@user/SET_REPOSITORIES',
    repository,
  };
}

export function setRepositoryName(repositoryName) {
  return {
    type: '@user/SET_REPOSITORY_NAME',
    repositoryName,
  };
}
