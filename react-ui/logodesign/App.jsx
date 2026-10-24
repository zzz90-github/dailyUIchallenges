import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import "./App.css";

function Logo({ compact = false, animated = true }) {
  return (
    <a
      className={`brand-logo ${animated ? "animated" : ""}`}
      href="/"
      aria-label="Aurora home"
    >
      <svg
        className="brand-symbol"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M24 2 L29 19 L46 24 L29 29 L24 46 L19 29 L2 24 L19 19 Z"
          fill="currentColor"
        />
        <circle cx="24" cy="24" r="4" fill="#D7F66A" />
      </svg>

      {!compact && (
        <span className="brand-word">
          aurora<span className="brand-dot">.</span>
        </span>
      )}
    </a>
  );
}

export default Logo;
