import React, { useEffect, useRef, useState } from "react";
import TypingEffect from "react-typing-effect";
import Skills from "./components/Skills";
import LoadingResponse from "./components/LoadingResponse";
import CommandList from "./components/CommandList";
import AboutSection from "./components/About";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import ProjectsSection from "./components/ProjectSection";





const ErrorMessage = ({ command }) => (
  <div className="grid">
    <span className="text-red-400">sm: unknown command: {command}</span>
    <span className="text-customYellow">for info := type help</span>
  </div>
);

// Terminal Prompt Component
const TerminalPrompt = () => (
  <span className="flex items-center gap-[10px]">
    <span className="italic text-orange-500 text-2xl">$m</span>
    <span className="text-customLightGray">:</span>
    <span className="text-purple-600"> ≠ </span>
    <span className="text-blue-300 text-2xl">{">>>"}</span>
  </span>
);

// History Item Component
const HistoryItem = ({ item }) => (
  <div className="text-customVlightGray">
    <div className="flex items-center gap-[10px] text-customLightGray">
      <TerminalPrompt />
      {item.command}
    </div>
    <div>{item.response}</div>
  </div>
);

const commandMap = {
  // Loading commands (with delay)
  loading: {
    help: {
      component: CommandList,
      delay: 2500
    },
    contact: {
      component: ContactSection,
      delay: 2500
    }
  },
  
  // Immediate response commands
  immediate: {
    about: {
      component: AboutSection
    },
    education: {
      component: EducationSection
    },
    skills: {
      component: Skills
    },
    projects: {
      component: ProjectsSection
    },
    hello: {
      response: "Hi there, I'm Srikar! Type 'help' to see available commands."
    },
    date: {
      response: () => `Today's date is ${new Date().toLocaleDateString()}`
    },
    time: {
      response: () => `The current time is ${new Date().toLocaleTimeString()}`
    },
    "sri charan": {
      response: "Sri Charan is my brother, he is currently studying 9th standard in Sri Harshavardhana School at Rajanagaram, of course I too completed my schooling there...."
    },
    mahi: {
      response: "Mahi is my brother, he is currently studying 7th standard in Sri Harshavardhana School at Rajanagaram, of course I too completed my schooling there...."
    }
  }
};


function App() {
  const inputRef = useRef(null);
  const [currentInput, setCurrentInput] = useState("");
  const [history, setHistory] = useState([]);


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
    const normalizedCommand = command.trim().toLowerCase();
    
    // Handle clear command separately
    if (normalizedCommand === "clear") {
      setHistory([]);
      return;
    }

    // Check if it's a loading command
    if (commandMap.loading[normalizedCommand]) {
      const commandConfig = commandMap.loading[normalizedCommand];
      const response = <LoadingResponse />;
      const newHistory = [...history, { command, response }];
      setHistory(newHistory);
      const newIndex = newHistory.length - 1;

      setTimeout(() => {
        setHistory((prevHistory) => {
          const updatedHistory = [...prevHistory];
          updatedHistory[newIndex] = {
            command,
            response: <commandConfig.component />
          };
          return updatedHistory;
        });
      }, commandConfig.delay);
      return;
    }

    // Check if it's an immediate command
    if (commandMap.immediate[normalizedCommand]) {
      const commandConfig = commandMap.immediate[normalizedCommand];
      let response;

      if (commandConfig.component) {
        response = <commandConfig.component />;
      } else if (typeof commandConfig.response === 'function') {
        response = commandConfig.response();
      } else {
        response = commandConfig.response;
      }

      setHistory([...history, { command, response }]);
      return;
    }

    // Handle unknown commands
    const response = <ErrorMessage command={command} />;
    setHistory([...history, { command, response }]);
  };

  useEffect(() => {
    inputRef.current.scrollIntoView({behaviour : "smooth"});
  } , [history])

  return (
    <div className="main-container fixed top-0 left-0 right-0 flex sm:items-center sm:justify-center h-screen">
      <div className="Container grid p-1 pl-3 h-[85vh] sm:h-auto sm:max-h-[90vh] w-[700px] text-white">
        <header className="flex flex-col font-black">
          <h1>
            <span className="text-purple-200 text-6xl font-black tracking-tighter">
              Hi I'm Srikar:
            </span>{" "}
            <span className="text-customLightGray text-7xl font-black ml-5">
              type
            </span>
          </h1>
          <h1 className="w-full">
            <span className="text-customLightGray text-center text-[80px] font-bold">
              help to start
            </span>
          </h1>

          <a href="https://srikar-protfolio-two.vercel.app">
            View Portfolio
          </a>
          
        </header>
        
        <main className="w-full text-white overflow-scroll">
          <div>
            {history.map((item, index) => (
              <HistoryItem key={index} item={item} />
            ))}
          </div>
          
          <form onSubmit={handleSubmit}>
            <div>
              <TerminalPrompt />
            </div>
            <input
              type="text"
              className="bg-transparent input h-[20px] pl-2 text-customLightGray"
              value={currentInput}
              onChange={handleInputChange}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
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