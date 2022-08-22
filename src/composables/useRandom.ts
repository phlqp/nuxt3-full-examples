export function random (length: number): string {
  let word = ''
  for (let i = 0; i < length; i++) {
    word += String.fromCharCode(Math.random() * 26 + 65)
  }
  return word
}
