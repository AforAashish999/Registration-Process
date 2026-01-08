import { useState } from 'react';
import StepTwo from './StepTwo';
import { FaArrowRight } from "react-icons/fa6";
import { useRef } from 'react';


export default function StepOne() {
    const mainRef = useRef(null);
    const [nextStep, setNextStep] = useState(false);
    return (
        <div 
        ref={mainRef}
        className='flex flex-col  '>
            {/* heading */}
            <h2 className="text-2xl font-semibold text-gray-700 text-center">
                Student Basic Information
            </h2>

            {/* Student formm fields */}
            <form className='p-9 space-y-6'>

                {/* 1st Row */}
                <div className='flex gap-x-6 '>
                    <div className='flex-1 flex flex-col'>
                        <label className='text-sm text-gray-500'> Enter full name </label>
                        <input
                            name="name"
                            type="text"
                            placeholder='Enter your full name'
                            className=" w- full border border-gray-300 rounded-sm py-1 px-2 focus:outline-none focus:border-orange-400/60 focus:border-[1.45px]  "
                        />
                    </div>

                    <div className='flex-1 flex flex-col'>
                        <label className='text-sm text-gray-500'> E-mail</label>
                        <input
                            name="email"
                            type="email"
                            placeholder='Enter your email address'
                            className="border border-gray-300 rounded-sm py-1 px-2 focus:outline-none focus:border-orange-400/60 focus:border-[1.45px]  "
                        />
                    </div>
                </div>

                {/* 2nd Row */}
                <div className='flex gap-x-6 '>
                    <div className='flex-1 flex flex-col'>
                        <label className='text-sm text-gray-500'> Phone number </label>
                        <input
                            name="phone"
                            type="tel"
                            placeholder='Enter your phone number'
                            className=" w- full border border-gray-300 rounded-sm py-1 px-2 focus:outline-none focus:border-orange-400/60 focus:border-[1.45px]  "
                        />
                    </div>

                    <div className='flex-1 flex flex-col'>
                        <label className='text-sm text-gray-500'> Date-of-birth </label>
                        <input
                            name="dob"
                            type="date"
                            placeholder='Enter your date of birth'
                            className="border border-gray-300 rounded-sm py-1 px-2 focus:outline-none focus:border-orange-400/60 focus:border-[1.45px]  "
                        />
                    </div>
                </div>

                {/* 3rd Row */}
                <div className='flex gap-x-6 '>
                    <div className='flex-1 flex flex-col'>
                        <label className='text-sm text-gray-500'> Select your gender   </label>
                        <select className="border text-gray-500 border-gray-300 rounded-sm py-1.5 px-2 focus:outline-none focus:border-orange-400/60 focus:border-[1.45px] " >
                            <option value="">Select your gender</option>
                            <option value="male"> Male </option>
                            <option value="female">female</option>
                        </select>
                    </div>
                    <div className='flex-1 flex flex-col'>
                        <label className='text-sm text-gray-500'> Address </label>
                        <input
                            name="address"
                            type="text"
                            placeholder='Enter your address'
                            className="border border-gray-300 rounded-sm py-1 px-2 focus:outline-none focus:border-orange-400/60 focus:border-[1.45px]  "
                        />
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                    onClick={()=>setNextStep(!nextStep)}
                        className="flex items-center gap-x-1 font-semibold bg-blue-600 cursor-pointer px-4 py-3 rounded-lg text-white text-sm transition-all duration-150 ease-in
                                         hover:-translate-y-0.5 hover:scale-102 hover:bg-blue-700 hover:shadow-blue-500/50 hover:shadow-lg"
                    >
                        <p>Next</p>
                        <FaArrowRight className="text-white font- bold text-base " />
                    </button>
                </div>

            </form>

            {
                nextStep && (
                    <StepTwo />
                )
            }
        </div>
    )
}
