import { useEffect, useState, useRef } from "react";

const useHover = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current as HTMLElement | null;
    const handleMouseOver = () => setIsHover(true);
    const handleMouseOut = () => setIsHover(false);
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);
      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref.current]);
  return { ref, isHover };
};
export default useHover;
