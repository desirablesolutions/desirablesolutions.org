import OffsetLinesSVG from "@components/OffsetLinesSVG";

export default function NavBarBurger() {
  return (
    <button className="flex items-center justify-center ml-auto bg-white rounded-full bg-opacity-90 3xl:hidden navbar-burger w-14 h-14 hover:bg-gray-100">
      <OffsetLinesSVG />
    </button>
  );
}
