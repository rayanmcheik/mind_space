'use client';
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const AnimatedCirclecontact = () => {
    const cyanCircleRef = useRef<SVGCircleElement>(null);
    const darkCircleRef = useRef<SVGCircleElement>(null);

    useEffect(() => {
        const cyanCircle = cyanCircleRef.current;
        if (cyanCircle) {
            const radius = cyanCircle.r.baseVal.value;
            const circumference = 2 * Math.PI * radius;

            cyanCircle.style.strokeDasharray = `${circumference}`;
            cyanCircle.style.strokeDashoffset = `${circumference}`;

            gsap.to(cyanCircle, {
                strokeDashoffset: 0,
                strokeWidth: 6,
                duration: 7,
                ease: "power2.out",
            });
        }


        const darkCircle = darkCircleRef.current;
        if (darkCircle) {
            const radius = darkCircle.r.baseVal.value;
            const circumference = 2 * Math.PI * radius;

            darkCircle.style.strokeDasharray = `${circumference}`;
            darkCircle.style.strokeDashoffset = `${circumference}`;

            gsap.to(darkCircle, {
                strokeDashoffset: 0,
                duration: 5,
                strokeWidth: 4,
                ease: "power2.out",
            });
        }
    }, []);

    return (
        <svg
            viewBox="0 0 600 600"
            className="w-[200px] h-[200px] md:w-[750px] md:h-[750px] -mt-24 ml-10"
        >
            <defs>

                <linearGradient id="circleGradient" x1="10%" y1="100%" x2="0%" y2="0%">
                    <stop offset="40%" stopColor="cyan" />
                    <stop offset="0%" stopColor="#02384b" />
                </linearGradient>


                <linearGradient id="circleGradient1" x1="100%" y1="0%" x2="100%" y2="0%">
                    <stop offset="100%" stopColor="#02384b" />
                </linearGradient>
            </defs>


            <circle
                ref={darkCircleRef}
                cx="250"
                cy="210"
                r="240"
                stroke="url(#circleGradient1)"
                strokeWidth={6}
                fill="transparent"
                transform="rotate(140 250 250)"
            />

            <circle
                ref={cyanCircleRef}
                cx="250"
                cy="210"
                r="240"
                stroke="url(#circleGradient)"
                strokeWidth={8}

                fill="transparent"
                transform="rotate(140 250 250)"
            />
        </svg>
    );
};

export default AnimatedCirclecontact;
