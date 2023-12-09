import BrandingSVG from "@/views/components/BrandingSVG/BrandingSVG";

export default function NavigatorCover({ cover }: any) {
  
  return (
    <button
      type="button"
      data-dial-toggle="speed-dial-menu-bottom-right"
      aria-controls="speed-dial-menu-bottom-right"
      aria-expanded="false"
      className="flex shadow-black shadow-sm ease-in-out items-center justify-center text-white bg-[#C3CFBD] rounded-full p-1 w-14 h-14 hover:bg-blackfocus:ring-4 focus:ring-black focus:outline-none"
    >
      <BrandingSVG />
    </button>
  );
}
