import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function Login() {
    const { t } = useTranslation();
    const [emailEnteredByUser, setEmailEnteredByUser] = useState("");
    const [passwordEnteredByUser, setPasswordEnteredByUser] = useState("");
    const [showPasswordTyped, setShowPasswordTyped] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmitFormToLogin = (e) => {
        e.preventDefault();
    }

    return (
        <form className="flex flex-col justify-center items-center">
            <img src="./ico.png"></img>
            <p className="text-blue-300 text-xl font-bold mt-2">Go Bet</p>
            <p className="text-main-color mb-4 text-md font-medium mt-5">{t('auth.title-login')}</p>

            <div className="h-12 w-full border bg-game-color border-none rounded flex items-center mb-5">
                <EmailIcon style={{ color: "rgba(153, 153, 153, 0.35)", marginLeft:"5px" }} />
                <input
                placeholder={t('auth.e-input')}
                type="text"
                className="flex-1 text-main-color bg-game-color min-w-40% px-4 border-none outline-none"
                value={emailEnteredByUser}
                onChange={(e) => setEmailEnteredByUser(e.target.value)}
                />
            </div>

            <div className="h-12 w-full border bg-game-color border-none rounded flex items-center mb-5">
                <LockIcon style={{ color: "rgba(153, 153, 153, 0.35)", marginLeft:"5px" }} />
                <input
                type={showPasswordTyped ? "text" : "password"}
                placeholder={t('auth.p-input')}
                className="flex-1 text-main-color min-w-40% px-4 bg-game-color border-none outline-none"
                value={passwordEnteredByUser}
                onChange={(e) => setPasswordEnteredByUser(e.target.value)}
                />

                {showPasswordTyped ? (

                    <VisibilityOffIcon
                        style={{ color: 'rgba(153, 153, 153, 0.1)', marginRight: "10px", marginLeft: "10px", fontSize: "1.3em", cursor: "pointer" }}
                        onClick={() => setShowPasswordTyped(false)}
                    />

                ) : (

                    <VisibilityIcon
                        style={{ color: 'rgba(153, 153, 153, 0.1)', marginRight: "10px", marginLeft: "10px", fontSize: "1.3em", cursor: "pointer" }}
                        onClick={() => setShowPasswordTyped(true)}
                    />

                )}
            </div>

            <button
                className="w-full h-12 border-none justify-center items-center rounded bg-primary-color text-white cursor-pointer"
                type="submit"
                onClick={handleSubmitFormToLogin}
            >

                {isLoading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <CircularProgress size={20} style={{fontSize: "2px"}} color="secondary"/>
                    </Box>
                ) : (
                    <p>{t('auth.btn-login')}</p>
                )}

            </button>

        </form>
    )
}
