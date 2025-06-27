import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { AtSign } from 'react-feather';

export default function Footer() {
    // Không dùng use client, để ssr, không dùng hook để tăng khả năng SEO
    return (
        <div className="pt-2 px-2 pb-10">
            <div className="flex mb-5">
                <div className='basis-[50%]'>
                    <h1 className="font-semibold text-xl">Meal Loop</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic similique incidunt nemo explicabo consequatur! Illum reprehenderit laboriosam quas consequatur, autem aut dolor expedita pariatur. Esse odit ex fugiat maiores animi!</p>
                    <a href="https://github.com/LoDtus/meal-loop" target="_blank" rel="noopener noreferrer"
                        className='group'
                    >
                        <span className='font-semibold'>Source code: <span
                            className='font-normal underline text-gray-icon
                            duration-200 group-hover:text-black'
                        >
                                here
                            </span>
                        </span>
                    </a>
                </div>

                <div className='basis-[50%] flex flex-col items-end'>
                    <span className='font-semibold text-xl'>Informations</span>
                    <div className='flex items-center'>
                        <span className='mr-2'>Nguyen Trung Long</span>
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className='flex items-center'>
                        <span className='mr-2'>nguyentrunglong.150903@gmail.com</span>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className='flex items-center'>
                        <span className='mr-2'>Hoang Mai, Ha Noi, Viet Nam</span>
                        <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                </div>
            </div>

            <div className='relative flex flex-col justify-center items-center'>
                <div className="z-10 px-3 flex justify-center items-center bg-white">
                    <a href="mailto:nguyentrunglong.150903@gmail.com"
                        className='mx-3 text-gray-icon
                        duration-200 hover:text-black active:scale-90'
                    >
                        <AtSign size={30}/>
                    </a>
                    <a href="https://www.facebook.com/nguyentrunglong.LoDtus" target="_blank" rel="noopener noreferrer" 
                        className='mx-3 text-gray-icon
                        duration-200 hover:text-black active:scale-90'
                    >
                        <FontAwesomeIcon icon={faFacebook} fontSize={27}/>
                    </a>
                    <a href="https://www.instagram.com/__nguyentrunglong__" target="_blank" rel="noopener noreferrer" 
                        className='mx-3 text-gray-icon
                        duration-200 hover:text-black active:scale-90'
                    >
                        <FontAwesomeIcon icon={faInstagram} fontSize={30}/>
                    </a>
                    <a href="https://www.linkedin.com/in/nguyentrunglong" target="_blank" rel="noopener noreferrer" 
                        className='mx-3 text-gray-icon
                        duration-200 hover:text-black active:scale-90'
                    >
                        <FontAwesomeIcon icon={faLinkedin} fontSize={27}/>
                    </a>
                    <a href="https://github.com/LoDtus" target="_blank" rel="noopener noreferrer" 
                        className='mx-3 text-gray-icon
                        duration-200 hover:text-black active:scale-90'
                    >
                        <FontAwesomeIcon icon={faGithub} fontSize={27}/>
                    </a>
                </div>
                <div className="absolute top-[15px] w-[95%] border-b"></div>

            </div>

            <div className='mt-3 flex justify-center items-center'>
                <span className="font-light">
                    Developed by <span className="font-semibold">Nguyễn Trung Long</span>
                </span>
                <div className="h-4 border-r mx-3"></div>
                <span className="font-light">
                    Powered by <span className="font-semibold">Next.js</span>
                </span>
            </div>
        </div>
    );
};