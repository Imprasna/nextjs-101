"use client"
import React, { createContext, useContext, useEffect, useState, useMemo, useLayoutEffect, useRef } from "react";
import Lenis from '@studio-freight/react-lenis';
import debounce from '@/util/debounce';

const PageContext = createContext({
    Lenis: null,

});

export const PageProvider = ({children}) => {
    const [lenis, setLenis] = useState();
    const reqIDRef = useRef();

    useLayoutEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) =>  Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        setLenis(lenis);

        return () => {
            lenis.destroy();
            setLenis(null);
        };

    }, []);

    useEffect(() => {
        const animate = (time) => {
            lenis?.raf(time);
            reqIDRef.current = requestAnimationFrame(animate);
        }

        reqIDRef.current = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(reqIDRef.current);
    }, [lenis]);

    const memoedValue = useMemo(
        () => ({
            lenis,
        }), []); // eslint-disable-line

        return (
            <PageContext.Provider value={memoedValue}>{ children }</PageContext.Provider>
        );

};

export default function usePage() {
    return useContext(PageContext);
}