import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import { useTranslation } from 'react-i18next';

export default function Technologies() {
    const { t } = useTranslation();

    return (
        <section>
            <div className="mr-5 mt-10 ml-5  mx-auto">
                <div className="w-full flex flex-col justify-center items-center">
                    <h2 className="mb-1 text-4xl tracking-tight font-bold text-tech-title">{t('technologies.main-title')}</h2>
                    <p className="text-tech-content text-lg">{t('technologies.main-content')}</p>
                </div>


                <div className="flex flex-col md:flex-row gap-5 mb-4 items-center mt-20">
                
                    <div className="w-full md:w-1/3">
                        <div className="bg-card-color rounded-md w-full relative transform translate-y-0 hover:-translate-y-4 duration-500 ease-in-out mb-8 sm:mb-8 lg:mb-0">
                            <div className="flex rounded-full border-4 border-solid bg-cardIconBorder-color bg-cardIconText-color bg-cardIconBg-color absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 justify-center items-center h-16 w-16">
                                <HttpsOutlinedIcon style={{fontSize: 30}}/>
                            </div>
                            <div className="flex-auto text-center p-8 md:p-14">                                    
                                <h2 className="font-bold text-2xl capitalize tracking-wide text-center my-4 text-techCard-content">
                                    {t('technologies.f-title')}                        
                                </h2> 
                                <div className="text-center text-gray-400 text-md">
                                    <p>{t('technologies.f-content')}   </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3">
                        <div className="bg-redcard-color rounded-md w-full relative transform translate-y-0 hover:-translate-y-4 duration-500 ease-in-out mb-8 sm:mb-8 lg:mb-0">
                            <div className="flex rounded-full border-4 border-solid border-gray-100 text-white bg-gray-900 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 justify-center items-center h-16 w-16">
                                <VerifiedUserOutlinedIcon style={{fontSize: 35}}/>
                            </div>
                            <div className="flex-auto text-center p-8 md:p-14">                                    
                                <h2 className="font-bold text-2xl tracking-wide text-center my-4 text-white">
                                    {t('technologies.s-title')}                             
                                </h2> 
                                <div className="text-center text-gray-300 text-md">
                                    {t('technologies.s-content')}   
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3">
                        <div className="bg-card-color rounded-md w-full relative transform translate-y-0 hover:-translate-y-4 duration-500 ease-in-out mb-8 sm:mb-8 lg:mb-0">
                            <div className="flex rounded-full border-4 border-solid bg-cardIconBorder-color bg-cardIconText-color bg-cardIconBg-color absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 justify-center items-center h-16 w-16">
                                <SpeedOutlinedIcon style={{fontSize: 30}}/>
                            </div>
                            <div className="flex-auto text-center p-8 md:p-14">                                    
                                <h2 className="font-bold text-2xl tracking-wide text-center my-4 text-techCard-content">
                                    {t('technologies.t-title')}                       
                                </h2> 
                                <div className="text-center text-gray-400 text-md">
                                    {t('technologies.t-content')}   
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
