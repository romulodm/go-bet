import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

import Login from "./Login";
import Register from "./Register";
import ResetPassword from "./ResetPassword";

import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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
                <Box 
                    sx={modalStyle} 
                    style={modalContentStyle}
                    className="w-full h-full sm:h-fit sm:w-96"
                >
                    <div className="flex flex-col h-full sm:rounded-md bg-background-color p-2 sm:py-5 px-5">
                        <div className="relative sm:hidden">
                            <div className="flex justify-between items-center sm:mb-5 dark:border-gray-600">
                                <button
                                    type="button"
                                    className="text-gray-600 bg-transparent hover:bg-gray-700 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover-bg-gray-600 dark:hover-text-white"
                                    onClick={handleClose}
                                >
                                    <CloseIcon/>
                                </button>
                            </div>
                        </div>

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
