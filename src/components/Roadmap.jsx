import Roadmapimg from "../image/blcap7.jpeg"
import Roadimg from "../image/bluecaplogo2.jpeg"
import Road from "../image/blcap6.jpeg"
import { Fade, Slide } from "react-awesome-reveal";

const Roadmap = () => {
  return (
    <div className="roadmap-bluecap p-6 text-text">
      <Fade direction="up" triggerOnce delay={200}>
        <h1 className="text-4xl text-center font-bold mb-4">Roadmap</h1>
      </Fade>
      <div className="lg:flex lg:justify-around">
        <div className="relative pl-10">
            <div className="absolute top-0 left-4 w-[2px] bg-gray-600 h-full"></div>

            {/* Phase 1 */}
            <Slide direction="left" triggerOnce delay={300}>
              <div className="relative mb-12 font-semibold text-xl">
              <div className="absolute top-0 left-[-4px] w-[2px] h-6 bg-gray-600"></div>
              <div className="absolute top-4 left-[-6px] w-6 h-[2px] bg-gray-600"></div>
              <div className="pl-8">
                  <div className="text-2xl font-bold mb-2">PHASE 1: Foundation</div>
                  <ul className="list-disc pl-6 space-y-1">
                  <li>Recruit / hire team</li>
                  <li>Full Website launch</li>
                  <li>Expand TG group to 500+ members</li>
                  <li>Community events (giveaways, meme-contests)</li>
                  </ul>
              </div>
              </div>
            </Slide>

            {/* Phase 2 */}
            <Slide direction="left" triggerOnce delay={300}>
              <div className="relative mb-12 font-semibold text-xl">
              <div className="absolute top-0 left-[-4px] w-[2px] h-6 bg-gray-600"></div>
              <div className="absolute top-4 left-[-6px] w-6 h-[2px] bg-gray-600"></div>
              <div className="pl-8">
                  <div className="text-2xl font-bold mb-2">PHASE 2: Expansion</div>
                  <ul className="list-disc pl-6 space-y-1">
                  <li>Launch <span className="text-main">$BlueCAP</span> on DEX</li>
                  <li>CoinGecko listing</li>
                  <li>Marketing campaigns with influencers</li>
                  <li>Reach $1,000,000 market cap</li>
                  <li>Launch staking/rewards system</li>
                  </ul>
              </div>
              </div>
            </Slide>

            {/* Phase 3 */}
            <Slide direction="left" triggerOnce delay={300}>
              <div className="relative mb-12 font-semibold text-xl">
              <div className="absolute top-0 left-[-4px] w-[2px] h-6 bg-gray-600"></div>
              <div className="absolute top-4 left-[-6px] w-6 h-[2px] bg-gray-600"></div>
              <div className="pl-8">
                  <div className="text-2xl font-bold mb-2">PHASE 3: Growth</div>
                  <ul className="list-disc pl-6 space-y-1">
                  <li>Launch on additional DEXs/CEXs</li>
                  <li>Secure strategic partnerships</li>
                  <li>Integrate with Solana ecosystem projects</li>
                  <li>Reach $5,000,000 market cap</li>
                  </ul>
              </div>
              </div>
            </Slide>

            {/* Phase 4 */}
            <Slide direction="left" triggerOnce delay={300}>
              <div className="relative font-semibold text-xl">
              <div className="absolute top-0 left-[-4px] w-[2px] h-6 bg-gray-600"></div>
              <div className="absolute top-4 left-[-6px] w-6 h-[2px] bg-gray-600"></div>
              <div className="pl-8">
                  <div className="text-2xl font-bold mb-2">PHASE 4: Mainstream Adoption</div>
                  <ul className="list-disc pl-6 space-y-1">
                  <li>Major exchange listings (CEXs)</li>
                  <li>Begin development of utility features</li>
                  <li>Begin charity initiatives or sponsorships</li>
                  <li>Roadmap for 2026 revealed</li>
                  </ul>
              </div>
              </div>
            </Slide>
        </div>
        <div className="hidden lg:block">
          <Slide direction="right" triggerOnce delay={300}><img src={Roadmapimg} className="w-64 h-64 rounded-xl my-2" alt="BlueCAP Logo - A Symbol of Trust and Creativity"/></Slide>
          <Slide direction="right" triggerOnce delay={300}><img src={Roadimg} className="w-64 h-64 rounded-xl my-2" alt="BlueCAP Logo - A Symbol of Trust and Creativity"/></Slide>
          <Slide direction="right" triggerOnce delay={300}><img src={Road} className="w-64 h-64 rounded-xl my-2" alt="BlueCAP Logo - A Symbol of Trust and Creativity"/></Slide>
        </div>
      </div>
    </div>
  )
}

export default Roadmap
