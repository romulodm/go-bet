import { useTranslation } from "react-i18next"

export default function Announcement() {
    const { t } = useTranslation();
    
    return (
        
        <div className="w-full flex text-white justify-center p-2 bg-green-400">
            <p className="font-semibold">{t('announcement.title')}</p>
        </div>
    )
}