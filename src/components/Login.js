import React from "react";

function Login({ inputlogin, setInputlogin }) {
  //get props from form, save into setLogin = [email, password]

  const loginHandler = (e) => {
    setInputlogin((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  //   console.log(inputlogin);
  return (
    <div>
      <h1>Login</h1>
      <form className="loginForm">
        <input
          name="email"
          value={inputlogin.email}
          type="text"
          id="email"
          placeholder="Email"
          onChange={loginHandler}
        />
        <input
          name="password"
          value={inputlogin.password}
          type="password"
          id="password"
          placeholder="Password"
          onChange={loginHandler}
        />
        {/* <button onClick={submitTodoHandler} type="submit" id="new-task-submit"><i className="fa-solid fa-square-plus"></i></button> */}
      </form>
    </div>
  );
}

export default Login;
