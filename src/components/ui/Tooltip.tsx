import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

const TooltipProvider = TooltipPrimitive.Provider;
const TooltipRoot = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    side='right'
    className={`z-50 overflow-hidden rounded-md bg-slate-900 px-3 py-1.5 text-sm text-slate-100 animate-in fade-in-0 zoom-in-95 duration-150 ${className}`}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// This is the type definition that is likely missing or incorrect
type TooltipProps = {
  children: React.ReactNode;
  content: string;
};

// This component uses the TooltipProps type
export const Tooltip = ({ children, content }: TooltipProps) => {
  return (
    <TooltipProvider delayDuration={200}>
      <TooltipRoot>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  );
};