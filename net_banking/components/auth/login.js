
export const Login = {
  render : () => {
      const view =  /*html*/`
          <h3>Login to Crest</h3>
          <form id='loginForm'>
            <div class='formGroup'>
              <input type="text" name="email" placeholder="Email" />
              <span id='loginEmailError' class='hideError' ></span>
            </div>

            <div class='formGroup'>
              <input type="password" name="password" placeholder="Password" />
              <span id='loginPasswordError' class='hideError'></span>
            </div>

            <a><input type="submit" class="submitButton" value='Login'/></a>
          </form>
          <p>Don't have an account? <a href='#/signup'>SIGN UP</a></p>
      `
      return view
  },
  after_render: async () => {}
}

export default Login;
