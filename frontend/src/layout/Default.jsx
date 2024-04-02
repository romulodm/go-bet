import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';

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
    <div className="h-full min-h-screen">
        
        <Announcement/>
        <Navbar/>

        <main className="w-full">
            
            <Outlet />
            
        </main>

        <Footer/>

    </div>
  );
};

export default DefaultLayout;
