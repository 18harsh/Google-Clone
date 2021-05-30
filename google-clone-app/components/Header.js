import { ViewGridIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image"
import { useRouter } from "next/router";
import { useRef } from 'react'
import { MicrophoneIcon } from "@heroicons/react/solid"
import {SearchIcon} from "@heroicons/react/outline"
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`)
  }


    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image
                src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                width={120}
                height={40}
                className="cursor-pointer"
                onClick={()=>router.push('/')}
            />
            <form className="flex px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full shadow-lg max-w-3xl items-center flex-grow">
                
                <input type="text" ref={searchInputRef} className="flex-grow w-full focus:outline-none" />

                <XIcon className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
                    onClick={() => { searchInputRef.current.value = "" }} />
                
                <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500  border-l-2 pl-4 border-gray-300" />
                
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex"/>

                <button hidden type="submit" onClick={search}>Search</button>
                </form>
                <div className="flex space-x-4 ml-auto w-40 sm:w-auto">
                    <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
                    <Avatar url="https://media-exp1.licdn.com/dms/image/C4D03AQGX-8VMeHy3Tg/profile-displayphoto-shrink_200_200/0/1594549940394?e=1627516800&v=beta&t=-wPxGUuIEsnTbBLyYYKbK2VN6XnySpf1NOJ5CUGg2qQ" className="ml-auto"/>
                </div>
                
            </div>
            <HeaderOptions/>
        </header>
    )
}

export default Header
