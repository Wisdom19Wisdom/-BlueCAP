import chart from "../image/Trendlines.png"

const Chart = () => {
  return (
    <div className="chart relative h-96 text-center text-text">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${chart})`, opacity: 0.3 }} // Adjust opacity here
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#accefa] via-transparent to-black opacity-40"></div> {/* Optional: Gradient overlay */}
      </div>

        <p className="text-3xl md:text-5xl font-extrabold pt-7">LIVE CHART📈</p>
      <div className="relative z-5 flex flex-col items-center justify-center h-full text-center text-text">
        <div className="flex items-center text-3xl font-bold mt-4">
          <p>Coming soon... </p>
          <span className="animate-spin-pulse">⌛</span>
        </div>
      </div>
    </div>
  )
}

export default Chart
