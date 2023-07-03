const initialStateLoginUser = {
  id: 0,
  name: "",
  username: "",
  email: "",
  gender: null,
  photo_profile: null,
  email_verified_at: "",
  created_at: "",
};

const loginUserReducers = (state = initialStateLoginUser, action) => {
  switch (action.type) {
    case "load_login_user":
      return action.payload;
    case "update_login_user":
      return { ...state, ...action.payload };
  }
};

export { loginUserReducers, initialStateLoginUser };
