import { HTMLMotionProps, motion } from 'framer-motion';
import React from 'react';

interface BoxProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
}

const MotionBox = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={`box-border rounded-md border border-tertiary-200 bg-tertiary-50 p-[1rem] shadow-sm ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

export default MotionBox;
