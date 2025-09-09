import { useRef, useEffect, useState } from "react";

export const useNearScreen = ()=>{
    const elementRef = useRef<HTMLElement | null>(null);
    const [isNearScreen, setIsNearScreen] = useState(false);

     const optionsObserver = {
        rootMargin: '10px',
        threshold: 0.0
      };
    
      useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsNearScreen(true);
            }
            else setIsNearScreen(false);
          });
        }, optionsObserver);
        if(!elementRef.current) return;
        observer.observe(elementRef.current);
    
        return () => observer.disconnect()
      }, []);

    return {isNearScreen, elementRef};
}