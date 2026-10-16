import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    setIsVisible(true);

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if target is clickable
      const target = e.target;
      if (target) {
        const clickable = target.closest('a, button, input, textarea, select, [role="button"], .interactive-hover');
        setIsPointer(!!clickable);
      }
    };

    const handleMouseDown = () => setIsHovered(true);
    const handleMouseUp = () => setIsHovered(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let animationFrameId;
    const updateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.22,
        y: prev.y + (position.y - prev.y) * 0.22,
      }));
      animationFrameId = requestAnimationFrame(updateTrailing);
    };
    animationFrameId = requestAnimationFrame(updateTrailing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Center dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#10f279] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isHovered ? 0.6 : 1})`,
        }}
      />
      {/* Trailing smooth ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-[#10f279]/60 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-150 ease-out ${
          isPointer
            ? 'w-10 h-10 bg-[#10f279]/15 border-[#10f279] scale-110 shadow-[0_0_20px_rgba(16,242,121,0.3)]'
            : isHovered
            ? 'w-6 h-6 border-[#10f279] scale-90'
            : 'w-7 h-7'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x - (isPointer ? 20 : isHovered ? 12 : 14)}px, ${
            trailingPos.y - (isPointer ? 20 : isHovered ? 12 : 14)
          }px, 0)`,
        }}
      />
    </div>
  );
}
