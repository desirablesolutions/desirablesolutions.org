import SummarySection from "@views/components/SummarySection";
import TerrainIcon from '@mui/icons-material/Terrain';



const Pillars = ({ order }) => {

    return (
        <SummarySection title={"The Principles."} heading={<>
       <TerrainIcon/>S.O.L.I.D Principles for a Solid Foundation.
        </>} order={order} />
    )
}

export default Pillars