import { useTranslation } from "react-i18next"

export default function AffiliateLink() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-row gap-4 items-center justify-between bg-gray-700 px-10 py-5 mr-5 ml-5 mt-5 rounded-md">
           
           <div className="flex justify-left md:justify-center w-1/2">
                <p className="flex w-full text-white justify-left sm:justify-left text-lg md:text-2xl font-bold">{t('affiliate.title')}</p>
            </div>

            <button
                className="justify-center rounded-md bg-redcard-color px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
                {t('affiliate.btn')}
            </button>
                
            
        </div>
      )
}