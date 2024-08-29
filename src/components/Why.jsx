import Blcapraise from "../image/blcapraise.jpeg"
import BlueHands from "../image/blcaplogo2.jpeg"
import BlcapRaise from "../image/blcaplogo3.jpeg"
import BlcapAngry from "../image/blcapAngry.png"
import { Fade, Slide } from "react-awesome-reveal";

const Why = () => {
  return (
    <div className="why text-center text-text mx-5 mt-16">
      <Slide direction="right" triggerOnce delay={300}>
        <p className="text-3xl md:text-5xl font-extrabold">WHY <span className="text-main">$BlueCAP</span>?</p>
      </Slide>
      <Fade direction="right" triggerOnce delay={200}>
        <p className="font-semibold text-xl mt-3 md:mt-8 md:mx-8">
            Recently, the memecoin scene has been filled with rug pulls and projects that haven`t lived up to their promise.
        </p>
      </Fade>
      <Slide direction="left" triggerOnce delay={300}>
        <img src={BlcapAngry} className="w-52 lg:w-64 mx-auto" />
      </Slide>
      <Fade direction="right" triggerOnce delay={200}>
        <p className="font-semibold text-xl mt-2 md:mx-8">
            <span className="font-bold"><span className="text-main">$BlueCAP</span> is here to change that trend! <br/></span>
            We want to build a future where the community actually matters and drives the project forward. 
        </p>
      </Fade>
      <Slide direction="up" triggerOnce delay={300}>
        <div className="flex justify-around mt-3">
          <img src={Blcapraise} className="w-36 md:w-52 lg:w-64 rounded-2xl" />
          <img src={BlueHands} className=" w-36 md:w-52 lg:w-64 rounded-2xl" />
          <img src={BlcapRaise} className="hidden md:block md:w-52 lg:w-64 rounded-2xl" />
        </div>
      </Slide>
    </div>
  )
}

export default Why
