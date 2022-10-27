import React from 'react'
import { motion } from 'framer-motion';
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    experience: Experience;
}

export const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] h-[600px] md:w-[600px] snap-center bg-[#292929]
                        p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img
        initial={{
            y: -100,
            opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-lg xl:w-[200px] xl:h-[200px] object-center bg-white p-5"
        src={urlFor(experience?.companyImage).url()}
        alt=""
        />

        <div className="px-0 md:px-10">
            <h4 className="text-2xl font-light text-center pb-2">{experience.jobTitle}</h4>
            <p className="font-bold text-2xl mt-1">{experience.company}</p>
            <div className="flex space-x-2 my-2">
                {experience.technologies?.map(technology => (
                    <img
                        key={technology._id}
                        className="h-10 w-10 rounded-full"
                        src={urlFor(technology.skillImage).url()}
                    />
                ))}
            </div>
            <p className="uppercase py-5 text-gray-500">
                {new Date(experience.dateStarted).toLocaleDateString('en-us', { year:"numeric", month:"long"})} - {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toLocaleDateString('en-us', { year:"numeric", month:"long"})}
            </p>

            <ul className="list-disc space-y-4 ml-5 text-sm h-80">
                {experience.points?.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </div>
    </article>
  )
}
