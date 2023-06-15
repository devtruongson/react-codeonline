import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Video from "./Video";
import { useRef } from "react";

let toggle = true;

function App() {
    // const [toggle, seToggle] = useState(true)

    const ref = useRef(null)

    useEffect(() => {
        console.log(ref)
    })
    
    return (
       <div>
       <Video ref={ref} />
        
       </div>
    );
}

export default App;
