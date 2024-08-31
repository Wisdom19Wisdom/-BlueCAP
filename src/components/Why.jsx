import Blcapraise from "../image/blcapraise.jpeg"
import BlueHands from "../image/blcaplogo2.jpeg"
import BlcapRaise from "../image/blcaplogo3.jpeg"
import BlcapAngry from "../image/blcapAngry.png"
import { Fade, Slide } from "react-awesome-reveal";

const Why = () => {
  return (
    <div className="why-bluecap text-center text-text mx-5 mt-16">
      <Slide direction="right" triggerOnce delay={300}>
        <h1 className="text-3xl md:text-5xl font-extrabold">WHY <span className="text-main">$BlueCAP</span>?</h1>
      </Slide>
      <Fade direction="right" triggerOnce delay={200}>
        <p className="font-semibold text-xl mt-3 md:mt-8 md:mx-8">
            Recently, the memecoin scene has been filled with rug pulls and projects that haven`t lived up to their promise.
        </p>
      </Fade>
      <Slide direction="left" triggerOnce delay={300}>
        <img src={BlcapAngry} className="w-52 lg:w-64 mx-auto" alt="BlueCAP Logo - A Symbol of Trust and Creativity"/>
      </Slide>
      <Fade direction="right" triggerOnce delay={200}>
        <p className="font-semibold text-xl mt-2 md:mx-8">
            <span className="font-bold"><span className="text-main">$BlueCAP</span> is here to change that trend! <br/></span>
            We want to build a future where the community actually matters and drives the project forward. 
        </p>
      </Fade>
      <Slide direction="up" triggerOnce delay={300}>
        <div className="flex justify-around mt-3">
          <img src={Blcapraise} className="w-36 md:w-52 lg:w-64 rounded-2xl" alt="BlueCAP Logo - A Symbol of Trust and Creativity"/>
          <img src={BlueHands} className=" w-36 md:w-52 lg:w-64 rounded-2xl" alt="BlueCAP Logo - A Symbol of Trust and Creativity"/>
          <img src={BlcapRaise} className="hidden md:block md:w-52 lg:w-64 rounded-2xl" alt="BlueCAP Logo - A Symbol of Trust and Creativity"/>
        </div>
      </Slide>
    </div>
  )
}

export default Why
