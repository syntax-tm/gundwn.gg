"use client";

import React, { useState, useEffect } from "react";
import "./clock.css";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
        setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="clock">
        <div className="clock-container">
          <p>{time.toLocaleDateString('en-US', { month: "numeric", day: "numeric" })} {time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
        </div>
      </section>
    </>
  );
}
