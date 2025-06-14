import ReactTypingEffect from "react-typing-effect";
import { projects } from "../constants";

const ProjectsSection = () => (
    <div className="space-y-5">

      {projects.map((project , i) => (
        <div className="w-full space-y-3" key={i}>
          <h1 className="text-xl text-purple-200">{project.name}</h1>
          <p>{project.description}</p>

          <div className="flex gap-5">
            <a href={project.liveLink} target="_blank">live</a>
            <a href={project.gitLink} target="_blank">github</a>
          </div>
        </div>
      ))}
      
    </div>
  );

  export default ProjectsSection