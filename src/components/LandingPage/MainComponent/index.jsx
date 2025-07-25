import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";
import Button from "@/components/common/Button";
import "./style.css";
import { Link } from "react-router-dom";

const MainComponent = () => {
  const cryptoRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(cryptoRef.current, {
      types: "chars",
    });

    gsap.from(split.chars, {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
    });

    return () => {
      split.revert();
    };
  }, []);

  return (
    <div className="page">
      <div className="page-content">
        <h2 className="track">track</h2>
        <h1 ref={cryptoRef} className="crypto">
          CRYPTO.
        </h1>
        <h2 className="real-time">real time</h2>
      </div>

      <div className="secondary-text">
        <h4>Track crypto through a public api in real time!</h4>
        <div className="buttons">
          <Link className="dashboard-button" to="/dashboard">
            <Button text={"Dashboard"} />
          </Link>
          <Button text={"Share App"} outlined={true} />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
