export const getSeconds = (ms: number) => {
  return Math.floor(ms / 1000) % 60
}

export const getMinutes = (ms: number) => {
  return Math.floor(ms / (1000 * 60)) % 60
}
