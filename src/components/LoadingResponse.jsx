import ReactTypingEffect from "react-typing-effect";

const LoadingResponse = ({ text = "loading..." }) => (
    <div className="hide-cursor">
      <h1 className="text-limeGreen">
        <ReactTypingEffect
          text={[text]}
          speed={100}
          eraseSpeed={Infinity}
          typingDelay={200}
        />
      </h1>
    </div>
  );

  export default LoadingResponse