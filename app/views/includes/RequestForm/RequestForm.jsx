import FormSection from "@components/FormSection"

const RequestForm = ({ order }) => {

    return (
        <FormSection
            order={order}
            title={"Contact Us"}
            heading={"Describe your problem."} />
    )

}

export default RequestForm