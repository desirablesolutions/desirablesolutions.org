export default function NavBarBurger() {
    return (
        <button className="py-1 ml-auto lg:hidden navbar-burger">
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
    )
}