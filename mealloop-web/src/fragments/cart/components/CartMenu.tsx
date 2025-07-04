import { useRouter } from "nextjs-toploader/app";

export default function CartMenu({ headerHeight, distanceFromRightHeader }) {
    const router = useRouter();

    return (
        <div className="z-20 absolute top-0 right-2 p-2 bg-white border border-gray-line rounded-md shadow-lg"
            style={{
                marginTop: `${headerHeight - 10}px`,
                marginRight: `${distanceFromRightHeader[1]*2 + 10}px`
            }}
        >
            <button>

            </button>
            <button
                className="border
                duration-200 active:scale-90"
                onClick={() => router.push("/cart")}
            >
                Xem thêm
            </button>
        </div>
    );
};