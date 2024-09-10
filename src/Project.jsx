import {PROJECTS} from "./constants"
import { motion } from "framer-motion"

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">Projects</h2>
            <div>
                {PROJECTS.map((project, index) =>(
                    
                    <div key={index} className="flex flex-wrap mb-8 lg:justify-center">
                        <motion.div  
                            initial={{x:-100,opacity:0}}
                            whileInView={{x:100,opacity:1}}
                            transition={{duration:0.5,delay:0.3}}
                            className="w-full lg:w-1/4 mb-2 ">
                            <span className="mb-2">
                                <img src={project.image} alt={project.title} className="w-1/2 lg:align-middle"></img>
                            </span>
                        </motion.div >
                        <motion.div                         
                        initial={{x:100,opacity:0}}
                        whileInView={{x:0,opacity:1}}
                        transition={{duration:0.5,delay:0.3}}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6  className="mb-2 font-semibold">
                                {project.title}
                                <span className="text-sm text-purple-100">
                                    {project.company}
                                </span> 
                            </h6>                
                            <p className="mb-4 text-neutral-400">
                                {project.description}
                            </p>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 text-purple-800 p-2 ">
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                    
                ))}
            </div>
        </div>
      )
}

export default Projects