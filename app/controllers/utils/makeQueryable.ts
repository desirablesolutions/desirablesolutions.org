
export interface IQuery {
   query?: any;
   limit: number;
   value: string;
   property: string;
}

const makeQueryable = ({ data }) => {

   return function ({ query: { property, value, limit }} :IQuery) {

      return data.filter((element) => (
         element[property] == value
      )).slice(0, limit).flat()

   }
}

export default makeQueryable