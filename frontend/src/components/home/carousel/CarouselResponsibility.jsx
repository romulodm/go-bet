import { useState } from 'react';

import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import AuthenticationModal from '../../authentication/AuthenticationModal';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';

export default function CarouselResponsibility() {
    const [showAuthenticationModal, setShowAuthenticationModal] = useState(false);
    const showAuthentication = () => setShowAuthenticationModal(!showAuthenticationModal);

    return (
        <div className="flex flex-col h-full rounded-md gap-5">
           
           <div className="flex flex-col gap-x-4 w-full">
                <p className="text-white text-4xl sm:text-5xl font-bold">Play with responsibility!</p>
                <p className="text-white text-md sm:text-lg">Be a successful player.</p>
            </div>

            <div className="hidden lg:block">
                <svg className="absolute top-0 right-0 mt-5 mr-20 w-16 h-16 fill-current text-white" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                </svg>

                <svg className="absolute top-0 right-0 mt-20 mr-44 w-16 h-16 fill-current text-white" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                </svg>

                <svg className="absolute top-0 right-0 mt-32 mr-20 w-16 h-16 fill-current text-white" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                </svg>
            </div>
            
            <button onClick={showAuthentication} className="bg-white w-24 py-3 rounded-md font-semibold">Learn more</button>

           
            <div className="flex flex-row flex-wrap items-center mt-3 gap-2 md:gap-4 text-white text-sm sm:text-lg">
                <div className="flex flex-row items-center gap-2">
                    <MenuBookOutlinedIcon/>
                    <p>Read tips</p>
                </div>
                <ChevronRightOutlinedIcon />
                <div className="flex flex-row items-center gap-2">
                    <LightbulbOutlinedIcon/>
                    <p>Get ideas</p>
                </div>
                <ChevronRightOutlinedIcon />
                <div className="flex flex-row items-center gap-2">
                    <PsychologyOutlinedIcon/>
                    <p>Discover how to play</p>
                </div>
            </div>

            {showAuthenticationModal && <AuthenticationModal whatToShow={"register"} setShowAuthenticationModal={setShowAuthenticationModal}/>}
        </div>
      )
}
