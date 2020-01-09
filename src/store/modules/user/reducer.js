import produce from 'immer';

const INITIAL_STATE = {
  userName: 'reactjs',
  repository: null,
  repositoryName: null,
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@user/SET_USERNAME': {
      return produce(state, (draft) => {
        const { userName } = action;
        draft.userName = userName;
      });
    }
    case '@user/SET_REPOSITORIES': {
      return produce(state, (draft) => {
        const { repository } = action;
        draft.repository = repository;
      });
    }
    case '@user/SET_REPOSITORY_NAME': {
      return produce(state, (draft) => {
        const { repositoryName } = action;
        draft.repositoryName = repositoryName;
      });
    }
    default:
      return state;
  }
}

export default user;
