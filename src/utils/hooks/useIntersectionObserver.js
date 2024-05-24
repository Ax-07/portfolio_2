import { useEffect, useState } from 'react';

export const useIntersectionObserver = (ref, options) => {
  const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        setIsVisible(entry.isIntersecting);

    }, options);

    const currentRef = ref.current; // Create a variable and assign it the value of ref.current

    if (currentRef) {
        observer.observe(currentRef); // Use the variable in the observe function
    }

    return () => {
        if (currentRef) {
            observer.unobserve(currentRef); // Use the variable in the unobserve function
        }
    };
}, [ref, options]);

  return  isVisible;
}