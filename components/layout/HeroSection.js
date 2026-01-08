import Image from "next/image"

export default function HeroSection() {
  return (
    <div className=' min-h-screen w-full '>
      <div className="relative h-screen w-full ">
        <Image
          src="/images/homebanner.jpg"
          alt="Hero Background"
          fill
          />
      <div className="absolute h-full w-full bg-blue-700/40"></div>
      </div>

      
    </div>
  )
}
