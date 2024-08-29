import { FaLock } from "react-icons/fa"
import { FaArrowTrendUp, FaBuildingColumns, FaBuildingLock, FaCoins, FaMoneyCheckDollar, FaRotate, FaUsers } from "react-icons/fa6"
import Token from "../image/blcap6.jpeg"
import { Fade, Slide } from "react-awesome-reveal";

const Info = () => {
  return (
    <div className="info w-full text-center h-auto p-10 text-text mt-16 bg-[#47a9ee] justify-center items-center">
      <Fade direction="up" triggerOnce delay={200}>
        <p className="text-3xl md:text-5xl font-extrabold flex justify-center underline">TOKENOMICS <FaBuildingColumns className="mx-1"/></p>
      </Fade>
      <Slide direction="right" triggerOnce delay={300}>
        <div>
          <p className="text-text justify-center flex pt-10 text-3xl font-semibold">1,000,000,000 <FaCoins className="mx-1 mt-1"/></p>
          <span className="text-xl font-semibold">Initial Supply</span>
        </div> 
        <div>
          <p className="text-text justify-center flex pt-3 text-2xl font-semibold">Zero Tax <FaMoneyCheckDollar className="mx-1 mt-1"/></p>
        </div> 
      </Slide>

      <Fade direction="down" triggerOnce delay={200}>
        <div className="flex justify-between pt-10">
          <div>
              <p className="text-text font-bold justify-center flex text-sm md:text-2xl md:font-semibold">85% Liquidity <br className="lg:hidden"/> Listing <FaLock className="mx-1 mt-1"/></p>
          </div>
          <div>
            <p className="text-text font-bold justify-center flex text-sm md:text-2xl md:font-semibold">10% Marketing <br className="lg:hidden"/> & Development  <FaArrowTrendUp className="mx-1 mt-1"/></p>
          </div>
        </div>
      </Fade>
      <Slide direction="up" triggerOnce delay={300}>
        <div className="flex justify-center">
          <img src={Token} className="rounded-full w-52 md:w-72 lg:w-96" />
        </div>
      </Slide>
      <Fade direction="up" triggerOnce delay={200}>
        <div className="flex justify-between">
          <div>
              <p className="text-text font-bold justify-center flex text-sm md:text-2xl md:font-semibold">3% CEX Liquidity <br className="lg:hidden"/>  <FaBuildingLock className="mx-1 mt-1"/></p>
          </div>
          <div>
              <p className="text-text font-bold justify-center flex text-sm md:text-2xl md:font-semibold">2% Dev/Team <br className="lg:hidden"/>  <FaUsers className="mx-1 mt-1"/></p>
          </div>
        </div>
      </Fade>
      
      <Slide direction="right" triggerOnce delay={300}>
        <div>
          <p className="text-text justify-center flex pt-5 text-3xl font-semibold">850,000,000 <FaRotate className="mx-1 mt-1"/></p>
          <span className="text-xl font-semibold">Circulating Supply</span>
        </div>
      </Slide>

    </div>
  )
}

export default Info
