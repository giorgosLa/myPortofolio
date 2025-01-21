import { EXPERIENCES } from "../assets/constants";
import { motion } from "framer-motion";

function Experience() {
  return (
    <div className="pb-4">
      <h3 className="my-14 text-4xl text-center">Experience</h3>
      <div>
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="mb-4 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-stone-200">{exp.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4 "
            >
              <h3 className="text-2xl">
                {exp.role} -{" "}
                <span className="text-stone-400 text-sm mb-4">
                  {exp.company}
                </span>
              </h3>
              <p className="text-stone-400 mb-4 mt-4">{exp.description}</p>
              {exp.technologies?.map((tech, index) => (
                <span
                  className=" mr-2 mt-4 rounded bg-stone-900 text-stone-300 py-1 px-2 font-medium text-sm"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
