"use client";

import { Button, Input } from "antd";
import { useEffect, useState } from "react";
import { Trash2 } from "react-feather";

const arr = [
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
]

export default function CartPage() {

    // Không nhất thiết phải nằm trên cùng 1 hàng, có thể: hình ảnh bên trái, ô thứ 2 thì có 3 4 dòng mô tả
    // Tham khảo trong assets
    // hình ảnh sp, tên sp, giá gốc, giá giảm, phân loại, số lượng, xóa, truy cập vào địa chỉ mua hàng, tên cửa hàng
    // các mã giảm giá được áp dụng

    const [products, setProducts] = useState([]);
    const [quantity, setQuantity] = useState([]);

    useEffect(() => {
        const response = "";

        setProducts(arr);
    }, []);

    useEffect(() => {
        const tempQuantity = [];
        products.map((item, index) => tempQuantity.push({
            id: index,
            count: index,
            max: 100,
        }));
        setQuantity(tempQuantity);
    }, [products]);

    const increaseProduct = (index) => {
        setQuantity(prev =>
            prev.map(item =>
                item.id === index
                    ? { ...item, count: Math.min(item.count + 1, item.max) }
                    : item
            )
        );
    };

    const decreaseProduct = (index) => {
        setQuantity((prev) =>
            prev.map((item) =>
                item.id === index
                ? { ...item, count: Math.max(item.count - 1, 0) }
                : item
            )
        );
    };

    const handleChangeQuantityInput = (e, index) => {
        const rawValue = e.target.value;

        // Cho phép người dùng xoá (trống) nhưng không cập nhật state ngay
        if (rawValue === "") {
            setQuantity((prev) =>
                prev.map((item) =>
                item.id === index
                    ? { ...item, count: "" }
                    : item
                )
            );
            return;
        };

        const newValue = parseInt(rawValue, 10);

        if (!isNaN(newValue)) {
        const clampedValue = Math.max(0, Math.min(newValue, itemQuantity?.max ?? 100));
            setQuantity((prev) =>
                prev.map((item) =>
                item.id === index
                    ? { ...item, count: clampedValue }
                    : item
                )
            );
        };
    };

    return (
        <div className="flex border-b border-gray-line">
            <div className="basis-[70%] p-2">
                <span>Danh sách</span>
                { products.map((product, index) => {
                    const itemQuantity = quantity.find((item) => item?.id === index);

                    return (
                        <div key={index}
                            className={`border flex rounded-md p-2
                                ${ index > 0 ? "mt-2" : null}
                            `}
                        >
                            <button
                                className="duration-200 active:scale-90"
                                onClick={() => {}}
                            >
                                <img
                                    src="https://i.pinimg.com/736x/64/1a/c4/641ac471c0e0a959962b093ef422b450.jpg"
                                    alt="Tên sản phẩm"
                                    className="w-[100px] aspect-square mr-2 object-cover rounded-md"
                                    />
                            </button>
                            <div className="grow-1 flex flex-col justify-center text-left">
                                <span className="font-semibold">Tên sản phẩm</span>
                                <span className="flex items-start">100.000<span className="text-sm">đ</span></span>
                                <div className="flex w-fit">
                                    <Button className=""
                                        onClick={() => decreaseProduct(index)}
                                    >-</Button>
                                    <Input
                                        className="!mx-1"
                                        placeholder={itemQuantity?.count}
                                        // min={0}
                                        // max={itemQuantity?.max}
                                        value={itemQuantity?.count ?? 0}
                                        onChange={(e) => handleChangeQuantityInput(e.target.value, index)}
                                    />
                                    <Button className=""
                                        onClick={() => increaseProduct(index)}
                                    >+</Button>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between items-end">
                                <div>
                                    Mã giảm giá
                                </div>
                                <Button
                                    className="!w-fit"
                                    color="danger" variant="solid"
                                    onClick={() => {}}
                                >
                                    <Trash2 color="white"/>
                                </Button>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="basis-[30%] p-2 border-l border-gray-line flex flex-col text-left">

                <span>Địa chỉ giao</span>
                <span>Voucher áp dụng</span>

                <span>Tạm tính</span>
                <span>Giảm giá</span>
                <span>Tổng tiền</span>

                <Button
                    className="!font-semibold"
                    onClick={() => {}}
                >
                    Thanh toán
                </Button>
            </div>
        </div>
    );
};