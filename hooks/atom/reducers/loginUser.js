const initialStateLoginUser = [];

const loginUserReducers = (state = initialStateLoginUser, action) => {
  switch (action.type) {
    case "load_login_user":
      return action.payload;
    case "update_login_user":
      return action.payload;
  }
};

export { loginUserReducers, initialStateLoginUser };
