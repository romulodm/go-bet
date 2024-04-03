import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

import Login from "./Login";
import Register from "./Register";
import ResetPassword from "./ResetPassword";

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "23em",
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
};

const backdropStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
    backdropFilter: 'blur(4px)',
};

const modalContentStyle = {
    position: 'relative',
    zIndex: 1000,
    backdropFilter: 'none', 
};

export default function AuthenticationModal(props) {
    const { t } = useTranslation();
    const [openAlert, setOpen] = useState(true);
    const handleClose = () => {
        setOpen(false);
        props.setShowAuthenticationModal(false);
    };

    const whatToShow = props.whatToShow;

    const [showLogin, setShowLogin] = useState(whatToShow === "login");
    const [showRegister, setShowRegister] = useState(whatToShow === "register");
    const [showResetPassword, setShowResetPassword] = useState(whatToShow === "reset");

    function showRegisterComponent() {
        setShowLogin(false);
        setShowRegister(true);
    };

    function showLoginComponent() {
        setShowRegister(false);
        setShowLogin(true);
    };

    function showReset() {
        setShowLogin(false);
        setShowResetPassword(true);
    };

    function hideReset() {
        setShowResetPassword(false);
        setShowLogin(true);
    };

    return (
        <Modal
            open={openAlert}
            onClose={handleClose}
        >
            <>
                <div style={backdropStyle} onClick={handleClose}></div>
                <Box sx={modalStyle} style={modalContentStyle}>
                    <div className="flex flex-col rounded-md bg-background-color py-10 px-5">
                        {showLogin && (
                            <>
                                <Login />

                                <button onClick={showReset} className="flex justify-left w-32 mt-2 text-gray-500 text-xs hover:text-gray-300">
                                    <p>{t('auth.forgot')}</p>
                                </button>

                                <div className="flex mt-4 text-sm w-full flex-row items-center justify-center text-main-color gap-2">
                                    <p>{t('auth.create')}</p>
                                    <button onClick={showRegisterComponent} className="text-blue-400 font-bold hover:text-blue-500">{t('auth.btn-create')}</button>
                                </div>
                            </>
                        )}

                        {showRegister && (
                            <>
                                <Register />

                                <div className="flex mt-4 text-sm w-full flex-row items-center justify-center text-main-color gap-2">
                                    <p>{t('auth.login')}</p>
                                    <button onClick={showLoginComponent} className="text-rose-500 font-bold hover:text-rose-600">{t('auth.btn-login')}</button>
                                </div>
                            </>
                        )}

                        {showResetPassword && (
                            <>
                                <ResetPassword />

                                <div className="flex mt-4 text-sm w-full flex-row items-center justify-center text-main-color gap-2">
                                    <p>{t('auth.no-forget')}</p>
                                    <button onClick={hideReset} className="text-blue-400 font-bold hover:text-blue-500">{t('auth.btn-login')}</button>
                                </div>
                            </>
                        )}
                    </div>
                </Box>
            </>
        </Modal>
    );
}
