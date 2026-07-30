"use client";

import { useState, useRef, useEffect } from "react";

export function ScrollReveal({ children }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const scrollObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                scrollObserver.unobserve(entry.target);
            }
        }, { rootMargin: "0px 0px -10% 0px" });

        scrollObserver.observe(ref.current);

        return () => {
            if (ref.current) {
                scrollObserver.unobserve(ref.current);
            }
        };
    }, []);

    const classes = `inherit transition-all duration-700 ease-out
        motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`;

    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    );
};
