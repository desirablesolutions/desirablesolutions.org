import useDrawer from '@controllers/hooks/useDrawer';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PeopleIcon from '@mui/icons-material/People';
import CoffeeIcon from '@mui/icons-material/Coffee';
import RedeemIcon from '@mui/icons-material/Redeem';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import HandshakeIcon from '@mui/icons-material/Handshake';
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"

import ClickAwayListener from '@mui/material/ClickAwayListener';
import drawerStateAtom from "@store/drawerStateAtom";
import { getRecoil, setRecoil } from 'recoil-nexus'

import { useRecoilState } from "recoil"

import React, { useEffect, useState } from "react";

function useDelayUnmount(isMounted, delayTime) {
    const [showDiv, setShowDiv] = useState(false);
    useEffect(() => {
        let timeoutId;
        if (isMounted && !showDiv) {
            setShowDiv(true);
        } else if (!isMounted && showDiv) {
            timeoutId = setTimeout(() => setShowDiv(false), delayTime); //delay our unmount
        }
        return () => clearTimeout(timeoutId); // cleanup mechanism for effects , the use of setTimeout generate a sideEffect
    }, [isMounted, delayTime, showDiv]);
    return showDiv;
}

const links = [
    {
        name: 'Team',
        href: '/'
    },
    {
        name: 'Vision',
        href: '/vision',
        icon: <VisibilityIcon />
    },
    {
        name: 'Projects'
    },
    {
        name: 'Services'
    },
    {
        name: 'About'
    },
    {
        name: 'Help'
    }
]

const Drawer = () => {


    let [drawerState, setDrawerState] = useRecoilState(drawerStateAtom);


    let drawerOpenState = useDelayUnmount(drawerState.isOpen, 250)

    return (

        drawerOpenState &&

        <div className={`fade-in-left fade-in-right navbar-menu transition-all fixed top-0 left-0 bottom-0 w-5/6 sm:max-w-xs z-50`}>
            <div className="navbar-backdrop fixed bg-black inset-0 opacity-80" />
            <ClickAwayListener onClickAway={() => setDrawerState({ isOpen: !drawerState })}>

                <nav style={{
                    borderTop: '1px solid #e6e6e6',
                    background: `url('/assets/images/bg.png') #000000 no-repeat center center fixed`,
                    filter: 'opacity(0.98)'

                }} className="relative flex flex-col pt-12 pb-40 h-full w-full overflow-y-auto">
                    <div className="px-12">
                        <div>
                            <a className="inline-block mb-10" href="#">
                                <img src="/assets/images/logo-transparent.png" alt="" width="auto" />
                                <h2 className="text-center text-white">To love is to serve.</h2>
                            </a>
                            <button type="button" aria-label="Close" />
                        </div>
                        <ul>
                            {
                                links.map((link, index) => {
                                    return (
                                        <li key={`${index}`} className="mb-6">
                                            <a className="flex items-center text-white justify-between" href={link.href}>
                                                <span>{link.icon}{link.name}</span>
                                            </a>
                                        </li>

                                    )
                                })}


                        </ul>
                    </div>
                </nav>

            </ClickAwayListener>

            <div className="absolute bottom-0 left-0 w-full">
                <a className="flex items-center pt-4 pb-5 pl-6 pr-4" href="#">
                    <div className="relative mr-4">
                        <img
                            className="w-12 h-12 rounded-full"
                            src="/assets/images/logo-transparent.png"
                            alt=""
                        />
                        <div className="absolute bottom-0 left-0 -ml-2 flex items-center justify-center w-6 h-6 bg-red-800 rounded-full text-white text-xs">
                            7
                        </div>
                    </div>
                    <div className="pr-5 mr-auto">
                        <h4 className="text-xs text-gray-400">Mach: 11.11.11</h4>
                        <span>Desirable Solutions</span>
                    </div>

                </a>
            </div>
        </div>




    );
}



export default Drawer