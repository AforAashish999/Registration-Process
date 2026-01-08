import { FaArrowRight } from "react-icons/fa6";
import { useForm } from "react-hook-form";


export default function StepOne({setCurrentStep}) {
const {register, handleSubmit, formState: {errors}, reset } = useForm();
const onSubmit = () => {
    setCurrentStep(2);
}
    return (
        <div className='flex flex-col  '>
            {/* heading */}
            <h2 className="text-2xl font-semibold text-gray-700 text-center">
                Student Basic Information
            </h2>

            {/* Student formm fields */}
            <form
            onSubmit={handleSubmit(onSubmit)}
             className='p-9 space-y-6'>

                {/* 1st Row */}
                <div className='flex gap-x-6 '>
                    <div className='flex-1 flex flex-col'>
                        <label className='text-sm text-gray-500'> Enter full name </label>
                        <input
                            name="name"
                            type="text"
                            placeholder='Enter your full name'
                            className=" w- full border border-gray-300 rounded-sm py-1 px-2 focus:outline-none focus:border-orange-400/60 focus:border-[1.45px]"
                            {...register("name", {
                                required: "Please fill your name"
                            })}
                        />
                        {
                            errors.name && (
                                <p className="text-[10px] text-red-500" > {errors.name.message} </p>
                            )
                        }
                    </div>

                    <div className='flex-1 flex flex-col'>
                        <label className='text-sm text-gray-500'> E-mail</label>
                        <input
                            name="email"
                            type="email"
                            placeholder='Enter your email address'
                            className="border border-gray-300 rounded-sm py-1 px-2 focus:outline-none focus:border-orange-400/60 focus:border-[1.45px]"
                            {...register("email", {
                                required: "Please enter valid email"
                            })}
                        />
                        {
                            errors.email && (
                                <p className="text-[10px] text-red-500"> {errors.email.message} </p>
                            )
                        }
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
                            className=" w- full border border-gray-300 rounded-sm py-1 px-2 focus:outline-none focus:border-orange-400/60 focus:border-[1.45px]"
                            {...register("phone", {
                                required: "Please fill your phone number",
                                minLength: {
                                    value: 10,
                                    message: "Phone number should be at-least 10 digit"
                                }
                            })}
                        />
                        {
                            errors.phone && (
                                <p className="text-[10px] text-red-500">  {errors.phone.message} </p>
                            )
                        }
                    </div>

                    <div className='flex-1 flex flex-col'>
                        <label className='text-sm text-gray-500'> Date-of-birth </label>
                        <input
                            name="dob"
                            type="date"
                            placeholder='Enter your date of birth'
                            className="border border-gray-300 rounded-sm py-1 px-2 focus:outline-none focus:border-orange-400/60 focus:border-[1.45px]  "
                            {...register("dob", {
                                required: "Please enter your date of birth"
                            })}
                        />
                        {
                            errors.dob && (
                                  <p className="text-[10px] text-red-500">  {errors.dob.message} </p>
                            )
                        }
                    </div>
                </div>

                {/* 3rd Row */}
                <div className='flex gap-x-6 '>
                    <div className='flex-1 flex flex-col'>
                        <label className='text-sm text-gray-500'> Select your gender   </label>
                        <select
                         className="border text-gray-500 border-gray-300 rounded-sm py-1.5 px-2 focus:outline-none focus:border-orange-400/60 focus:border-[1.45px] "
                         {...register("gender", {
                            required: "Please select your gender",
                            validate: (value) => value !== "default" || "Please select an valid gender"
                         })}
                         >
                            <option className='text-orange-400' value="default">Select your gender</option>
                            <option className='text-orange-400' value="male"> Male </option>
                            <option value="female">female</option>
                        </select>
                        {
                            errors.gender && (
                                <p className="text-[10px] text-red-500 "> {errors.gender.message} </p>
                            )
                        }
                    </div>
                    <div className='flex-1 flex flex-col'>
                        <label className='text-sm text-gray-500'> Address </label>
                        <input
                            name="address"
                            type="text"
                            placeholder='Enter your address'
                            className="border border-gray-300 rounded-sm py-1 px-2 focus:outline-none focus:border-orange-400/60 focus:border-[1.45px]"
                            {...register("address", {
                                required: "Please fill your address"
                            })}
                        />
                        {
                            errors.address && (
                                  <p className="text-[10px] text-red-500">  {errors.address.message} </p>
                            )
                        }
                    </div>
                </div>

                        {/* Button */}
                <div className="flex justify-end">
                    <button
                    type="sumbit"
                    // onClick={()=>setCurrentStep(2)}
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
