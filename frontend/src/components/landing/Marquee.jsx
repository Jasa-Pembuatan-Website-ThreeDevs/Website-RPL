import { memo } from "react";

const Marquee = ({ children, speed = 30, className = "" }) => {
  return (
    <div className={`group relative flex overflow-hidden ${className}`}>
      <div 
        className="flex min-w-full shrink-0 items-center justify-around gap-8 animate-marquee group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
      <div 
        aria-hidden="true" 
        className="flex min-w-full shrink-0 items-center justify-around gap-8 animate-marquee group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
    </div>
  );
};

export default memo(Marquee);
