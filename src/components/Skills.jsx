import { skills } from "../constants";

const Skills = () => {




    return (
      <div className="flex gap-2 flex-wrap">
        {skills.map((skill, index) => (
          <div key={index} className="flex border-[1px] p-1 items-center gap-2">
            <img
              src={skill.imageUrl}
              className="w-5 h-5"
            />
           {skill.name}
          </div>
        ))}
      </div>
    );
  };

  export default Skills;