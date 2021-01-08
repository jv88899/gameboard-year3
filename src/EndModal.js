import React from "react";
import ConfettiGenerator from "confetti-js";
import { Link } from "react-router-dom";

function EndModal() {
  React.useEffect(() => {
    const width = window.innerWidth * 0.97;
    const height = window.innerHeight * 0.97;

    const confettiSettings = {
      target: "my-canvas",
      height: height,
      width: width
    };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <canvas
        id="my-canvas"
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <div
        style={{
          border: `3px solid black`,
          position: "absolute",
          transform: `translateY(-50%)`,
          marginLeft: `-125px`,
          top: "50%",
          left: "50%",
          background: "white",
          height: "175px",
          width: "350px",
          boxShadow: `4px 5px 4px 0px rgba(0,0,0,0.2)`,
          padding: `2px`
        }}
      >
        <h2>Great job!</h2>
        <p>
          You are finished! Now it is time to complete the financial statement.
        </p>
        <Link to='/001'>START OVER</Link>
      </div>
    </div>
  );
}

export default EndModal;
