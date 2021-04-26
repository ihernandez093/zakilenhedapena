// Validate password
export const validatePassword = (password) => {
    if (password.length === 0) {
    return 'Password is required';
    } else if (password.length < 8) {
    return 'Weak password, must be at least 8 characters';
    } else if (password.search(/\d/) === -1) {
    return 'Weak password, must have at least 1 digit';
    } else if (password.search(/[a-zA-Z]/) === -1) {
    return 'Weak password, must have at least 1 letter';
    } else {
    return null
    }
}

export const validateEmail = (email) => {
    if (email.length === 0) {
      return 'Email is required';
    } else if (!email.match(/^[A-Za-z0-9.+_-]+@[A-Za-z0-9._-]+\.[a-zA-Z]{2,}$/)) {
      return 'Invalid email format ';
    } else {
      return null
    }
  };


export const validateConfirmPass = (confirmPass, password) => {
    if (confirmPass.length === 0) {
      return 'You need to confirm your password';
    } else if (confirmPass !== password) {
      return 'Passwords don\'t match';
    } else {
      return null
    }
  }
