import React, { useState, useEffect } from "react";

import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CircularProgress from '@mui/material/CircularProgress';
import { useTranslation } from "react-i18next";

function generateRandomCode() {
    let code = "";
    const possibleDigits = "0123456789";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * 10);
      const randomDigit = possibleDigits[randomIndex];
      code += randomDigit;
    }
    return code;
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
};

export default function ResetPassword() {
    const { t } = useTranslation();

    const [isLoading, setIsLoading] = useState(false);

    const [emailEnteredByUser, setEmailEnteredByUser] = useState("");

    // Código que será enviado para o email e código que será inserido no input pelo usuário:
    const [code, setCode] = useState(false);
    const [showEnterCodeBox, setEnterCodeBox] = useState(false);
    const [codeEnteredByUser, setCodeEnteredByUser] = useState(""); 
    //


    // Caixa de alteração de senha:
    const [showNewPasswordBox, setNewPasswordBox] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true); 
    //

    const handleSubmitEmailEnteredByUser = (e) => {
        e.preventDefault();

        //setIsLoading(true)

        var randomCode = generateRandomCode();
        setCode(randomCode);
        console.log(randomCode);

        setEnterCodeBox(true);
        
    }
    //

	// Na caixa para inserir o código enviado ao email:
    const handleCheckResetCode = (e) => {
        e.preventDefault()
        if (code === codeEnteredByUser) {
            setCode(false);
            setCodeEnteredByUser("");
            setEnterCodeBox(false);
            setNewPasswordBox(true);
        }
    };
    //

    // Checar a nova senha e fazer uma requisição de alteração:
    const handleCheckNewPassword = (e) => {
        e.preventDefault();

    };
    //

    const cancelReset = () => {
        setCode(false);
        setCodeEnteredByUser("");
        setNewPassword("");
        setUserEmailEnteredByUser("");
        setNewPasswordBox(false);
    }


return (
    
        <div className="flex flex-col justify-center items-center">
            <img src="./ico.png"></img>
            <p className="text-blue-300 text-xl font-bold mt-2">Go Bet</p>
        
            
            {(showEnterCodeBox && showNewPasswordBox == false) ? ( 
            <form className="w-full">
                <div className="flex justify-center">
                    <p className="text-main-color mb-4 text-md font-medium mt-5">{t('auth.title-code')}</p>
                </div>
                                
                <div className="h-12 w-full border bg-game-color border-none rounded flex items-center mb-5">
                    <CodeIcon style={{ color: "rgba(153, 153, 153, 0.35)", marginLeft:"5px" }} />
                    <input
                        placeholder={t('auth.c-input')}
                        type="text"
                        className="flex-1 text-main-color  bg-game-color min-w-40% px-4 border-none outline-none"
                        value={codeEnteredByUser} 
                        onChange={(e) => setCodeEnteredByUser(e.target.value)}
                    />
                </div>

                <div className="flex flex-row justify-between w-full gap-2">
                    <button className="border-none h-10 w-1/2 bg-red-500 rounded-md text-white cursor-pointer font-medium"  
                    onClick={cancelReset}
                    >
                        {t('auth.btn-cancel')}
                    </button>

                    <button 
                        className="border-none h-10 w-1/2 bg-primary-color rounded-md text-white cursor-pointer font-medium hover:bg-blue-700" 
                        onClick={handleCheckResetCode}
                    >
                        {t('auth.btn-confirm')}
                    </button>
                </div>
            </form>

            ) : (code == false && showNewPasswordBox == true) ? (
            <form className="w-full">
                <div className="flex justify-center">
                    <p className="text-main-color mb-4 text-md font-medium mt-5">{t('auth.title-newPass')}</p>
                </div>
                
                <div className="h-12 w-full border bg-game-color border-none rounded flex items-center mb-5">
                    <LockIcon style={{ color: "rgba(153, 153, 153, 0.35)", marginLeft:"5px" }} />
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder={t('auth.p-input')}
                        className="flex-1 text-main-color  min-w-40% px-4 bg-game-color border-none outline-none"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />

                    {showPassword? (

                        <VisibilityOffIcon
                            style={{ color: 'rgba(153, 153, 153, 0.1)', marginRight: "10px", marginLeft: "10px", fontSize: "1.3em", cursor: "pointer" }}
                            onClick={() => setShowPassword(false)}
                        />

                    ) : (

                        <VisibilityIcon
                            style={{ color: 'rgba(153, 153, 153, 0.1)', marginRight: "10px", marginLeft: "10px", fontSize: "1.3em", cursor: "pointer" }}
                            onClick={() => setShowPassword(true)}
                        />

                    )}
                </div>

                <div className="flex flex-row justify-between w-full gap-2">
                    <button 
                        className="border-none h-10 w-1/2 bg-red-500 rounded-md text-white cursor-pointer font-medium"  
                        onClick={cancelReset}
                    >
                        {t('auth.btn-cancel')}
                    </button>

                    <button 
                        className="border-none h-10 w-1/2 bg-primary-color rounded-md text-white cursor-pointer font-medium" 
                                                onClick={handleCheckNewPassword}
                                            >
                        {isLoading ? (
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <CircularProgress size={20} style={{fontSize: "2px"}} color="secondary"/>
                            </Box>
                        ) : (
                            <p>{t('auth.btn-confirm')}</p>
                        )}
                    </button>
                </div>
            </form>

            ) : (
            <form className="w-full">
                <div className="flex justify-center">
                    <p className="text-main-color mb-4 text-md font-medium mt-5">{t('auth.title-forgot')}</p>
                </div>

                <div className="h-12 w-full border bg-game-color border-none rounded flex items-center mb-5">
                    <EmailIcon style={{ color: "rgba(153, 153, 153, 0.35)", marginLeft:"5px" }} />
                    <input
                        placeholder={t('auth.e-input')}
                        type="text"
                        className="flex-1 text-main-color bg-game-color px-4 border-none outline-none w-full"
                        value={emailEnteredByUser}
                        onChange={(e) => setEmailEnteredByUser(e.target.value)}
                    />
                </div>

                <button
                    disabled={isLoading}
                    type="submit"
                    className="w-full h-12 justify-center rounded-md bg-primary-color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={handleSubmitEmailEnteredByUser || code}
                >
                    {isLoading ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <CircularProgress size={20} style={{fontSize: "2px"}} color="secondary"/>
                        </Box>
                    ) : (
                        <p>{t('auth.btn-resetPass')}</p>
                    )}
                </button>
            </form>
            )}

        </div>
  )
}