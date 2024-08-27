import React, { useState } from 'react';

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const togglebtn = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="flex items-center justify-between w-full h-16 px-3 md:px-10 bg-black font-inter text-[#ffffffb2]">
      <div className="text-xl"><a href="/">CHETAN PARASHAR</a></div>

      <div>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#ffffffb6] text-2xl rounded-md" onClick={togglebtn}>
          {toggle ? <span className="material-symbols-outlined">close</span> : <span className="material-symbols-outlined">drag_handle</span>}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-7 text-base">
            <li><a className="hover:underline underline-offset-4" href="#home">HOME</a></li>
            <li><a className="hover:underline underline-offset-4" href="#work">WORK</a></li>
            <li><a className="hover:underline underline-offset-4" href="#about">ABOUT</a></li>
            <li><a className="hover:underline underline-offset-4" href="#contact">CONTACT</a></li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {toggle && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900">
            <ul className="flex flex-col items-center gap-7 py-4 text-base">
              <li><a className="hover:underline underline-offset-4" href="#home" onClick={togglebtn}>HOME</a></li>
              <li><a className="hover:underline underline-offset-4" href="#work" onClick={togglebtn}>WORK</a></li>
              <li><a className="hover:underline underline-offset-4" href="#about" onClick={togglebtn}>ABOUT</a></li>
              <li><a className="hover:underline underline-offset-4" href="#contact" onClick={togglebtn}>CONTACT</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
