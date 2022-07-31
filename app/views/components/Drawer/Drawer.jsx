import useDrawer from '@controllers/hooks/useDrawer';

import ClickAwayListener from '@mui/material/ClickAwayListener';
import drawerStateAtom from "@store/drawerStateAtom";
import { getRecoil, setRecoil } from 'recoil-nexus'

import { useRecoilState } from "recoil"


const Drawer = ({ links }) => {

    let [drawerState, setDrawerState] = useRecoilState(drawerStateAtom);

    return (

        drawerState.isOpen &&

        <div className={`navbar-menu transition-all fixed top-0 left-0 bottom-0 w-5/6 sm:max-w-xs z-50`}>
            <div className="navbar-backdrop fixed bg-black inset-0 opacity-80" />
            <ClickAwayListener onClickAway={() => setDrawerState({ isOpen: !drawerState })}>

                <nav style={{
                    borderTop: '1px solid #e6e6e6',
                    background: `url('/assets/images/bg.png') #000000 no-repeat center center fixed`,
                    filter: 'opacity(0.98)'

                }} className="relative flex flex-col pt-12 pb-40 h-full w-full overflow-y-auto">
                    <div className="px-12">
                        <div>
                            <a className="inline-block mb-52" href="#">
                                <img src="wrexa-assets/logos/logo-wrexa.svg" alt="" width="auto" />
                            </a>
                            <button type="button" aria-label="Close" />
                        </div>
                        <ul>
                            <li className="mb-6">
                                <a className="flex items-center justify-between" href="#">
                                    <span>Map</span>

                                </a>
                            </li>
                            <li className="mb-6">
                                <a className="inline-block" href="#">
                                    Projects
                                </a>
                            </li>
                            <li className="mb-16">
                                <a className="inline-block" href="#">
                                    About
                                </a>
                            </li>
                            <li className="mb-6">
                                <a className="flex items-center justify-between" href="#">
                                    <span>Map</span>

                                </a>
                            </li>
                            <li className="mb-6">
                                <a className="inline-block" href="#">
                                    Projects
                                </a>
                            </li>
                            <li className="mb-16">
                                <a className="inline-block" href="#">
                                    About
                                </a>
                            </li>

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
                            1
                        </div>
                    </div>
                    <div className="pr-5 mr-auto">
                        <h4 className="text-xs text-gray-400">Mach: 11.11.11</h4>
                        <span>Desirable Solutions</span>
                    </div>
                    <svg
                        width={12}
                        height={7}
                        viewBox="0 0 12 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 2L6 6L2 2"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="square"
                            strokeLinejoin="round"
                        />
                    </svg>
                </a>
            </div>
        </div>




    );
}



export default Drawer