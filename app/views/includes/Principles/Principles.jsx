import summarySections from "@db/summarySections";
import find from "@utils/find";
import SummarySection from "@views/components/SummarySection";


const Principles = ({ order }) => {

    return (
        <SummarySection {...find({ arr: summarySections, id: 'principles ' })} order={order} />
    )
}

export default Principles