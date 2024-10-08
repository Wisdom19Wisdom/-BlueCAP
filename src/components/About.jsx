import Blcap from "../image/blcapmainlogo2.jpeg"
import Bluecap from "../image/bluecaplogo2.jpeg"
import BlueHat from "../image/blcaplogo1.jpeg"
import { Fade, Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="about-bluecap text-center text-text mx-5 mt-16">
      <Fade direction="up" triggerOnce delay={200}>
        <h1 className="text-3xl md:text-5xl font-extrabold">WELCOME TO <span className="text-main">$BlueCAP</span></h1>
      </Fade>
      <Fade direction="up" triggerOnce delay={200}>
        <h3 className="font-semibold text-xl mt-3 md:mt-8 md:mx-8">
          The name <span className="text-main">$BlueCAP</span> was chosen because it`s simple, memorable, and symbolizes the core values we want to represent! Trust, 
          loyalty, and creativity. The “<span className="text-main">blue cap</span>” is a playful symbol of reliability and community spirit. Just like how a cap is 
          something you wear with pride, <span className="text-main">$BlueCAP</span> is about building a project that our community can be proud to be a part of.🐶🧢
        </h3>
      </Fade>
      <Fade direction="up" triggerOnce delay={200}>
        <p className="font-semibold text-xl mt-4 md:mt-8 md:mx-8">
          We chose a dog as our mascot because dogs are universally seen as loyal, friendly, and reliable! Traits we want to reflect 
          in our project and community. The <span className="text-main">blue cap</span> adds a unique, recognizable touch, representing creativity and the idea of 
          building something cool and approachable. The combination of the dog and the blue cap creates a character that`s both fun 
          and easy to rally around, making it perfect for a project focused on community and inclusivity.
        </p>
      </Fade>
      <Slide direction="up" triggerOnce delay={200}>
        <div className="flex justify-around mt-3">
          <img src={Bluecap} className="w-36 md:w-52 lg:w-64 rounded-2xl" alt="BlueCAP Logo - A Symbol of Trust and Creativity"/>
          <img src={BlueHat} className="hidden md:block md:w-52 lg:w-64 rounded-2xl" alt="BlueCAP Logo - A Symbol of Trust and Creativity"/>
          <img src={Blcap} className="w-36 md:w-52 lg:w-64 rounded-2xl" alt="BlueCAP Logo - A Symbol of Trust and Creativity"/>
        </div>
      </Slide>
    </div>
  )
}

export default About
