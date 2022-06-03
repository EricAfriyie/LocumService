export function passwordValidator1(password1) {
  if (!password1) return "Password can't be empty."
  if (password1.length < 8) return 'Password must be at least 8 characters long.'
  return ''
}




