import DataSummary from "@views/components/DataSummary";
import dataSummeries from "@db/dataSummeries"
import find from "@controllers/utils/find";

const Goals = ({ order }) => {

    return (

        <DataSummary {...find({
            arr: dataSummeries,
            id: 'the-road-ahead'
        })} order={order}/>
    )
}

export default Goals