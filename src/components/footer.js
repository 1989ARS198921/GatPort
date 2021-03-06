import React from "react"

export default (props) => (
  <footer className="site-footer py-5">
    <a href="https://app.netlify.com/sites/vibrant-pike-f41005/deploys" target="_blank" rel="noopener noreferrer">
      <img src="https://api.netlify.com/api/v1/badges/72511ec5-84cd-416c-81d8-b16489c1b235/deploy-status" alt="Netlify Status" /> 
    </a>
    <p className="mt-1">
      &copy;{ new Date().getFullYear() } 
      <a href="https://github.com/1989ARS198921/GatPort/" target="_blank" rel="noopener noreferrer"> Portfolio</a>,
      by Brian and Ars.
    </p>
  </footer>
)