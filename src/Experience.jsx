import {EXPERIENCES} from "./constants"
import { motion } from "framer-motion"

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">Expereince</h2>
        <div>
            {EXPERIENCES.map((experience, index) =>(
                
                <div key={index} className="flex flex-wrap mb-8 lg:justify-center">
                    <motion.div 
                        initial={{x:-100,opacity:0}}
                        whileInView={{x:100,opacity:1}}
                        transition={{duration:0.5,delay:0.3}}
                        className="w-full lg:w-1/4">
                        <p className="mb-2 text-neutral-400">
                            {experience.year}
                        </p>
                    </motion.div >
                    <motion.div 
                        initial={{x:100,opacity:0}}
                        whileInView={{x:0,opacity:1}}
                        transition={{duration:0.5,delay:0.3}}
                        className="w-full max-w-xl lg:w-3/4">
                        <h6  className="mb-2 font-semibold">
                            {experience.role} -{" "}
                            <span className="text-sm text-purple-100">
                                {experience.company}
                            </span> 
                        </h6>                
                        <p className="mb-4 text-neutral-400">
                            {experience.description}
                        </p>
                        {experience.technologies.map((tech, index) => (
                            <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 text-purple-800 p-2 ">{tech}</span>
                        ))}
                    </motion.div>
                </div>
                
            ))}
        </div>
    </div>
  )
}

export default Experience