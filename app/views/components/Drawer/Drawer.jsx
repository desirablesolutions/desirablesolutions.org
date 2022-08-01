
import ClickAwayListener from '@mui/material/ClickAwayListener';
import drawerStateAtom from "@store/drawerStateAtom";

import { useRecoilState } from "recoil";

import { useEffect, useState } from "react";

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



const Drawer = ({ links }) => {


    let [drawerState, setDrawerState] = useRecoilState(drawerStateAtom);
    let drawerOpenStateDelayed = useDelayUnmount(drawerState.isOpen, 750)

    return (

        drawerOpenStateDelayed &&

        <div className={`fade-in-left ${!drawerState.isOpen ? "hidden" : ""} navbar-menu transition-all fixed top-0 left-0 bottom-0 w-5/6 sm:max-w-xs z-50`}>
            <div className="navbar-backdrop fixed bg-black inset-0 opacity-80" />
            <ClickAwayListener onClickAway={() => setDrawerState({ isOpen: !drawerState })}>

                <nav style={{
                    borderTop: '1px solid #e6e6e6',
                    background: `url('/assets/images/bg.png') #000000 no-repeat center center fixed`,
                    filter: 'opacity(0.91)'

                }} className="relative flex flex-col pt-12 pb-40 h-full w-full overflow-y-hidden">
                    <div className="px-12">
                        <div>
                            <a className="inline-block mb-10" href="/">
                                <img src="/assets/images/logo-transparent.png" alt="" width="auto" />
                                <h1 className="text-center text-lg text-white">To love is to serve.</h1>
                            </a>
                            <button type="button" aria-label="Close" />
                        </div>
                        <ul>
                            {
                                links.map((link, index) => {
                                    return (
                                        <li key={`${index}`} className="hover:rounded hover:p-1 mb-6">
                                            <a className="flex items-center text-white hover:text-gray-700 justify-between" href={link.href}>
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
                        <div className="absolute bottom-0 left-0 -ml-2 flex items-center justify-center w-2 h-2 bg-green-800 rounded-full text-white text-xs">
                            
                        </div>
                    </div>
                    <div className="pr-5 mr-auto">
                        <h4 className="text-xs text-gray-400">Mach: 11.11.11</h4>
                        <span className="text-white">Desirable Solutions</span>
                    </div>

                </a>
            </div>
        </div>




    );
}



export default Drawer