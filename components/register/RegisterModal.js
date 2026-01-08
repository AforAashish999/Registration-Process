import Image from "next/image"
import StepOne from "./steps/StepOne";

export default function RegisterModal() {
  return (
    <div className=' fixed inset-0 min-h-screen flex items-center justify-center w-full z-500 backdrop-blur-sm bg-black/30 '>
        <div className='w-3/5 h-4/5 bg-white rounded-lg shadow-2xl ' >
          {/* logo */}
          <div className="flex justify-center ">
            <div className='h-16 w-36 relative '>
            <Image
            src="/images/logo.png"
            alt='Logo'
            fill
            />
            </div>
          </div>

          <StepOne />
        </div>
    </div>
  )
}
