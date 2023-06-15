import React, { useRef, useState } from "react";

export default function Comment({ toggle }) {
    const [count, setCount] = useState(60);
    const ref = useRef();

    const handleStart = () => {
        ref.current = setInterval(() => {
            setCount((prev) => prev - 1);
        }, 1000);
    };

    const handleStop = () => {
        const id = ref.current;
        if (id) {
            clearInterval(id);
        }
    };

    return (
        <div>
            <h1
                style={{
                    padding: "20px 0",
                }}
            >
                {count}
            </h1>
            <button onClick={handleStart}>Click Count Start</button>
            <button onClick={handleStop}>Click Count Stop</button>
        </div>
    );
}
