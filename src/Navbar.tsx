import { useState } from "react";
import { links } from "./constants";
import { Link } from "react-scroll";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex w-full paddingX pt-6 align-middle top-0 z-20">
      <div className="flex mr-auto">
        <img src="/logo.png" className="object-cover w-10 sm:w-12" />
        <a className="flex ml-5 self-center text-white text-[16px] font-bold underline">
          Currently in Dev (V0.2)
        </a>
      </div>

      <div className="hidden md:flex">
        <div className="flex gap-12 self-center">
          {links.map((item, idx) => (
            <Link
              key={idx}
              className="text-white text-[16px] hover:font-bold hover:cursor-pointer"
              activeClass="active"
              to={item.id}
              spy={true}
              smooth={true}
              duration={500}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex md:hidden self-center">
        {toggle ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
            color="white"
            onClick={() => setToggle(false)}
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
            color="white"
            onClick={() => setToggle(true)}
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        )}
      </div>

      <div
        className={`${
          toggle ? "flex" : "hidden"
        } absolute right-0 mx-6 top-20 z-10 p-4 min-w-[140px] bg-primary rounded-md`}
      >
        <div className="flex flex-col gap-2">
          {links.map((item, idx) => (
            <Link
              key={idx}
              className="text-white text-[16px] hover:font-bold"
              activeClass="active"
              to={item.id}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              delay={1000}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// <a
//   key={idx}
//   href={item.id}
//   className="text-white text-[16px] hover:font-bold"
//   onClick={() => setToggle(false)}
// >
//   {item.title}
// </a>
