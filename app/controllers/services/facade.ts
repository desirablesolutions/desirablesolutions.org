import types from "@db/types"

const FacadeService = () => {

    const serviceObject = {
        version: Date.now(),
        types: types(),
    }

    return { ...serviceObject }
}

export default FacadeService