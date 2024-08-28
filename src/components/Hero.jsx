import mainLogo from "../image/blcapmainlogo.jpeg"

const Hero = () => {
  return (
    <div className="hero relative w-full h-96 flex items-center justify-center bg-contain bg-center" style={{ backgroundImage: `url(${mainLogo})` }}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>
      <h1 className="text-main text-3xl md:text-5xl font-extrabold text-center relative z-5">
        The BlueCAP stays on!
      </h1>
    </div>
  )
}

export default Hero
