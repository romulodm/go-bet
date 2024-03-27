import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
    // Checando o redimensionamento da tela:
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    function checkScreenSize() {
        return setWindowWidth(window.innerWidth);  
    }

    window.addEventListener("load", checkScreenSize);
    window.addEventListener("resize", checkScreenSize);
    //


    return (
    <div className="overflow-hidden h-full min-h-full">

        <main className="w-full">
            
            <Outlet />
            
        </main>
    </div>
  );
};

export default DefaultLayout;
