import summarySections from "@db/summarySections";
import find from "@utils/find";
import SummarySection from "@views/components/SummarySection";


const Principles = ({ order }) => {

    return (
        <SummarySection order={order} title={"Principles"} {...find({ arr: summarySections, id: 'principles' })} />
    )
}

export default Principles