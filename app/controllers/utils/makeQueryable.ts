

const makeQueryable = ({ data }) => {

   return function ({ query: { property, value, limit } }) {

      return data.filter((element) => (
         element[property] == value
      )).slice(0, limit).flat()

   }
}

export default makeQueryable