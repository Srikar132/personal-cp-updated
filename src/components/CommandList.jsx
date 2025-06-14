const CommandList = () => (
    <div>
      <div className="flex items-center justify-between">
        <p>about</p>
        <p className="text-[20px]">About me</p>
      </div>
      <div className="flex items-center justify-between">
        <p>education</p>
        <p className="text-[20px]">My Education</p>
      </div>
      <div className="flex items-center justify-between">
        <p>skills</p>
        <p className="text-[20px]">My Skills</p>
      </div>
      <div className="flex items-center justify-between">
        <p>projects</p>
        <p className="text-[20px]">My Projects</p>
      </div>
      <div className="flex items-center justify-between">
        <p>contact</p>
        <p className="text-[20px]">Contact Me</p>
      </div>
      <div className="flex items-center justify-between">
        <p>clear</p>
        <p className="text-[20px]">Clear terminal</p>
      </div>
      <div className="flex items-center mt-[10px] text-1xl">
        <p>
          Type one of the above commands to view. For eg.{" "}
          <span className="text-blue-400">about</span>
        </p>
      </div>
    </div>
  );

  
  export default CommandList;