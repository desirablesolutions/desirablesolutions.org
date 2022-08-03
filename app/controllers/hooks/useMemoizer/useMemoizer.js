import { useMemoOne } from "react-memo-one"

const useMemoizer = ({ op }) => {

    return useMemo(op)


}

export default useMemoizer