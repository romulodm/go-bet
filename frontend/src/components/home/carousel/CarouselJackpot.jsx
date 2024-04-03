import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';

import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import AuthenticationModal from '../../authentication/AuthenticationModal';

export default function CarouselJackpot() {
    const { t } = useTranslation();

    const [showAuthenticationModal, setShowAuthenticationModal] = useState(false);
    const showAuthentication = () => setShowAuthenticationModal(!showAuthenticationModal);

    return (
        <div className="flex flex-col rounded-md gap-5">
           
           <div className="flex flex-col gap-x-4 w-full">
                <p className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">{t('carousel.j-tittle')}</p>
                <p className="text-white text-md lg:text-lg">{t('carousel.j-content')}</p>
            </div>
            
            <button onClick={showAuthentication} className="bg-white w-40 py-3 rounded-md font-semibold">{t('carousel.j-btn')}</button>
           
            <div className="flex flex-row flex-wrap items-center gap-1 md:gap-4 text-white text-sm sm:text-lg">
                <div className="flex flex-row items-center gap-2">
                    <ConfirmationNumberOutlinedIcon/>
                    <p>{t('carousel.j-t1')}</p>
                </div>
                <ChevronRightOutlinedIcon />
                <div className="flex flex-row items-center gap-2">
                    <TimerOutlinedIcon/>
                    <p>{t('carousel.j-t2')}</p>
                </div>
                <ChevronRightOutlinedIcon />
                <div className="flex flex-row items-center gap-2">
                    <StarBorderOutlinedIcon/>
                    <p>{t('carousel.j-t3')}</p>
                </div>
            </div>

            <div className="absolute right-0 bottom-0 pointer-events-none hidden md:block" aria-hidden="true">
                    <svg width="450" height="370" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#FFF">
                            <ellipse fillOpacity=".12" cx="32" cy="71" rx="8" ry="8" />
                            <ellipse fillOpacity=".4" cx="32" cy="71" rx="1" ry="1" />
                            <ellipse fillOpacity=".6" cx="50" cy="30" rx="2" ry="2" />
                            <ellipse fillOpacity=".6" cx="80" cy="130" rx="2" ry="2" />
                            <ellipse fillOpacity=".24" cx="120" cy="68" rx="24" ry="24" />
                            <ellipse fillOpacity=".4" cx="120" cy="68" rx="3" ry="3" />
                            <ellipse fillOpacity=".12" cx="150" cy="200" rx="28" ry="28" />
                            <ellipse fillOpacity=".65" cx="150" cy="200" rx="8" ry="8" />
                            <ellipse fillOpacity=".4" cx="200" cy="110" rx="2" ry="2" />
                            <ellipse fillOpacity=".5" cx="240" cy="250" rx="3" ry="3" />
                            <ellipse fillOpacity=".2" cx="250" cy="150" rx="8" ry="8" />
                            <ellipse fillOpacity=".6" cx="270" cy="68" rx="12" ry="12" />
                            <ellipse fillOpacity=".1" cx="310" cy="300" rx="15" ry="15" />
                            <ellipse fillOpacity=".8" cx="310" cy="300" rx="3" ry="3" />
                            <ellipse fillOpacity=".2" cx="270" cy="68" rx="38" ry="38" />
                            <ellipse fillOpacity=".5" cx="330" cy="220" rx="3" ry="3" />
                            <ellipse fillOpacity=".7" cx="330" cy="130" rx="6" ry="6" />
                            <ellipse fillOpacity=".65" cx="400" cy="71" rx="3" ry="3" />
         
                        </g>
                    </svg>
                </div>

            {showAuthenticationModal && <AuthenticationModal whatToShow={"register"} setShowAuthenticationModal={setShowAuthenticationModal}/>}
        </div>
    );
};
