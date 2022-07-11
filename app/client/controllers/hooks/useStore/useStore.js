import { useRecoilState } from "recoil"




const useStore = (props) => {

    return (
        useRecoilState(props.name)
    )
}

export default useStore