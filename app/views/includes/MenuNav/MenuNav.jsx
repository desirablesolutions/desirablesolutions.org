import Drawer from '@mui/material/Drawer';
import useDrawer from "@hooks/useDrawer"

import { slide as Menu } from 'react-burger-menu'




var styles = {
    bmBurgerButton: {
        position: 'fixed',
        display: 'none',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px'
    },
    bmBurgerBars: {
        background: '#373a47'
    },
    bmBurgerBarsHover: {
        background: '#a90000'
    },
    bmCrossButton: {
        height: '0px',
        width: '0px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%'
    },
    bmMenu: {
        background: '#373a47',
        height: '100%',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
    },
    bmItem: {
        display: 'inline-block'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
}

const MenuNav = () => {

    let drawerState = useDrawer({ toggle: false })

    return (
        <Menu styles={styles} isOpen={drawerState}>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">Team</a>
            <a id="contact" className="menu-item" href="/contact">Works</a>
            <a id="contact" className="menu-item" href="/contact">Works</a>
            <a id="contact" className="menu-item" href="/contact">Works</a>
            <a id="contact" className="menu-item" href="/contact">Works</a>

        </Menu>

    )
}

export default MenuNav