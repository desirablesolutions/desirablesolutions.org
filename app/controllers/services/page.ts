import resolveURL from "@utils/resolveURL"


const getPages = async () => {

    const res = await fetch(resolveURL('/api/pages/'),

        {
            method: 'GET',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            }
        })

    try {
        const queryData = await res.json().then(data => data)
        return queryData
    } catch (e) {
        console.log(e)
        return null
    }

}

export default getPages