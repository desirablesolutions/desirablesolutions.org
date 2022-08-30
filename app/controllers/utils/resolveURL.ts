const LOCALHOST = process.env.NODE_ENV == "development" ? "http://localhost:3000" : "https://desirable.solutions"

const resolveURL = (url: string) => {
    return `${LOCALHOST}${url}`
}
  
export default resolveURL