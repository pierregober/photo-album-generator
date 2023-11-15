import { useState, useEffect } from 'react';

export default function useWindowSize() {
  const [size, setSize] = useState({ width: undefined, height: undefined });

  useEffect(() => {
    function handleResize() {
      // Grab the window size and save it
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    // Add event listener any time the window changes
    window.addEventListener("resize", handleResize);

    // Call handler
    handleResize();

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
