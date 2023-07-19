export default function NavBarBurger() {
  return (
    <button className="flex items-center justify-center ml-auto bg-white rounded-full 3xl:hidden navbar-burger w-14 h-14 hover:bg-gray-100">
      <svg
        width={20}
        height={9}
        viewBox="0 0 20 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0.75"
          y1="1.25"
          x2="19.25"
          y2="1.25"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="0.75"
          y1="8.25"
          x2="13.25"
          y2="8.25"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
