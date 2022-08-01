import FormSection from "@components/FormSection"

const RequestForm = ({ order }) => {

    return (
        <FormSection
            order={order}
            title={"Help"}
            heading={"What's your problem?"} />
    )

}

export default RequestForm