import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiExpress, SiTailwindcss, SiFlask, SiDjango, SiPython } from "react-icons/si";
import { DiRedis, DiJavascript1 } from "react-icons/di";
import { FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const techStack = [
  { icon: <RiReactjsLine className="text-6xl text-blue-500" />, name: "React.js" },
  { icon: <TbBrandNextjs className="text-6xl text-white" />, name: "Next.js" },
  { icon: <SiMongodb className="text-6xl text-green-500" />, name: "MongoDB" },
  { icon: <SiExpress className="text-6xl text-gray-400" />, name: "Express.js" },
  { icon: <FaNodeJs className="text-6xl text-green-600" />, name: "Node.js" },
  { icon: <SiFlask className="text-6xl text-white" />, name: "Flask" },
  { icon: <SiDjango className="text-6xl text-green-600" />, name: "Django" },
  { icon: <SiPython className="text-6xl text-yellow-400" />, name: "Python" },
  { icon: <DiJavascript1 className="text-6xl text-yellow-500" />, name: "JavaScript" },
  { icon: <BiLogoPostgresql className="text-6xl text-blue-700" />, name: "PostgreSQL" },
  { icon: <DiRedis className="text-6xl text-red-500" />, name: "Redis" },
  { icon: <FaDocker className="text-6xl text-blue-400" />, name: "Docker" },
  { icon: <FaGitAlt className="text-6xl text-orange-500" />, name: "Git" },
  { icon: <SiTailwindcss className="text-6xl text-teal-400" />, name: "Tailwind CSS" },
];

const Technologies = () => {
  return (
    <section id="technologies" className="border-b border-neutral-800 pb-24 px-6 lg:px-20">
      <h1 className="my-20 text-center text-5xl font-bold text-white">Technologies & Skills</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center space-y-4 p-6 rounded-xl border-4 border-neutral-800 shadow-md transition-transform duration-300 hover:scale-110 hover:border-blue-500"
          >
            {tech.icon}
            <p className="text-white text-lg font-semibold opacity-90 group-hover:opacity-100">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
