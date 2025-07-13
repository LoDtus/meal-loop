import { Button } from "antd";

export default function ActBtnsUserInfor({ id, editingRow, setEditingRow }) {
    const isEditing = editingRow.includes(id);

    const handleClick = () => {
        setEditingRow((prev) =>
            editingRow.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    return (
        <div className="flex items-center">
            <Button
                className="!font-semibold"
                type="primary"
                onClick={handleClick}
            >
                {isEditing ? "Lưu" : "Chỉnh sửa"}
            </Button>
            { isEditing &&  <Button
                className="!font-semibold ml-1"
                type="default"
                onClick={handleClick}
            >
                Thoát
            </Button> }
            <Button
                className="!font-semibold ml-1"
                variant="solid" color="danger"
                onClick={() => {}}
            >
                Xóa
            </Button>
        </div>
    );
};