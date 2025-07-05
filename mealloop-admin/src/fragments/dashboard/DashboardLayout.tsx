import { useTranslation } from "react-i18next";

export default function DashboardLayout() {
    const { t, i18n } = useTranslation();

    return (
        <div className="p-2">
            dashboard
        </div>
    );
};