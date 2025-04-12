"use client";

import React from "react";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "dark" | "pattern";
  fullHeight?: boolean;
};

export const Section = ({
  children,
  className = "",
  id,
  variant = "dark",
  fullHeight = false,
}: SectionProps) => {
  const baseClasses = "w-full relative";
  const variantClasses = {
    dark: "section-dark",
    pattern: "section-pattern",
  };

  const classes = `section ${baseClasses} ${variantClasses[variant]} ${
    fullHeight ? "min-h-screen" : ""
  } ${className}`;

  return (
    <section
      id={id}
      className={classes}
    >
      {variant === "pattern" && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(177,151,119,0.05)] to-[rgba(137,108,70,0.05)]" />
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c0a87f' fill-opacity='0.04'%3E%3Cpath d='M40 0L0 40h40V0zm0 80V40h40L40 80zm40-80v40L40 0h40zm-80 80h40L0 40v40z'/%3E%3C/g%3E%3C/svg%3E")`,
            opacity: 0.1
          }} />
          <div className="absolute inset-0 bg-radial-gradient" style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(177,151,119,0.04) 0%, rgba(10,10,10,0) 70%)'
          }} />
        </>
      )}
      <div className="container-wrapper relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section; 