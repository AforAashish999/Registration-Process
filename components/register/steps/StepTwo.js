import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export default function StepTwo({ setCurrentStep }) {
    const {register, handleSubmit, formState: {errors}, reset } = useForm();
const onSubmit = (data) => {
    setCurrentStep(3);
}
    return (
        <div className='flex flex-col  '>
            {/* heading */}
            <h2 className="text-2xl font-semibold text-gray-700 text-center">
                Student Academic Information
            </h2>

            {/* Student formm fields */}
            <form
            onSubmit={handleSubmit(onSubmit)}
             className='p-9 space-y-6'>

                {/* 1st Row */}
                <div className='flex gap-x-6 '>
                    <div className='flex-1 flex flex-col'>
                        <label className='text-sm text-gray-500'> High School Name </label>
                        <input
                            name="highSchool"
                            type="text"
                            placeholder="Enter your school's name"
                            className=" w- full border border-gray-300 rounded-sm py-1 px-2 focus:outline-none focus:border-orange-400/60 focus:border-[1.45px]  "
                            {...register("highSchool", {
                                required: "Please fill your schools's name"
                            })}
                        />
                        {
                            errors.highSchool && (
                                <p className="text-[10px] text-red-500 " > {errors.highSchool.message} </p>
                            )
                        }
                    </div>

                    <div className='flex-1 flex flex-col'>
                        <label className='text-sm text-gray-500'> Year of completion </label>
                        <input
                            name="yearOfCompletion"
                            type="date"
                            placeholder='Enter your email address'
                            className="border border-gray-300 rounded-sm py-1 px-2 focus:outline-none focus:border-orange-400/60 focus:border-[1.45px]  "
                            {...register("yearOfCompletion", {
                                required: "Please fill your year of completion"
                            })}
                        />
                         {
                            errors.yearOfCompletion && (
                                <p className="text-[10px] text-red-500 " > {errors.yearOfCompletion.message} </p>
                            )
                        }
                    </div>
                </div>

                {/* 2nd Row */}
                <div className='flex gap-x-6 '>
                    <div className='flex-1 flex flex-col'>
                        <label className='text-sm text-gray-500'> Highest Qualification </label>
                        <input
                            name="qualification"
                            type="text"
                            placeholder='Enter your qualification'
                            className=" w- full border border-gray-300 rounded-sm py-1 px-2 focus:outline-none focus:border-orange-400/60 focus:border-[1.45px]  "
                            {...register("qualification", {
                                required: "Please fill your highest qualifications"
                            })}
                        />
                          {
                            errors.qualification && (
                                <p className="text-[10px] text-red-500 " > {errors.qualification.message} </p>
                            )
                        }
                    </div>

                    <div className='flex-1 flex flex-col'>
                        <label className='text-sm text-gray-500'> Current Status </label>
                        <select
                         className="border text-gray-500 border-gray-300 rounded-sm py-1.5 px-2 focus:outline-none focus:border-orange-400/60 focus:border-[1.45px]"
                         {...register("status", {
                            required: "Please select your current status",
                            validate: (value) => value !== "default" || "Please select current status"
                         })}
                         >
                            <option value="default"> Select Current status  </option>
                            <option value="student"> Student </option>
                            <option value="worker">Worker</option>
                        </select>
                          {
                            errors.status && (
                                <p className="text-[10px] text-red-500 " > {errors.status.message} </p>
                            )
                        }
                    </div>
                </div>

                {/* 3rd Row */}
                <div className='flex gap-x-6 '>
                    <div className='flex-1 flex flex-col'>
                        <label className='text-sm text-gray-500'> Grade Obtained </label>
                        <input
                            name="gradeObtained"
                            type="text"
                            placeholder='Enter your obtained grade'
                            className=" w- full border border-gray-300 rounded-sm py-1 px-2 focus:outline-none focus:border-orange-400/60 focus:border-[1.45px]  "
                            {...register("gradeObtained", {
                                required: "Please fill your grade"
                            })}
                        />
                          {
                            errors.gradeObtained && (
                                <p className="text-[10px] text-red-500 " > {errors.gradeObtained.message} </p>
                            )
                        }
                    </div>

                    <div className='flex-1 flex flex-col'>
                        <label className='text-sm text-gray-500'> Select your Preferred Courses </label>
                        <select
                         className="border text-gray-500 border-gray-300 rounded-sm py-1.5 px-2 focus:outline-none focus:border-orange-400/60 focus:border-[1.45px]"
                         {...register("course", {
                            required: "Please select your course",
                            validate: (value) => value !== "default" || "please select course"
                         })}
                         >
                            <option value="default"> Select Course of Study  </option>
                            <option value="bim"> BIM </option>
                            <option value="csit">Bsc.CSIT</option>
                            <option value="bca">BCA</option>
                        </select>
                        {
                            errors.course && (
                                <p className="text-[10px] text-red-500 " > {errors.course.message} </p>
                            )
                        }
                    </div>
                </div>

                <div className="flex justify-between">
                    <button
                    type="button"
                        onClick={() => setCurrentStep(1)}
                        className="flex items-center gap-x-1 font-semibold bg-blue-600 cursor-pointer px-5 py-3 rounded-lg text-white text-sm transition-all duration-150 ease-in
                                         hover:-translate-y-0.5 hover:scale-102 hover:bg-blue-700 hover:shadow-blue-500/50 hover:shadow-lg"
                    >
                        <FaArrowLeft className="text-white font- bold text-base " />
                        <p>Previous</p>
                    </button>

                    <button
                    type="submit"
                        // onClick={() => setCurrentStep(3)}
                        className="flex items-center gap-x-1 font-semibold bg-blue-600 cursor-pointer px-8 py-3 rounded-lg text-white text-sm transition-all duration-150 ease-in
                                         hover:-translate-y-0.5 hover:scale-102 hover:bg-blue-700 hover:shadow-blue-500/50 hover:shadow-lg"
                    >
                        <p>Next</p>
                        <FaArrowRight className="text-white font- bold text-base " />
                    </button>
                </div>
            </form>
        </div>
    )
}
