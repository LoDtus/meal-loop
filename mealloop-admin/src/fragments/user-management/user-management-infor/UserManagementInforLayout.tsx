import "../styles.css";
import { useEffect, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import { MRT_Localization_VI } from "material-react-table/locales/vi";
import { MRT_Localization_EN } from "material-react-table/locales/en";

export default function UserManagementInforLayout() {
    // Trạng thái để theo dõi ngôn ngữ hiện tại (vi hoặc en)
    const [language, setLanguage] = useState("vi");
    const [rowData, setRowData] = useState([]);
    const [columnOrder, setColumnOrder] = useState([
        "no",
        "fullName",
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
        { accessorKey: "fullName", header: "Họ tên" },
        { accessorKey: "email", header: "Email" },
        { accessorKey: "password", header: "Mật khẩu", enableSorting: false },
        { accessorKey: "status", header: "Trạng thái" },
        { accessorKey: "active", header: "Kích hoạt" },
        { accessorKey: "role", header: "Vai trò" },
        {
            accessorKey: "actions",
            header: "Thực hiện",
            enableSorting: false,
            enableColumnOrdering: false,
        },
    ];

    // Chọn localization dựa trên ngôn ngữ
    const localization = language === "vi" ? MRT_Localization_VI : MRT_Localization_EN;

    // Dữ liệu mẫu, không thay đổi theo ngôn ngữ
    // const sampleData = [
    //     {
    //         no: 1,
    //         fullName: "Nguyễn Văn A",
    //         email: "nva@example.com",
    //         password: "********",
    //         status: "Hoạt động",
    //         active: "Có",
    //         role: "Quản trị viên",
    //         actions: "Chỉnh sửa/Xóa",
    //     },
    // ];

    // useEffect(() => {
    //     setRowData(sampleData);
    // }, []); // Không cần phụ thuộc vào language vì dữ liệu không thay đổi

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

            <MaterialReactTable
                columns={columns}
                data={rowData}
                enableColumnOrdering
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
            />
        </div>
    );
};