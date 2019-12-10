const express = require('express');
const userList = require('../store/userList');

const router = express.Router();

router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.render('signUp', {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    errorMessage: '',
  });
});

function validateName({ name }) {
  if (name.length < 5) {
    return {
      isValid: false,
      errorMessage: 'The user name is too short',
    };
  }

  return {
    isValid: true,
  };
}

function validateEmail({ email }) {
  if (!email.includes('@')) {
    return {
      isValid: false,
      errorMessage: 'Wrong email',
    };
  }

  return {
    isValid: true,
  };
}

function validatePassword({ password }) {
  if (password.length < 5) {
    return {
      isValid: false,
      errorMessage: 'The password is too short',
    };
  }

  return {
    isValid: true,
  };
}

function validateConfirmation({ password, passwordConfirmation }) {
  if (password !== passwordConfirmation) {
    return {
      isValid: false,
      errorMessage: 'Passwords do not match',
    };
  }

  return {
    isValid: true,
  };
}

router.post('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  const failedValidation = [
    validateName,
    validateEmail,
    validatePassword,
    validateConfirmation,
  ]
    .map((validator) => validator(req.body))
    .find((validatorAnswer) => !validatorAnswer.isValid);

  if (!failedValidation) {
    const existedUser = userList.find((user) => user.email === req.body.email);

    if (!existedUser) {
      userList.push({
        id: userList.length + 1,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      res.redirect('/sign-in');
    } else {
      res.render('signUp', {
        ...req.body,
        errorMessage: 'The user with this email already exists',
      });
    }
  } else {
    res.render('signUp', {
      ...req.body,
      ...failedValidation,
    });
  }
});

module.exports = router;
