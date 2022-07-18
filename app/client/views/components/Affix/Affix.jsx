import { Affix as AntAffix } from "antd"

const Affix = ({ children, params }) => {

    return (
        <AntAffix {...params}>
            {children}
        </AntAffix>
    )
}

export default Affix