import timezones from '../../data/timezones'

export default {
  form: ({ actions, router }) => ({
    title: 'Join our community',
    submit: actions.signup(router),
    submitButtonText: 'Sign up',
    fields: [
      {
        name: 'username',
        label: 'Username',
        required: true,
        onBlur: actions.checkUserExists,
        onBlurError: 'Username already taken',
      },
      {
        name: 'email',
        label: 'Email',
        required: true,
        validateEmail: true,
        onBlur: actions.checkUserExists,
        onBlurError: 'Email already registered',
      },
      {
        name: 'password',
        type: 'password',
        label: 'Password',
        required: true,
      },
      {
        name: 'passwordConfirmation',
        type: 'password',
        label: 'Password Confirmation',
        required: true,
        validateEqualTo: 'password',
      },
      {
        name: 'timezone',
        type: 'select',
        options: timezones,
        defaultOption: 'Choose your timezone',
        label: 'Timezone',
        required: true,
      },
    ],
  }),
}
