import { Fade } from "react-awesome-reveal";

const Legal = () => {
  return (
    <div className="p-6 md:p-12 lg:p-24 text-text text-center">
      <Fade direction="up" triggerOnce delay={200}>
        <h1 className="text-xl g:text-2xl font-bold mb-4">LEGAL DISCLAIMER <span className="text-main">$BlueCAP</span></h1>
        <p className="mb-4"><span className="text-main">$BlueCAP</span> operates as a decentralized cryptocurrency.
          By engaging in the trading of <span className="text-main">$BlueCAP</span> tokens, you acknowledge and agree that:
        </p>
        <div className="text-sm md:text-base lg:text-lg flex flex-col lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mb-4 lg:mb-0">
            <h2 className="font-semibold mb-1">SPECULATIVE NATURE</h2>
            <p>
              Trading <span className="text-main">$BlueCAP</span> tokens involves considerable risk and is purely speculative. Cryptocurrency prices, including <span className="text-main">$BlueCAP</span>, can be highly volatile and may lead to substantial losses. BlueCap does not provide any guarantees or promises concerning potential gains or losses from trading <span className="text-main">$BlueCAP</span> tokens.
            </p>
          </div>
          <div className="mb-4 lg:mb-0">
            <h2 className="font-semibold mb-1">INDEPENDENT DECISION</h2>
            <p>
              You understand that you`re trading <span className="text-main">$BlueCAP</span> tokens at your own discretion and risk. <span className="text-main">$BlueCAP</span> won`t be held responsible for any losses, damages, or consequences resulting from your trading activities. It`s essential to be aware of the risks involved in cryptocurrency trading.
            </p>
          </div>
          <div className="mb-4 lg:mb-0">
            <h2 className="font-semibold mb-1">REGULATORY COMPLIANCE</h2>
            <p>
              It`s crucial to make sure you comply with any relevant laws, regulations, or restrictions concerning cryptocurrency trading in your area. Stay informed about the legal aspects to ensure a smooth trading experience.
            </p>
          </div>
          <div className="mb-4 lg:mb-0">
            <h2 className="font-semibold mb-1">NO FINANCIAL ADVICE</h2>
            <p>
              The details shared by <span className="text-main">$BlueCAP</span>, such as whitepapers and websites, and communication channels are for informational purposes only. Remember, it`s not financial, investment, or legal advice. Stay informed and make decisions wisely!
            </p>
          </div>
          <div className="mb-4 lg:mb-0 lg:col-span-2">
            <h2 className="font-semibold mb-1">CHANGES AND UPDATES</h2>
            <p>
              <span className="text-main">$BlueCAP</span> reserves the right to modify, amend, or update this disclaimer at any time without prior notice. It is your responsibility to review this disclaimer periodically for any changes. By trading <span className="text-main">$BlueCAP</span> tokens, you confirm that you have read, understood, and agreed to the terms outlined in this disclaimer. If you do not agree with any part of this disclaimer, you must refrain from trading <span className="text-main">$BlueCAP</span> tokens.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Legal
