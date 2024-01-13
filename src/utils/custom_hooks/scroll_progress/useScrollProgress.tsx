import React, { useState, useEffect } from "react";


const useScrollProgress = () => {

    const [ completion, setCompletion ] = useState(0);

    useEffect(() => {
        const updateScrollCompletionStatus = () => {
            const currentStatus: Number = window.scrollY;
            const scrollHeight: Number = document.body.scrollHeight - window.innerHeight;

            if (scrollHeight) {
                const value = Number(currentStatus) / Number(scrollHeight);
                const scrollValue = Number(value.toFixed(2)) * 100
                setCompletion(scrollValue);
            }
        };

        // add event listener
        window.addEventListener('scroll', updateScrollCompletionStatus);

        // delete the event
        return () => window.removeEventListener('scroll', updateScrollCompletionStatus);

    }, [])


    return completion;

}

export default useScrollProgress;