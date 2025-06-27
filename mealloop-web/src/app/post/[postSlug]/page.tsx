"use client";
import { Input } from 'antd';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFaceSmileWink,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from 'react';

const arr = [
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
]

export default function PostDetailsPage() {
    const [comment, setComment] = useState();
    const commentInputRef = useRef(null);

    const startSend = async() => {

    }

    return (
        <div className="relative flex w-full h-full border">
            <div className='basis-[60%]'>
                {/* <Swiper
                    className="mySwiper border"
                >
                    <SwiperSlide>1</SwiperSlide>
                    <SwiperSlide>2</SwiperSlide>
                    <SwiperSlide>3</SwiperSlide>
                </Swiper> */}
            </div>

            <div className='relative basis-[40%] h-full border-l border-gray-line flex flex-col'>
                <div className='p-2 flex-1 overflow-auto'>
                    <button
                        className='w-full h-fit p-2 flex items-center rounded-md
                        duration-200 hover:bg-gray-hover active:scale-95'
                        onClick={() => {}}
                    >
                        <img
                            src="https://i.pinimg.com/736x/98/c6/a9/98c6a9ce3b1b2d9c258315fad87c88fc.jpg"
                            alt='Name'
                            className='w-[50px] h-[50px] rounded-full'
                        />
                        <div className='flex flex-col text-left ml-2'>
                            <span className='font-semibold'>Trần Thanh Hà</span>
                            <span className='font-light text-sm'>tranthanhha</span>
                        </div>
                    </button>
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, corrupti dolor quis mollitia, impedit doloremque harum numquam quibusdam atque voluptate asperiores sapiente nihil deserunt reprehenderit similique officiis necessitatibus tenetur? Laboriosam!</p>
                    
                    <span className='font-semibold'>Bình luận</span>
                    
                    <div className=''>
                        {arr.map((comment, index) => {
                            return (
                                <div key={index}
                                    className='mt-1 border border-gray-line rounded-md p-2'
                                >
                                    <p>Lorem</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div ref={commentInputRef} className='absolute bottom-0 w-full p-2 bg-white border-t border-gray-line flex items-center'>
                    <div className='flex items-center w-full border border-gray-line rounded-md'>
                        <Input
                            className='grow-1'
                            placeholder='Bình luận'
                            variant='borderless'
                            allowClear
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <FontAwesomeIcon icon={faFaceSmileWink}
                            className='pr-3'
                        />
                    </div>

                    <button className='border ml-1 py-[3px] px-3 rounded-md'
                        onClick={() => startSend()}
                    >
                        Gửi
                    </button>
                </div>
            </div>
        </div>
    );
};