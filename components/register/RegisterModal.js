import Image from "next/image"
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";

export default function RegisterModal({ closeModal }) {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className=' fixed inset-0 min-h-screen flex items-center justify-center w-full z-500 backdrop-blur-sm bg-black/30 '>
      <div className='w-3/5 min-h-4/5 bg-white rounded-lg shadow-2xl ' >
        {/* logo and cross */}
        <div className="flex mb-3">
          <div className="flex-1 flex justify-center ">
            <div className='h-16 w-36 relative '>
              <Image
                src="/images/logo.png"
                alt='Logo'
                fill
              />
            </div>
          </div>
          <button
            onClick={closeModal}
            className="pr-6">
            <RxCross2 className="text-white bg-blue-600 p-1 text-2xl font-bold cursor-pointer rounded-lg  transition-all duration-150 ease-in
                                         hover:-translate-y-0.5 hover:scale-101  hover:shadow-blue-500/50 hover:shadow-lg" />
          </button>

        </div>

        {
          currentStep === 1 ? <StepOne setCurrentStep={setCurrentStep} />
            : currentStep === 2 ? <StepTwo setCurrentStep={setCurrentStep} />
              : currentStep === 3 ? <StepThree setCurrentStep={setCurrentStep} />
                : currentStep === 4 ? <StepFour setCurrentStep={setCurrentStep} />
                  : null
        }

      </div>
    </div>
  )
}
