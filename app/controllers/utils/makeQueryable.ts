
export interface IQuery {
   limit: number;
   value: string;
   property: string;
}

const makeQueryable = ({ data }) => {

   return function ({ property, value, limit } :IQuery) {

      return data.filter((element) => (
         element[property] == value
      )).slice(0, limit).flat()

   }
}

export default makeQueryable