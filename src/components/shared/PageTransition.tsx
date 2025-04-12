"use client";

import React, { ReactNode } from "react";

type PageTransitionProps = {
  children: ReactNode;
};

export const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <div className="w-full">
      {children}
    </div>
  );
};

export default PageTransition; 