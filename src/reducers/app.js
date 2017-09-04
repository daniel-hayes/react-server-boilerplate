const initialState = {
  path: '/'
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case 'SOME_ACTION':
      return {
        ...state
      };
    default:
      return state;
  }
};

export default app;
