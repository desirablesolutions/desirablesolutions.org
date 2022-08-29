
export interface IQuery {
   limit?: number;
   value: string;
   property: string;
}

const makeQueryable = ({ data }) => {

   return function ({ property, value, limit = 1 }: IQuery) {

      if (limit === 1) {
         return data.filter((element) => (
            element[property] == value
         )).slice(0, limit)[0]

      } else {
         return data.filter((element) => (
            element[property] == value
         )).slice(0, limit)
      }
   }
}

export default makeQueryable