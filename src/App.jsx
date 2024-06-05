import React, { useEffect, useRef, useState } from "react";
import TypingEffect from "react-typing-effect";

function GetSkills({ skills }) {
  const colors = [
    "#FF5733", // Fiery Red
    "#33FF57", // Vibrant Green
    "#3357FF", // Bright Blue
    "#FF33A6", // Hot Pink
    "#33FFF5", // Aqua
    "#FF8633", // Orange
    "#8D33FF", // Purple
    "#FFD633", // Yellow
  ];

  return (
    <div>
      {skills.map((skill, index) => {
        return (
          <div key={index} className="skills-container ">
            <label>{skill.name}</label>
            <input
              type="range"
              value={skill.level}
              readOnly
              // className=" h-0.5 FFD633 rounded-lg  cursor-pointer"
              min="0"
              max="100"
              style={{
                width: "100%",
                
                borderRadius: "5px",
                outline: "none",
                opacity: "0.7",
                transition: "opacity .2s",
              }}
            />
            <div className="text-customLightGray place-self-start pl-5">
              {" "}
              {skill.level}%
            </div>
          </div>
        );
      })}
    </div>
  );
}

function App() {
  const skills = [
    { name: "c", level: 80 },
    { name: "cpp", level: 60 },
    { name: "python", level: 70 },
    { name: "html", level: 90 },
    { name: "css", level: 85 },
    { name: "tailwind css", level: 30 },
    { name: "java script", level: 60 },
    { name: "React JS", level: 70 },
  ];

  const linkRef = useRef(null);
  const inputRef = useRef(null);
  const [currentInput, setCurrentInput] = useState("");
  const [history, setHistory] = useState([]);
  
  const [initilize, setInitilize] = useState(false);

  const handleClick = () => {
    if(linkRef.current) {
      linkRef.current.click();
    }
  }

  useEffect(() => {
    if (inputRef) {
      inputRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  const handleInputChange = (e) => {
    setCurrentInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentInput.trim()) {
      processCommand(currentInput);
      setCurrentInput("");
    }
  };

  const processCommand = (command) => {
    if (command.trim() === "clear") {
      setHistory([]);
      return;
    }

    let response;

    command === "sr -m init" ? setInitilize(true) : null;

    if (initilize || command === "sr -m init" ) {
      if (
        command === "sr -m init" ||
        command === "sr -m --commands" ||
        command === "contact" ||
        command === "m" ||
        command === "maheshwari" ||
        command === "sr -m @open sr/hrt/rm4"
       ) {
        response = (
          <div className="hide-cursor">
            <h1 className="text-limeGreen">
              <TypingEffect
                text={["loading...."]}
                speed={100}
                eraseSpeed={Infinity}
              
                typingDelay={200}
              />
            </h1>
          </div>
        );
        const newHistory = [...history, { command, response }];
        setHistory(newHistory);
        const newIndex = newHistory.length - 1;


        let temp_response;
        switch (command) {
          case "sr -m init":
            temp_response = (
              <div>
                <span className="text-green-400">bash is initilized</span> <br />
                <span>type [<span className="text-lightOrange tracking-tighter">sr -m --commands</span>] := commands</span>
              </div>
            )
            break;
          case "sr -m --commands":
            temp_response = (
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
                <div className="flex  items-center mt-{10px} text-1xl ">
                  <p>
                    Type one of the above commands to view. For eg .
                    <span className="text-blue-400">about</span>
                  </p>
                </div>
              </div>
            );
            break;
          case "contact":
            temp_response = (
              <div>
                <div className="flex items-center justify-between">
                  <p>email</p>
                  <a href="" className="underline text-blue-400">
                    email@srikar.m
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <p>github</p>
                  <a href="https://github.com/Srikar132" target="_blank" className="underline text-blue-400">
                    Srikar132
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <p>linkedin</p>
                  <a href="https://www.linkedin.com/in/chinthala-srikar-49aa832b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="underline text-blue-400">
                    srikar.linkedin
                  </a>
                </div>
              </div>
            );
            break;

          case "m" :
          case "maheshwari":
            temp_response = <div className="grid gap-[20px]">
              <p>I've always admired the way you bring light into every room with your smile and your kind spirit. Your intelligence and warmth are truly inspiring, and I feel incredibly lucky to know you. Every moment spent with you feels like a beautiful adventure, and I can't help but be captivated by your charm and grace. You make the world a better place just by being in it, and I can't imagine my life without the joy and happiness you bring</p>
              <p>Maheswari, there's something truly special about you that I can't help but admire. Your smile lights up the darkest days, and your kindness touches everyone around you. Your intelligence and grace are qualities that I deeply respect, and they make you even more captivating. Spending time with you is like a breath of fresh air, and I cherish every moment we share. You bring so much joy and positivity into my life, and I can't help but feel incredibly fortunate to know someone as wonderful as you.</p>
            </div>;
            break;
        }


        setTimeout(() => {
          setHistory((prevHistory) => {
            const updatedHistory = [...prevHistory];
            updatedHistory[newIndex] = {
              command,
              response: temp_response,
            };
            return updatedHistory;
          });
          
        }, 2500);
      } else {    
        switch (command) {
          case "help":
            response = (
              <div>
                <span>type [<span className="text-lightOrange">sr -m --commands</span>] :=  dislpay commands</span>
                
              </div>
            );
            break;
          case "projects":
            response = (
              <div className="hide-cursor">
                <h1 className="text-limeGreen">
                  <TypingEffect
                    text={["loading......"]}
                    speed={100}
                    eraseSpeed={Infinity}
                    // eraseDelay={2000}
                    typingDelay={100}
                  />
                </h1>
                <p className="tracking-[3px] italic text-blue-400">
                  UNDER MAINTAINANCE !!{" "}
                </p>
              </div>
            );
            break;
          case "about":
            response = (
              <div className="grid grid-row-3 gap-[10px]">
                <p>
                  Hello! I'm Srikar,  19-year-old first-year B.Tech student at{" "}
                  <a href="https://srkrec.edu.in/" target="_blank">
                    SRKR Engineering College
                  </a>{" "}
                  with a passion for coding and web development.
                </p>
                <p>
                  I enjoy working with programming languages such as Python and
                  C++. As a front-end developer, I have experience using
                  frameworks like{" "}
                  <a href="https://react.dev/" target="_blank">
                    ReactJS
                  </a>{" "}
                  and{" "}
                  <a href="https://tailwindcss.com/" target="_blank">
                    Tailwind CSS
                  </a>{" "}
                  to create visually appealing and user-friendly web
                  applications. I'm constantly exploring new technologies and
                  looking to enhance my skills in software development.
                </p>
                <p>
                  I'm constantly exploring new technologies and looking to
                  enhance my skills in software development.
                </p>
              </div>
            );
            break;
          case "education":
            response = (
              <div className="grid gap-[10px]">
                <ul>
                  <li className="underline font-bold text-purple-200">
                    B.Tech in [computer science]
                  </li>
                  <li>SRKR Engineering College, Bhimavaram</li>
                  <li>2023 - Present</li>
                </ul>
                <ul>
                  <li className="underline font-bold text-purple-200">
                    Intermediate Education
                  </li>
                  <li>Aditya Junior College, Rajahmundry, Andhra Pradesh</li>
                  <li>2019 - 2021</li>
                </ul>
                <ul>
                  <li className="underline font-bold text-purple-200">
                    Schooling
                  </li>
                  <li>Sri Harshavardhana School</li>
                  <li>[ born + 4yrs] - 2019</li>
                </ul>
              </div>
            );
            break;
          case "sri charan":
            response =
              "sri charan is my brother , he is currently studying 9th standarad in sri harshavardhana school at rajanagaram , ofcourse i too completed my schooling their....";
            break;
          case "mahi":
            response =
              "mahi is my brother , he is currently studying 7th standarad in sri harshavardhana school at rajanagaram , ofcourse i too completed my schooling their....";
            break;
          case "skills":
            response = <div>{<GetSkills skills={skills} />}</div>;
            break;
          case "hello":
            response = `Hi there , i'm srikar type sr -m init to know me !`;
            break;
          case "date":
            response = `Today's date is ${new Date().toLocaleDateString()}`;
            break;
          case "time":
            response = `The current time is ${new Date().toLocaleTimeString()}`;
            break;
          default:
            response = (
              <div className="grid">
                <span className="text-red-400">
                  sm: unknown command: {command}
                </span>
                <span className="text-customYellow">for info := type help</span>
              </div>
            );
        }
        setHistory([...history, { command, response }]);
      }
    } else if (command === "help") {
      setHistory([
        ...history,
        {
          command,
          response: (
            <div className="grid">
              <span>
                type{" ["}
                <span className="text-lightOrange tracking-tighter">
                  sr - m init
                </span>{"] "}
                := to initilize bash
              </span>
            </div>
          ),
        },
      ]);
    } else {
      setHistory([
        ...history,
        {
          command,
          response: (
            <div className="grid">
              <span className="text-red-400">
                sm: unknown command: {command}
              </span>
              <span className="text-customYellow">for info := type help</span>
            </div>
          ),
        },
      ]);
    }

    
  };

  return (
    <div className="main-container fixed top-0 left-0 right-0  flex items-center justify-center h-screen">
      <div className=" Container grid  p-1 pl-3 h-[90vh] sm:h-auto sm:max-h-[90vh]     w-[700px]  text-white ">
        <header className="flex flex-col    font-black">
          <h1 className="">
            <span className="text-purple-200 text-6xl font-black tracking-tighter">
              srikar-m@bash:$
            </span>{" "}
            <span className="text-customLightGray text-7xl font-black ml-5">
              type
            </span>
          </h1>
          <h1 className="w-full ">
            <span className="text-customLightGray  text-center  text-[80px] font-bold">
              help to start
            </span>
          </h1>
          {/* <div className='linker text-2xl'><span className='text-customVlightGray'>Visit </span><a className='text-blue-400 underline ' href="#" >Normal website</a></div> */}
        </header>
        <main className="w-full text-white overflow-scroll">
          <div>
            {history.map((item, index) => (
              <div key={index} className="text-customVlightGray">
                <div className="flex items-center gap-[10px] text-customLightGray">
                  <span className=" flex items-center gap-[10px]">
                    <span className="italic text-lightOrange text-2xl">$m</span>
                    <span className="text-customLightGray ">:</span>
                    <span className="text-purple-600"> ≠ </span>
                    <span className="text-blue-300 text-2xl">{">>>"}</span>
                  </span>
                  {item.command}
                </div>
                <div>{item.response}</div>
              </div>
            ))}
          </div>
          <form className="" onSubmit={handleSubmit}>
            <label htmlFor="command">
              <span className=" flex items-center gap-[10px]">
                <span className="italic text-lightOrange text-2xl">$m</span>
                <span className="text-customLightGray ">:</span>
                <span className="text-purple-600"> ≠ </span>
                <span className="text-blue-300 text-2xl">{">>>"}</span>
              </span>
            </label>
            <input
              type="text"
              className="bg-black input  h-[20px] pl-2 text-customLightGray"
              value={currentInput}
              onChange={handleInputChange}
              autoFocus
              id="command"
              ref={inputRef}
              spellCheck="false"
            />
          </form>
        </main>
      </div>
    </div>
  );
}

export default App;
