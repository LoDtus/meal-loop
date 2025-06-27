"use client";

export default function ProfileLayout() {
    return (
        <div className="w-full">
            <div className="w-full h-[300px] bg-yellow">

            </div>

            <div className="p-2">
                <button
                    className="absolute top-[250px]
                    rounded-full overflow-hidden border-5 border-white
                    duration-200 active:scale-90"
                    onClick={() => {}}
                >
                    <img
                        className="w-[200px] aspect-square object-cover"
                        src="https://i.pinimg.com/736x/e9/5f/c5/e95fc5a2c631136c53bd854d16b83cad.jpg"
                        alt="Nguyễn Trung Long"
                    />
                </button>
            </div>
        </div>
    );
};