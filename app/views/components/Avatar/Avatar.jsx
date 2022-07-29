import {Avatar as MuiAvatar} from "@mui/material"


const Avatar = ({ src, className }) => {

    return (
        <MuiAvatar classes={{ root: className }} src={src} />
    )
}

export default Avatar