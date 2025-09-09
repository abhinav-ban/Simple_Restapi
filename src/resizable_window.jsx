import { useState, useRef } from "react";

export default function ResizableSplit() {
  const containerRef = useRef(null);
  const [leftWidth, setLeftWidth] = useState(50); // percentage

  const startResizing = (e) => {
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();

    const handleMouseMove = (e) => {
      const offset = e.clientX - containerRect.left;
      const percent = (offset / containerRect.width) * 100;

      if (percent > 10 && percent < 90) { // avoid collapsing
        setLeftWidth(percent);
      }
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div ref={containerRef} className="split-container">
      <div className="panel left" style={{ flexBasis: `${leftWidth}%` }}>
        Left Panel
      </div>
      <div className="divider" onMouseDown={startResizing}></div>
      <div className="panel right" style={{ flexBasis: `${100 - leftWidth}%` }}>
        Right Panel
      </div>
    </div>
  );
}
