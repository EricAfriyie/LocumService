export function passwordValidator2(password2) {
  if (!password2) return "Password can't be empty."
  if (password2.length < 8) return 'Password must be at least 8 characters long.'
  return ''
}




