export function FlowingLine({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      viewBox="0 0 1200 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="flowingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(20 100% 59%)" stopOpacity="0" />
          <stop offset="20%" stopColor="hsl(20 100% 59%)" stopOpacity="0.6" />
          <stop offset="50%" stopColor="hsl(266 100% 68%)" stopOpacity="0.8" />
          <stop offset="80%" stopColor="hsl(266 100% 68%)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="hsl(266 100% 68%)" stopOpacity="0" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M0 400 Q200 200, 400 350 T800 300 T1200 400"
        stroke="url(#flowingGradient)"
        strokeWidth="1.5"
        fill="none"
        filter="url(#glow)"
        className="animate-line-draw"
        style={{ strokeDasharray: 1000, strokeDashoffset: 0 }}
      />
    </svg>
  );
}

export function FlowingLineHorizontal({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-full h-px ${className}`}
      viewBox="0 0 1200 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="lineGradientH" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(20 100% 59%)" stopOpacity="0" />
          <stop offset="30%" stopColor="hsl(20 100% 59%)" stopOpacity="0.5" />
          <stop offset="70%" stopColor="hsl(266 100% 68%)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="hsl(266 100% 68%)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line
        x1="0"
        y1="1"
        x2="1200"
        y2="1"
        stroke="url(#lineGradientH)"
        strokeWidth="1"
      />
    </svg>
  );
}