import { Input, Dropdown, Button } from "antd";
import type { MenuProps } from 'antd';
import { useTranslation } from "react-i18next";
import type { Link } from "react-router-dom";

export default function InforCell({ id, value, type, isEdit }) {
    const { t } = useTranslation();

    const activeStates: MenuProps['items'] = [
        { key: 'active', label: t(`userManagement.infor.${type}.active`) },
        { key: 'disable', label: t(`userManagement.infor.${type}.disable`) },
    ];

    const handleActive = (e) => {
        console.log("Đã chọn:", e.key);
        if (e.key === "active") {
            console.log("active");
        } else if (e.key === "disable") {
            console.log("disable");
        }
    };

    return (
        <>
            { !isEdit
            ? <>
                <span>{
                    type === "fullName" || type === "username" || type === "email"
                        ? <a href="/profile"
                            target="_blank" rel="noopener noreferrer"
                            className="duration-200 hover:text-blue"
                        >
                            { value }
                        </a>
                    : type === "password"
                        ? "Đã ẩn"
                    : type === "active"
                        ? value ? t(`userManagement.infor.${type}.active`) : t(`userManagement.infor.${type}.disable`)
                    : value
                }</span>
            </>
            : <> { type === "active"
                ? <>
                    <Dropdown
                        menu={{
                            items: activeStates,
                            onClick: handleActive,
                            selectedKeys: ['active']
                        }}
                        placement="bottomRight"
                        trigger={['click']}
                    >
                        <Button>{ value ? t(`userManagement.infor.${type}.active`) : t(`userManagement.infor.${type}.disable`) }</Button>
                    </Dropdown>
                </>
                : <Input
                    placeholder="Aa"
                    allowClear
                    required
                />
            } </> }
        </>
    );
};