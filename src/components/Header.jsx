import Marquee from "react-fast-marquee"
import Dogcap from "../image/dog-with-cap.png"
import Bluecaplogo from "../image/bluecaplogo.png"
import telegram from "../image/telegram_icon.webp"
import { Link } from "react-scroll"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {setIsOpen(!isOpen)}


  return (
    <>
    <div className="w-full bg-main py-4 fixed top-0 left-0 z-20">
      <Marquee
        gradient={false}
        speed={45}
        className="text-white font-bold text-2xl flex items-center"
      >
        <div className="mx-4"><div className="flex">$BLUECAP <img src={Dogcap} className="w-8" /></div></div>
        <div className="mx-4"><div className="flex">$BLUECAP <img src={Dogcap} className="w-8" /></div></div>
        <div className="mx-4"><div className="flex">$BLUECAP <img src={Dogcap} className="w-8" /></div></div>
        <div className="mx-4"><div className="flex">$BLUECAP <img src={Dogcap} className="w-8" /></div></div>
        <div className="mx-4"><div className="flex">$BLUECAP <img src={Dogcap} className="w-8" /></div></div>
        <div className="mx-4"><div className="flex">$BLUECAP <img src={Dogcap} className="w-8" /></div></div>
        <div className="mx-4"><div className="flex">$BLUECAP <img src={Dogcap} className="w-8" /></div></div>
        <div className="mx-4"><div className="flex">$BLUECAP <img src={Dogcap} className="w-8" /></div></div>
        <div className="mx-4"><div className="flex">$BLUECAP <img src={Dogcap} className="w-8" /></div></div>
      </Marquee>
    </div>

    <div className="w-[90%] mt-12 left-1/2 transform -translate-x-1/2 bg-white mx-auto h-20 rounded-2xl justify-between fixed z-20 flex items-center shadow-lg">
      <div className="w-[25%] md:w-[20%] lg:w-[10%]"><img src={Bluecaplogo} className="w-28" /></div>

      <div className="hidden lg:w-[40%] lg:justify-around md:justify-between md:flex lg:gap-8 gap-4">
        <Link to="about" smooth={true} offset={-180} duration={500} className="text-text font-bold lg:text-2xl md:text-lg hover:text-main">About</Link>
        <Link to="why" smooth={true} offset={-150} duration={500} className="text-text font-bold lg:text-2xl md:text-lg hover:text-main">Why</Link>
        <Link to="info" smooth={true} offset={-110} duration={500} className="text-text font-bold lg:text-2xl md:text-lg hover:text-main">Info</Link>
        <Link to="chart" smooth={true} offset={-125} duration={500} className="text-text font-bold lg:text-2xl md:text-lg hover:text-main">Chart</Link>
        <Link to="roadmap" smooth={true} offset={-120} duration={500} className="text-text font-bold lg:text-2xl md:text-lg hover:text-main">Roadmap</Link>
      </div>

      <div className="hidden mr-7 w-[15%] justify-around md:flex gap-3">
        <a href="http://t.me/BlueCapCoinSOL" target="_blank" rel="noopener noreferrer"><img src={telegram} className="w-14"/></a>
        <a href="https://x.com/bluecapsol?s=21&t=YaZ3JzgY3AG7QkJmRfCrAQ" className="mt-2 text-4xl" target="_blank" rel="noopener noreferrer">𝕏</a>
      </div>

      <div className="text-3xl mr-4 text-main cursor-pointer sm:hidden" onClick={toggle}>{isOpen ? <FaTimes/> : <FaBars/>}</div>
    </div>
    <div className={`${isOpen ? 'top-[7.9rem]' : '-top-72'} sm:hidden w-[90%] fixed text-center left-1/2 transform -translate-x-1/2 my-auto bg-white mt-1 py-8 items-center justify-center transition-all self-center duration-400 ease-in-out text-2xl z-10 shadow-lg rounded-2xl`}>
      <Link to="about" onClick={toggle} smooth={true} offset={-180} duration={500} className="justify-between">
        <p className="py-2 text-text font-bold text-3xl hover:text-main">About</p>
      </Link>
      <Link to="why" onClick={toggle} smooth={true} offset={-150} duration={500} className="justify-between">
        <p className="py-2 text-text font-bold text-3xl hover:text-main">Why</p>
      </Link>
      <Link to="info" onClick={toggle} smooth={true} offset={-110} duration={500} className="justify-between">
        <p className="py-2 text-text font-bold text-3xl hover:text-main">Info</p>
      </Link>
      <Link to="chart" onClick={toggle} smooth={true} offset={-125} duration={500} className="justify-between">
        <p className="py-2 text-text font-bold text-3xl hover:text-main">Chart</p>
      </Link>
      <Link to="roadmap" onClick={toggle} smooth={true} offset={-120} duration={500} className="justify-between">
        <p className="py-2 text-text font-bold text-3xl hover:text-main">Roadmap</p>
      </Link>
      <div className="flex mt-4 justify-center">
        <a href="http://t.me/BlueCapCoinSOL" target="_blank" rel="noopener noreferrer"><img src={telegram} className="w-14"/></a>
        <a href="https://x.com/bluecapsol?s=21&t=YaZ3JzgY3AG7QkJmRfCrAQ" className="mt-1 ml-3 text-5xl" target="_blank" rel="noopener noreferrer">𝕏</a>
      </div>
    </div>
    </>
  )
}

export default Header
