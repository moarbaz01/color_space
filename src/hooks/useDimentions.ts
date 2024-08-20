"use client";

import { useEffect, useState } from "react";

const useDimensions = () => {
    const [dimensions, setDimensions] = useState({
        height: 0,
        width: 0,
    });

    useEffect(() => {
        // Function to update dimensions
        const handleResize = () => {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        };

        // Call the handler once to set the initial dimensions
        handleResize();

        // Attach the event listener
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return dimensions;
};

export default useDimensions;
