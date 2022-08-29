const LOCALHOST = "https://localhost:3000"

const resolveURL = (url: string) => {
    return `${LOCALHOST}${url}`
}
  
export default resolveURL