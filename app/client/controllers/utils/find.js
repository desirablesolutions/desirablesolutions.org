const find = ({ arr, id }) => {
    return arr.find(( index ) => index.id === id) || []
}

export default find