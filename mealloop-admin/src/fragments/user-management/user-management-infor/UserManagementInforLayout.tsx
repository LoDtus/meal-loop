import "../styles.css";
import { useEffect, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import { MRT_Localization_VI } from "material-react-table/locales/vi";
import { MRT_Localization_EN } from "material-react-table/locales/en";
import ActBtnsUserInfor from "./components/ActBtnsUserInfor";
import { users } from "../../../configs/temp";
import InforCell from "./components/InforCell";
import { Button, Checkbox, Dropdown, Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faFilter,
    faArrowDownAZ,
    faArrowDownZA,
} from "@fortawesome/free-solid-svg-icons";

const filterOptions = [
    {
        key: "fullName",
        label: <div className="flex items-center">
            <Checkbox/>
            Full Name
            
        </div>,
    },
];

export default function UserManagementInforLayout() {
    // Trạng thái để theo dõi ngôn ngữ hiện tại (vi hoặc en)
    const [language, setLanguage] = useState("vi");
    const localization = language === "vi" ? MRT_Localization_VI : MRT_Localization_EN;
    const [editingRow, setEditingRow] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [isOpenFilter, setIsOpenFilter] = useState(false);

    const [rowData, setRowData] = useState([]);
    const [columnOrder, setColumnOrder] = useState([
        "no",
        "fullName",
        "username",
        "email",
        "password",
        "status",
        "active",
        "role",
        "actions",
    ]);

    // Cột cố định, không thay đổi theo ngôn ngữ
    const columns = [
        { accessorKey: "no", header: "STT" },
        { accessorKey: "fullName", header: "Họ tên",
            Cell: ({ row }) => {
                const original = row.original;
                return (
                    <InforCell
                        id={original.id}
                        value={original.fullName}
                        type="fullName"
                        isEdit={editingRow.includes(original.id)}
                    />
                )
            }
        },
        { accessorKey: "username", header: "Tên đăng nhập",
            Cell: ({ row }) => {
                const original = row.original;
                return (
                    <InforCell
                        id={original.id}
                        value={original.username}
                        type="username"
                        isEdit={editingRow.includes(original.id)}
                    />
                )
            }
        },
        { accessorKey: "email", header: "Email",
            Cell: ({ row }) => {
                const original = row.original;
                return (
                    <InforCell
                        id={original.id}
                        value={original.email}
                        type="email"
                        isEdit={editingRow.includes(original.id)}
                    />
                )
            }
        },
        { accessorKey: "password", header: "Mật khẩu", enableSorting: false },
        { accessorKey: "status", header: "Trạng thái" },
        { accessorKey: "active", header: "Kích hoạt",
            // Cell: ({ cell }) => cell.getValue() ? "Đã kích hoạt" : "Vô hiệu hóa"
            Cell: ({ row }) => {
                const original = row.original;
                return (
                    <InforCell
                        id={original.id}
                        value={original.active}
                        type="active"
                        isEdit={editingRow.includes(original.id)}
                    />
                )
            }
        },
        { accessorKey: "role", header: "Vai trò" },
        {
            accessorKey: "actions",
            header: "Thực hiện",
            enableColumnOrdering: false,
            Cell: ({ row }) => <ActBtnsUserInfor
                id={row.original.id}
                editingRow={editingRow}
                setEditingRow={setEditingRow}
            />,
        },
    ];

    const setupTableData = async() => {
        const formattedData = users.map((user, index) => ({
            no: index + 1,
            ...user,
        }));
        setRowData(formattedData);
    };

    useEffect(() => {
        setupTableData();
    }, []);

    // Hàm chuyển đổi ngôn ngữ
    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "vi" ? "en" : "vi"));
    };

    return (
        <div className="p-2">
            <div className="flex justify-between items-center mb-3">
                <p className="font-semibold text-xl">Quản lý người dùng</p>
                <button
                    onClick={toggleLanguage}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    {language === "vi" ? "Chuyển sang Tiếng Anh" : "Switch to Vietnamese"}
                </button>
            </div>

            <div className="w-fit mb-2 pl-3 flex items-center border border-gray-line rounded-md">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <Input
                    className="!w-fit"
                    placeholder="Tìm kiếm"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    variant="borderless"
                />
                <Dropdown
                        menu={{
                            items: filterOptions,
                            // onClick: handleActive,
                            // selectedKeys: ['active']
                        }}
                        placement="bottomRight"
                        trigger={['click']}
                >
                    <button className={`pl-1 pr-3 duration-200 hover:text-black active:scale-90
                            ${ isOpenFilter ? "text-black" : "text-gray-text" }
                            `}
                            onClick={() => setIsOpenFilter(!isOpenFilter)}
                            >
                        <FontAwesomeIcon icon={faFilter}/>
                    </button>
                </Dropdown>
            </div>

            <MaterialReactTable
                columns={columns}
                data={rowData}
                state={{ columnOrder }}
                onColumnOrderChange={setColumnOrder}
                muiTableBodyCellProps={({ cell }) => ({
                    sx: {
                        backgroundColor: cell.column.id === "fullName" ? "#f0f0f0" : "white",
                    },
                })}
                localization={localization}
                muiPaginationProps={{
                    rowsPerPageOptions: [5, 10, 20, 50],
                }}
                enableColumnOrdering
                enableGlobalFilter={false}
                enableColumnFilters={false}
                enableSorting={false}
            />
        </div>
    );
};