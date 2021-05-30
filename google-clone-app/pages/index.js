import Head from 'next/head'
import Avatar from '../components/Avatar'
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid"
import {SearchIcon} from "@heroicons/react/outline"
import  Image from 'next/image'
import Footer from '../components/Footer'
import { useRef } from 'react'
import {useRouter} from "next/router"

export default function Home() {
  
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`)
  }


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png" />
      </Head>
      <header className="flex w-full p-3 justify-end text-sm text-gray-700">
        

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
        
          <Avatar url="https://media-exp1.licdn.com/dms/image/C4D03AQGX-8VMeHy3Tg/profile-displayphoto-shrink_200_200/0/1594549940394?e=1627516800&v=beta&t=-wPxGUuIEsnTbBLyYYKbK2VN6XnySpf1NOJ5CUGg2qQ"/>
        </div>  
      </header>
      <form className="flex flex-col items-center mt-35 flex-grow ">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          width={290}
          height={90}
        />
        <div className="flex w-full ml-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl mt-5">
          <SearchIcon className="h-4 mr-3 text-gray-500" />
          <input type="text" className="flex-grow focus:outline-none" onSubmit={search} ref={ searchInputRef }/>
          <MicrophoneIcon className="h-4 text-blue-500"/>
        </div>
        <div className="flex flex-row w-1/2 space-y-0 justify-center mt-6 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn" onClick={search}>Google Search</button>
          <button className="btn" onClick={search}>I'm Feeling Lucky</button>
        </div>
        <div className="w-full">
          <p className="mt-5  text-sm text-center">Google offered in: 
          <span className="link__language"> हिन्दी </span>
          <span className="link__language">বাংলা </span>
          <span className="link__language">తెలుగు </span>
          <span className="link__language">मराठी </span>
          <span className="link__language">தமிழ் </span>
          <span className="link__language">ગુજરાતી </span>
          <span className="link__language">ಕನ್ನಡ </span>
          <span className="link__language">മലയാളം </span>
          <span className="link__language">ਪੰਜਾਬੀ </span>
          </p>
        </div>
          
      </form>
      <Footer/>
    </div>
  )
}
