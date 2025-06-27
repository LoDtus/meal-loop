"use client";
import { useParams } from "next/navigation";

export default function AlbumDetailsPage() {
    const params = useParams();
    console.log(params);

    return (
        <div className="border h-[100px]">
            album chi tiết
        </div>
    );
};