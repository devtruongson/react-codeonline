import React, { useState } from "react";

function Test() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="App">
      <button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        className={isShown ? "test 1" : "test 2"}
      >
        Hover over me!
      </button>
      {isShown && <div>I'll appear when you hover over the button.</div>}
    </div>
  );
}

export default Test;
