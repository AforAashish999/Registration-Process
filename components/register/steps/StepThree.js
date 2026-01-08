import { useForm } from 'react-hook-form'
import { FaArrowLeft } from 'react-icons/fa6'
import { FaArrowRight } from 'react-icons/fa6'

export default function StepThree({setCurrentStep}) {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const onSubmit = (data) => {
    setCurrentStep(4)
  }
  return (
    <div className='flex flex-col  '>
      {/* heading */}
      <h2 className='text-2xl font-semibold text-gray-700 text-center'>
        Student Parent's Information
      </h2>

      {/* Student form fields */}
      <form
      onSubmit={handleSubmit(onSubmit)}
      className='p-9 space-y-6'>
        {/* 1st Row */}
        <div className='flex gap-x-6 '>
          <div className='flex-1 flex flex-col'>
            <label className='text-sm text-gray-500'> Father's Name </label>
            <input
              name='fatherName'
              type='text'
              placeholder="Enter your father's full name"
              className=' w- full border border-gray-300 rounded-sm py-1 px-2 focus:outline-none focus:border-orange-400/60 focus:border-[1.45px]  '
              {...register("fatherName", {
                required: "Please fill your father name"
              })}
            />
            {
              errors.fatherName && (
                <p className='text-[10px] text-red-500 ' > {errors.fatherName.message} </p>
              )
            }
          </div>

          <div className='flex-1 flex flex-col'>
            <label className='text-sm text-gray-500'> Phone Number</label>
            <input
              name='fatherPhone'
              type='tel'
              placeholder='Enter your father phone number'
              className='border border-gray-300 rounded-sm py-1 px-2 focus:outline-none focus:border-orange-400/60 focus:border-[1.45px]  '
              {...register("fatherPhone", {
                required: "Please fill your father phone number"
              })}
            />
              {
              errors.fatherPhone && (
                <p className='text-[10px] text-red-500 ' > {errors.fatherPhone.message} </p>
              )
            }
          </div>
        </div>

        {/* 2nd Row */}
        <div className='flex gap-x-6 '>
        <div className='flex-1 flex flex-col'>
            <label className='text-sm text-gray-500'> Mother's Name </label>
            <input
              name='motherName'
              type='text'
              placeholder="Enter your mother's full name"
              className=' w- full border border-gray-300 rounded-sm py-1 px-2 focus:outline-none focus:border-orange-400/60 focus:border-[1.45px]'
               {...register("motherName", {
                required: "Please fill your mother name "
              })}
            />
               {
              errors.motherName && (
                <p className='text-[10px] text-red-500 ' > {errors.motherName.message} </p>
              )
            }
          </div>

          <div className='flex-1 flex flex-col'>
            <label className='text-sm text-gray-500'> Phone Number</label>
            <input
              name='motherPhone'
              type='tel'
              placeholder='Enter your mother phone number'
              className='border border-gray-300 rounded-sm py-1 px-2 focus:outline-none focus:border-orange-400/60 focus:border-[1.45px]  '
           {...register("motherPhone", {
                required: "Please fill your mother phone number",
                minLength: {
                  value: 10,
                  message: "Phone number should be at-lest 10 digit"
                }
              })}
            />
              {
              errors.motherPhone && (
                <p className='text-[10px] text-red-500 ' > {errors.motherPhone.message} </p>
              )
            }
          </div>
        </div>

        {/* 3rd Row */}
        <div className='flex gap-x-6 '>
          <div className='flex-1 flex flex-col'>
            <label className='text-sm text-gray-500'> Father's Profession </label>
            <input
              name='fatherProfession'
              type='text'
              placeholder="Enter your father's profession"
              className=' w- full border border-gray-300 rounded-sm py-1 px-2 focus:outline-none focus:border-orange-400/60 focus:border-[1.45px]  '
               {...register("fatherProfession", {
                required: "Please fill your father profession"
              })}
            />
              {
              errors.fatherProfession && (
                <p className='text-[10px] text-red-500 ' > {errors.fatherProfession.message} </p>
              )
            }
          </div>

          <div className='flex-1 flex flex-col'>
            <label className='text-sm text-gray-500'> Mother's Profession </label>
            <input
              name='motherProfession'
              type='text'
              placeholder="Enter your mother's profession"
              className='border border-gray-300 rounded-sm py-1 px-2 focus:outline-none focus:border-orange-400/60 focus:border-[1.45px]  '
               {...register("motherProfession", {
                required: "Please fill yourmother profession"
              })}
            />
              {
              errors.motherProfession && (
                <p className='text-[10px] text-red-500 ' > {errors.motherProfession.message} </p>
              )
            }
          </div>
        </div>

        <div className='flex justify-between'>
          <button
            onClick={() => setCurrentStep(2)}
            className='flex items-center gap-x-1 font-semibold bg-blue-600 cursor-pointer px-5 py-3 rounded-lg text-white text-sm transition-all duration-150 ease-in
                                                                     hover:-translate-y-0.5 hover:scale-102 hover:bg-blue-700 hover:shadow-blue-500/50 hover:shadow-lg'
          >
            <FaArrowLeft className='text-white font- bold text-base ' />
            <p>Previous</p>
          </button>

          <button
          type="submit"
            // onClick={() => setCurrentStep(4)}
            className='flex items-center gap-x-1 font-semibold bg-blue-600 cursor-pointer px-8 py-3 rounded-lg text-white text-sm transition-all duration-150 ease-in
                                                                     hover:-translate-y-0.5 hover:scale-102 hover:bg-blue-700 hover:shadow-blue-500/50 hover:shadow-lg'
          >
            <p>Next</p>
            <FaArrowRight className='text-white font- bold text-base ' />
          </button>
        </div>
      </form>
    </div>
  )
}
