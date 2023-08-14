import { default as Container } from "./Container";
import { default as Favicon } from "./Favicon";
import { default as Burger } from "./Burger";

export function defaultProps() {
  return {};
}

export type NavBarProps = {
  sx: any,
  favicon: any,
  burger: any
};

export default function NavBar(props: any) {
  return (
<Container>
<div className="items-center hidden xl:flex">
          <a className="inline-block mr-10 hover:underline" href="#">
            About
          </a>
          <a className="inline-block mr-10 hover:underline" href="#">
            Services
          </a>
        </div>
        <a
          className="absolute hidden transform -translate-x-1/2 -translate-y-1/2 xl:block top-1/2 left-1/2"
          href="#"
        >
          <img
            className="h-14"
            src="assets/images/logo.png"
            alt=""
          />
        </a>
        <a className="inline-block xl:hidden" href="#">
          <img
            className="h-5"
            src="asitrastudio-assets/logos/logo-asi.svg"
            alt=""
          />
        </a>
        <button className="py-1 ml-auto xl:hidden navbar-burger">
          <svg
            width={44}
            height={16}
            viewBox="0 0 44 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width={44} height={2} rx={1} fill="black" />
            <rect y={14} width={44} height={2} rx={1} fill="black" />
          </svg>
        </button>
        <div className="items-center hidden ml-auto mr-12 xl:flex">
          <a className="inline-block mr-10 hover:underline" href="#">
            Projects
          </a>
          <a className="inline-block hover:underline" href="#">
            Contact us
          </a>
        </div>
        <a
          className="items-center justify-center hidden px-8 py-4 font-medium leading-none text-black transition duration-200 border border-black rounded-full group xl:inline-flex hover:text-white hover:bg-black"
          href="#"
        >
          <span className="mr-2">Get consulation</span>
          <span className="transition duration-100 transform group-hover:rotate-45">
            <svg
              width={10}
              height={10}
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 1L1 9"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 8.33571V1H1.66429"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
</Container>

  );
}
