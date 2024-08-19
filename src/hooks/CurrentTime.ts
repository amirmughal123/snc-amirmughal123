import { useState, useEffect } from "react";

// Define the custom hook
function useCurrentTime(): Date | undefined {
  const [currentTime, setCurrentTime] = useState<Date | undefined>();

  // useEffect to update the time every second
  useEffect(() => {
    setCurrentTime(new Date());

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  // Return the current time
  return currentTime;
}

export default useCurrentTime;
