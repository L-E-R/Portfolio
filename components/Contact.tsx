import React from 'react'
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { PageInfo } from '../typings';

type Props = {
  info: PageInfo
}

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string
}

export const Contact = ({ info }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:${info.email}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  }
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F70AA8]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5">
            <PhoneIcon className="text-[#F70AA8] h-7 w-7 animate-pulse"/>
            <p className="text-2xl">{info.phoneNumber}</p>
          </div>

          <div className="flex items-center space-x-5">
            <EnvelopeIcon className="text-[#F70AA8] h-7 w-7 animate-pulse"/>
            <p className="text-2xl">{info.email}</p>
          </div>

          <div className="flex items-center space-x-5">
            <MapPinIcon className="text-[#F70AA8] h-7 w-7 animate-pulse"/>
            <p className="text-2xl">{info.address}</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
            <div className="flex space-x-2">
              <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
              <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
            </div>
            <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />
            <textarea {...register('message')} placeholder="Message" className="contactInput"></textarea>
            <button type="submit" className="bg-[#F70AA8] py-5 px-10 rounded-md text-white font-bold text-lg">Submit</button>
          </form>

        </div>
      </div>
    </motion.div>
  )
}
