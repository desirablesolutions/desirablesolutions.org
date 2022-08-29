import resolveURL from "@utils/resolveURL"


const getProjects = async () => {

    const res = await fetch(resolveURL('/api/projects/'),

        {
            method: 'GET',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "Notion-Version": "2022-06-28"
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

export default getProjects