export const SignUp = {
  render : () => {
      const view =  /*html*/`
          <h3>Signup to Crest</h3>
          <form id='signupForm'>
            <div class='formGroup'>
                <input type="text" name="email" placeholder="Email" />
                <span id='signupEmailError' class='hideError' ></span>
            </div>
            <div class='formGroup'>
                <input type="password" name="password" placeholder="Password" />
                <span id='signupPasswordError' class='hideError'></span>
            </div>
            <div class='formGroup'>
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                />
                <span id='signupConfirmPasswordError' class='hideError'></span>
            </div>

            <a><input type="submit" class="submitButton" value='Signup'/></a>
          </form>
          <p>Have an account? <a href="#/">LOGIN</a></p>
      `
      return view
  },
  after_render: async () => {}      
}

export default SignUp;