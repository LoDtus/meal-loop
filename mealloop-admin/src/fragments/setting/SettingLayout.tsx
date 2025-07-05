import { Button } from "antd";
import { useTranslation } from "react-i18next";

export default function SettingLayout() {
    const { i18n } = useTranslation();

    return (
        <div>
            <Button
                className=""
                type="primary"
                onClick={() => i18n.changeLanguage('en')}
            >
                🇺🇸 EN
            </Button>
            <Button
                className=""
                type="primary"
                onClick={() => i18n.changeLanguage('vi')}
            >
                    🇻🇳 VI
            </Button>
        </div>
    );
}