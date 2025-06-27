"use client";
import 'swiper/css';
import 'swiper/css/navigation';
import { RootState } from "@/lib/redux/store"
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from 'nextjs-toploader/app';

const TABS = [
    { id: "all", label: "Tất cả" },
    { id: "media", label: "Phương tiện" },
    { id: "shared", label: "Chia sẻ" }
];

export default function ProfileLayoutPage({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();

    const profile = useSelector((state: RootState) => state.profile);
    const sideWidth = useSelector((state: RootState) => state.properties.sideWidth);
    const [selectedProfile, setSelectedProfile] = useState(null);
    const tabRef = useRef(null);
    const currentIndex = TABS.findIndex(tab => pathname.includes(tab?.id));

    const getProfile = async() => {
        const response = "";
    }

    useEffect(() => {
        if (profile?.id || profile?.selectedProfile) return;
        if (profile?.selectedProfile === profile?.username) return setSelectedProfile(profile);
        getProfile();
    }, [profile]);

    useEffect(() => {
        if (tabRef.current && tabRef.current.swiper && currentIndex !== -1) {
            tabRef.current.swiper.slideTo(currentIndex);
        }
    }, [pathname]);

    const handleChangeTab = (swiper) => {
        const i = swiper.activeIndex;
        const nextTab = TABS[i];
        if (nextTab && !pathname?.includes(nextTab?.id)) {
            router.push(`/profile/username/user-123/${nextTab?.id}`);
        }
    }

    return (
        <div>
            <div className="w-full h-[300px] border">

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

                <div className="mt-[100px]">abc</div>
            </div>

            <div className="flex justify-between border-b border-gray-line">
                {TABS?.map((tab, index) => {
                    return (
                        <button key={tab?.id}
                            onClick={() => router.push(`/profile/username/user-123/${tab?.id}`)}
                        >
                            <span>{tab?.label}</span>
                        </button>
                    )
                })}
            </div>

            { currentIndex === -1
            ? (
                <div className="mt-2">{children}</div>
            ) : <Swiper
                ref={tabRef}
                className="mySwiper mt-1 w-full"
                style={{ width: `calc(100vw - ${sideWidth*2 + 15}px)` }}
                onSlideChange={handleChangeTab}
                slidesPerView={1}
                spaceBetween={20}

                // Chặn hết các hành vi chuyển slide khác của người dùng, trừ việc click button
                // allowTouchMove={false}
                // simulateTouch={false}
                // keyboard={{ enabled: false }}
                // mousewheel={{ forceToAxis: false }}
                // cssMode={false}
                // allowSlideNext={false}
                // allowSlidePrev={false}
            >
                {TABS.map((tab, index) => (
                    <SwiperSlide key={index} className='border box-border'>
                        { index === currentIndex ? children : null }
                    </SwiperSlide>
                ))}
            </Swiper> }
        </div>
    )
};