import React, { useEffect, useState } from "react";
import "./nav.css";

function Nav() {

  const [show, setShow] = useState(null) ;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        setShow(true) ;
      }
      else {
        setShow(false) ;
      }
    });
    return () => {
      window.removeEventListener("scroll") ;
    }
  }, [])

  // console.log(window.screenY) ;

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="data:image/jpeg;base64,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"
        alt="MOVIX Logo"
      />

      <img
        className="nav_avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3MLmbNmkU4vmOpxiBtxFm3GnDvg4k-4BZfrF6wCLRYwvpJimn82zmGQshiO2l_8cgAts&usqp=CAUU"
        alt="MOVIX Logo"
      ></img>
    </div>
  );
}

export default Nav;