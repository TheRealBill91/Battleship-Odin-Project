// delays execution of a function for a set amount of time
export const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
