import { useRouter } from 'nextjs-toploader/app';

export default function PostItem({
    num,
    masonryWidth,
    columns,
}) {
    const router = useRouter();

    return (
        <div
            className="py-1 px-1"
            style={{ width: `${(masonryWidth / columns)}px` }}
        >
            <button
                className="masonry-item group h-full text-left
                duration-200"
                onClick={() => router.push("/post/post_123")}
            >
                <img
                    src={`https://naver.github.io/egjs-infinitegrid/assets/image/${(num % 33) + 1}.jpg`}
                    alt="Image"
                    className="border border-gray-line rounded-md
                    duration-200 group-active:scale-95"
                />
                <div className="px-1 pt-1 pb-5">
                    <h2 className="font-semibold line-clamp-2 underline duration-200">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam aperiam doloribus asperiores, error deserunt magnam recusandae alias aliquid, quia nobis in, ducimus dolor. Non ipsum sunt debitis perspiciatis error distinctio.</h2>
                    <p className="font-light text-sm line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, libero iure exercitationem obcaecati doloremque velit voluptate quas minus animi eligendi quo cumque pariatur. Velit magnam a vel animi eos est?</p>
                </div>
            </button>
        </div>
    );
};