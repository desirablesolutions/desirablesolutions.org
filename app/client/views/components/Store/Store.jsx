import { RecoilRoot } from "recoil"



const Store = (props) => {

    let { children } = props


    return (

        <RecoilRoot>
            {children}
        </RecoilRoot>
    )

}


export default Store