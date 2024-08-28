import Blcap from "../image/blcapmainlogo2.jpeg"
import Bluecap from "../image/bluecaplogo2.jpeg"
import BlueHat from "../image/blcaplogo1.jpeg"
import { Fade, Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="about text-center text-text mx-5 mt-16">
      <Fade direction="up" triggerOnce delay={200}>
        <p className="text-3xl md:text-5xl font-extrabold">WELCOME TO <span className="text-main">$BlueCAP</span></p>
      </Fade>
      <Fade direction="up" triggerOnce delay={200}>
        <p className="font-semibold text-xl mt-3 md:mt-8 md:mx-8">
          The name <span className="text-main">$BlueCAP</span> was chosen because it`s simple, memorable, and symbolizes the core values we want to represent—trust, 
          loyalty, and creativity. The “<span className="text-main">blue cap</span>” is a playful symbol of reliability and community spirit. Just like how a cap is 
          something you wear with pride, <span className="text-main">$BlueCAP</span> is about building a project that our community can be proud to be a part of.🐶🧢
        </p>
      </Fade>
      <Fade direction="up" triggerOnce delay={200}>
        <p className="font-semibold text-xl mt-4 md:mt-8 md:mx-8">
          We chose a dog as our mascot because dogs are universally seen as loyal, friendly, and reliable—traits we want to reflect 
          in our project and community. The blue cap adds a unique, recognizable touch, representing creativity and the idea of 
          building something cool and approachable. The combination of the dog and the blue cap creates a character that`s both 
          fun and easy to rally around, making it perfect for a project focused on community and inclusivity.
        </p>
      </Fade>
      <Slide direction="up" triggerOnce delay={200}>
        <div className="flex justify-around mt-3">
          <img src={Bluecap} className="w-36 md:w-52 lg:w-64 rounded-2xl" />
          <img src={BlueHat} className="hidden md:block md:w-52 lg:w-64 rounded-2xl" />
          <img src={Blcap} className="w-36 md:w-52 lg:w-64 rounded-2xl" />
        </div>
      </Slide>
    </div>
  )
}

export default About
