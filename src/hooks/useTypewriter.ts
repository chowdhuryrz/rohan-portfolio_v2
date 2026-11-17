import { useEffect, useState } from "react";

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const useTypewriter = (text: string, speed = 32, startDelay = 0) => {
  const [reducedMotion] = useState(prefersReducedMotion);
  const [displayed, setDisplayed] = useState(reducedMotion ? text : "");
  const [done, setDone] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    setDisplayed("");
    setDone(false);
    let i = 0;
    let timer: ReturnType<typeof setInterval>;

    const start = setTimeout(() => {
      timer = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          setDone(true);
          clearInterval(timer);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(start);
      clearInterval(timer);
    };
  }, [text, speed, startDelay, reducedMotion]);

  return { displayed, done };
};
