import { EXPERIENCES } from "../constants";

function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-16 px-6 lg:px-20">
      <h1 className="text-center text-5xl font-bold mb-12 text-white">Experience</h1>
      <div className="mb-12">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:justify-center transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-lg">
            <div className="w-full lg:w-1/4 text-center lg:text-left">
              <p className="text-xl font-semibold text-purple-500">{experience.year}</p>
            </div>

            {/* Experience Details Section */}
            <div className="w-full max-w-xl lg:w-3/4 text-left">
              <h6 className="text-2xl font-semibold text-white mb-2">
                {experience.role} - <span className="text-sm text-purple-500">{experience.company}</span>
              </h6>
              <p className="mb-4 text-neutral-300">{experience.description}</p>

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-3 mt-4 mb-6">
                {experience.technologies.map((tech, index) => (
                  <span key={index} className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:bg-purple-600 transition duration-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
