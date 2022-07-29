import Header from "@components/Header"
import navBar from "@db/navBar"

const Navbar = ({ order, showDebug }) => {

    showDebug && (
        console.log(`[NavBar]: Order => ${order}`)
    )

    return (
        <Header {...navBar}
        />
    )
}


export default Navbar