import React from "react";
import { cn } from "../../lib/utils";

interface PulsatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string;
  duration?: string;
}

export const PulsatingButton = React.forwardRef<
  HTMLButtonElement,
  PulsatingButtonProps
>(
  (
    {
      className,
      children,
      pulseColor = "#808080",
      duration = "1.5s",
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative flex cursor-pointer items-center justify-center rounded-lg bg-primary px-4 py-[10px] hover:scale-110 text-xl text-center bg-orange-400 text-primary-foreground text-white",
          className,
        )}
        style={
          {
            "--pulse-color": pulseColor,
            "--duration": duration,
          } as React.CSSProperties
        }
        {...props}
      >
        <style>{`
          .pulsating-effect {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 100%;
            height: 100%;
            transform: translate(-50%, -50%);
            border-radius: 0.5rem;
            background: var(--pulse-color, #808080);
            opacity: 0.6;
            z-index: 0;
            animation: pulse-custom var(--duration, 1.5s) infinite cubic-bezier(0.4,0,0.6,1);
          }
          @keyframes pulse-custom {
            0% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 0.6;
            }
            70% {
              transform: translate(-50%, -50%) scale(1.5);
              opacity: 0;
            }
            100% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 0;
            }
          }
        `}</style>
        <div className="relative z-10">{children}</div>
        <div className="pulsating-effect" />
      </button>
    );
  },
);

PulsatingButton.displayName = "PulsatingButton";
