
import ClickAwayListener from '@mui/material/ClickAwayListener';
import drawerStateAtom from "@store/drawerStateAtom";
import { useRecoilState } from "recoil";
import useDelayUnmount from '@utils/useDelayUnmount';
import ScrambleTexts from "@components/ScrambleTexts"
import AnalogClock from 'analog-clock-react';
import { CSSTransition } from 'react-transition-group';

let options = {
    width: "50px",
    border: true,
    borderColor: "#000000",
    baseColor: "#000000",
    centerColor: "#FFFFFF",
    centerBorderColor: "#ffffff",
    handColors: {
        second: "#FFFFFF",
        minute: "#ffffff",
        hour: "#ffffff"
    }
};


const Drawer = ({ links, heading }) => {


    let [drawerState, setDrawerState] = useRecoilState(drawerStateAtom);
    let drawerOpenStateDelayed = useDelayUnmount(drawerState.isOpen, 700)

    return (

        <CSSTransition
            in={drawerOpenStateDelayed}
            timeout={300}
            classNames="fade-in-left"
            onEnter={() =>setDrawerState({ isOpen: true })}
            onExited={() => setDrawerState({ isOpen: false})}
            unmountOnExit
        >
            <div className={`${drawerState.isOpen ? "fade-in-left" : "fade-out-left"} navbar-menu transition-all fixed top-0 left-0 bottom-0 w-5/6 sm:max-w-xs z-50`}>
                <div className="navbar-backdrop fixed bg-black opacity-80" />
                <ClickAwayListener onClickAway={() => setDrawerState({ isOpen: false })}>

                    <nav style={{
                        background: `url('/assets/images/bg.png') #000000 no-repeat center center fixed`,
                        filter: 'opacity(0.91)'

                    }} className="relative flex flex-col pt-12 pb-40 h-full w-full overflow-y-hidden">
                        <div className="px-12">
                            <div>
                                <a className="inline-block w-46 mb-12" href="/">
                                    <img src="/assets/images/logo-transparent.png" alt="" width="auto" />

                                    <h1 className="text-center text-lg text-white">{heading}</h1>
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

                            <AnalogClock {...options} />
                            <div className="absolute bottom-0 left-0 -ml-2 flex items-center justify-center w-2 h-2 bg-green-800 rounded-full text-white text-xs">

                            </div>
                        </div>
                        <div className="pr-5 mr-auto">
                            <h4 className="text-xs text-gray-400">Mach: 11.11.11</h4>
                            <span className="text-white"><ScrambleTexts pauseTime={4000} speed={40} lines={["Do all to the glory of God.", "Désirable Solutions"]} /></span>
                        </div>

                    </a>
                </div>
            </div>

        </CSSTransition>






    );
}



export default Drawer