import { useState } from 'react';

import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import AuthenticationModal from '../../authentication/AuthenticationModal';

export default function CarouselWelcome() {
    const [showAuthenticationModal, setShowAuthenticationModal] = useState(false);
    const showAuthentication = () => setShowAuthenticationModal(!showAuthenticationModal);

    return (
        <div className="flex flex-col justify-between rounded-md gap-5">
           
           <div className="flex flex-col w-full">
                <p className="text-white text-3xl sm:text-5xl font-bold">Welcome to Go Bet!</p>
                <p className="text-white text-md sm:text-lg">Sign up and receive a bonus of up to G$ 5.000!</p>
            </div>
            
            <button onClick={showAuthentication} className="bg-white w-24 py-3 rounded-md font-semibold">Sign up</button>

           
            <div className="flex flex-row flex-wrap items-center gap-2 md:gap-4 text-white text-sm sm:text-lg">
                <div className="flex flex-row items-center gap-2">
                    <HowToRegOutlinedIcon/>
                    <p>Register</p>
                </div>
                <ChevronRightOutlinedIcon />
                <div className="flex flex-row items-center gap-2">
                    <SavingsOutlinedIcon/>
                    <p>Get bonus</p>
                </div>
                <ChevronRightOutlinedIcon />
                <div className="flex flex-row items-center gap-2">
                    <AttachMoneyOutlinedIcon/>
                    <p>Start win</p>
                </div>
            </div>

            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
                    <svg width="450" height="385" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                        <radialGradient cx="50%" cy="100%" fx="100%" fy="100%" r="50%" id="ni-b">
                            <stop stopColor="#ffffff" offset="100.317%" />
                            <stop stopColor="#ffffff" offset="100%" />
                        </radialGradient>
                        </defs>
                        <g fill="none" fillRule="evenodd">
                        <g fill="#FFF">
                            <ellipse fillOpacity=".12" cx="32" cy="71" rx="8" ry="7" />
                            <ellipse fillOpacity=".4" cx="32" cy="71" rx="1" ry="1" />
                            <ellipse fillOpacity=".6" cx="50" cy="30" rx="2" ry="1.947" />
                            <ellipse fillOpacity=".6" cx="80" cy="130" rx="2" ry="1.947" />
                            <ellipse fillOpacity=".24" cx="120" cy="68" rx="24" ry="23" />
                            <ellipse fillOpacity=".4" cx="120" cy="68" rx="3" ry="3" />
                            <ellipse fillOpacity=".12" cx="150" cy="200" rx="29" ry="28" />
                            <ellipse fillOpacity=".65" cx="150" cy="200" rx="8" ry="8" />
                            <ellipse fillOpacity=".4" cx="200" cy="110" rx="2" ry="2" />
                            <ellipse fillOpacity=".2" cx="250" cy="150" rx="8" ry="8" />
                            <ellipse fillOpacity=".5" cx="330" cy="220" rx="3" ry="3" />
                            <ellipse fillOpacity=".7" cx="330" cy="130" rx="6" ry="6" />
                            <ellipse fillOpacity=".65" cx="400" cy="71" rx="3" ry="3" />
         
                        </g>
                        <circle fill="url(#ni-b)" cx="250" cy="5" r="100" />
                        </g>
                    </svg>
                </div>

            {showAuthenticationModal && <AuthenticationModal whatToShow={"register"} setShowAuthenticationModal={setShowAuthenticationModal}/>}
        </div>
      )
}
