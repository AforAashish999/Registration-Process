import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export default function StepFour({ setCurrentStep }) {
    // const [nextStep, setNextStep] = useState(false);
    return (
        <div className='flex flex-col  '>
            {/* heading */}
            <h2 className="text-2xl font-semibold text-gray-700 text-center">
                Emergency Contact Information
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
                            placeholder="Enter the person's full name"
                            className=" w- full border border-gray-300 rounded-sm py-1 px-2 focus:outline-none focus:border-orange-400/60 focus:border-[1.45px]  "
                        />
                    </div> 

                    <div className='flex-1 flex flex-col'>
                        <label className='text-sm text-gray-500'> Relation</label>
                        <input
                            name="relation"
                            type="text"
                            placeholder='Enter your relation with this person '
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
                            placeholder='Enter his/her phone number'
                            className=" w- full border border-gray-300 rounded-sm py-1 px-2 focus:outline-none focus:border-orange-400/60 focus:border-[1.45px]  "
                        />
                    </div>

                    <div className='flex-1 flex flex-col'>
                        <label className='text-sm text-gray-500'> Address </label>
                        <input
                            name="address"
                            type="text"
                            placeholder='Enter his/her address'
                            className=" w- full border border-gray-300 rounded-sm py-1 px-2 focus:outline-none focus:border-orange-400/60 focus:border-[1.45px]  "
                        />
                    </div>
                </div>

                {/* 3rd Row */}
                <div className='flex gap-x-6 '>
                    <div className='flex-1 flex flex-col'>
                        <label className='text-sm text-gray-500'> Profession </label>
                        <input
                            name="profession"
                            type="text"
                            placeholder='Enter his/her profession'
                            className=" w- full border border-gray-300 rounded-sm py-1 px-2 focus:outline-none focus:border-orange-400/60 focus:border-[1.45px]  "
                        />
                    </div>

                    <div className='flex-1 flex flex-col'>
                        <label className='text-sm text-gray-500'> Secondary Phone number </label>
                        <input
                            name="secondaryPhone"
                            type="tel"
                            placeholder='Enter his/her secondary phone number'
                            className=" w- full border border-gray-300 rounded-sm py-1 px-2 focus:outline-none focus:border-orange-400/60 focus:border-[1.45px]  "
                        />
                    </div>
                </div>

                <div className="flex justify-between">
                    <button
                        onClick={() => setCurrentStep(3)}
                        className="flex items-center gap-x-1 font-semibold bg-blue-600 cursor-pointer px-5 py-3 rounded-lg text-white text-sm transition-all duration-150 ease-in
                                                        hover:-translate-y-0.5 hover:scale-102 hover:bg-blue-700 hover:shadow-blue-500/50 hover:shadow-lg"
                    >
                        <FaArrowLeft className="text-white font- bold text-base " />
                        <p>Previous</p>
                    </button>

                    <button
                        // onClick={() => setCurrentStep(4)}
                        className="flex items-center gap-x-1 font-semibold bg-orange-400 cursor-pointer px-6 py-3 rounded-lg text-white text-sm transition-all duration-150 ease-in
                                                        hover:-translate-y-0.5 hover:scale-102 hover:bg-orange-500 hover:shadow-orange-500/50 hover:shadow-lg"
                    >
                        <p>Submit</p>
                        <FaArrowRight className="text-white font- bold text-base " />
                    </button>
                </div>
            </form>
        </div>
    )
}
