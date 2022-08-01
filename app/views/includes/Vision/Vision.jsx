import DataSummary from "@components/DataSummary";
import dataSummeries from "@db/dataSummeries"
import find from "@controllers/utils/find";

const Vision = ({ order }) => {

    return (

        <DataSummary {...find({
            arr: dataSummeries,
            id: 'vision'
        })} order={order}/>
    )
}

export default Vision