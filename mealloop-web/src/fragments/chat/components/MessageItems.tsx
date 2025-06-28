// tin nhắn text
// truyền qua params: sendByMe = true/false, có ảnh + tên - isSimpleMessage = true/false
// tin nhắn ảnh, video, âm thanh, file, link share (preview), vị trí hiện tại
// thời điểm

export const TextMessage = ({
    message,
    sendByMe,
    isSimpleMessage,
}) => {
    return (
        <div key={1}
            className={`w-[60%] mt-1 flex items-start
                ${ isSimpleMessage ? "pl-[40px]" : null }
            `}
        >
            { !isSimpleMessage && <button className="w-[45px] aspect-square mt-2 flex justify-center items-center
                border-3 border-white rounded-full overflow-hidden
                duration-200 hover:border-gray-hover active:scale-90"
            >
                <img
                    src="https://i.pinimg.com/736x/56/b1/b6/56b1b632445ee90b0ffa2974ce80b243.jpg"
                    alt="Image"
                    className="w-full h-full object-cover"
                    />
            </button> }
            <div className="w-full ml-1">
                { !isSimpleMessage && <span className="text-sm">nguyenthiphuongly</span> }
                <div
                    className={`border w-full py-1 px-2 flex items-center
                        rounded-md
                    `}
                    title="123" // timestamp
                >
                    123
                </div>
            </div>
        </div>
    );
};