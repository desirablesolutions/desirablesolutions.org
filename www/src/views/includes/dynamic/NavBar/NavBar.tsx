type ImageProps = {

}
type FaviconProps = {
  image?: ImageProps;
  url?: string;
}
export type NavBarProps = {
  favicon?: FaviconProps
}

export const defaultProps: NavBarProps = {
  favicon: {
    url: "URL_NOT_FOUND"
  }
}
export default function NavBar(props: NavBarProps): JSX.Element {
  return (
    <section className="top-0 fixed w-full">
      <div className="backdrop-blur-sm">
        <nav className="px-8 py-8 mr-12 overflow-hidden">
          <div className="flex items-center w-full">
            <a className="self-center inline-block 3xl:mr-52" href={props?.favicon?.url ?? defaultProps.favicon.url}>
              <img src="wrexa-assets/logos/logo-wrexa.svg" alt="" width="auto" />
            </a>
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
            <ul className="items-center hidden mr-auto 3xl:flex">
              <li className="mr-14">
                <a
                  className="inline-flex items-center text-sm text-gray-900 hover:text-gray-700"
                  href="#"
                >
                  <span className="mr-4">Collection</span>
                  <svg
                    width={12}
                    height={7}
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 2L6 6L2 2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="square"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
              <li className="mr-14">
                <a
                  className="inline-block text-sm text-gray-900 hover:text-gray-700"
                  href="#"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="inline-block text-sm text-gray-900 hover:text-gray-700"
                  href="#"
                >
                  About
                </a>
              </li>
            </ul>
          
            <a
              className="items-center hidden px-8 py-3 bg-white shadow 3xl:flex rounded-2xl"
              href="#"
            >
              <div className="relative mr-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="wrexa-assets/images/avatar2.png"
                  alt=""
                />
                <div className="absolute bottom-0 left-0 flex items-center justify-center w-6 h-6 -ml-2 text-xs text-white bg-green-800 rounded-full">
                  1
                </div>
              </div>
              <div className="pr-5 mr-auto">
                <h4 className="text-xs text-gray-400">Account</h4>
                <span>matloay</span>
              </div>
              <svg
                width={12}
                height={7}
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2L6 6L2 2"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </nav>
      </div>
     
    </section>

  )
}