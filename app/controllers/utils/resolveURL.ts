const LOCALHOST = process.env.NODE_ENV == "development" ? "http://localhost:3000" : "https://www.localhost:3000"

const resolveURL = (url: string) => {
    return `${LOCALHOST}${url}`
}
  
export default resolveURL