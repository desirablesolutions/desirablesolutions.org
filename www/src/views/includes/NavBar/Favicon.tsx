export default function NavBarFavicon({ favicon } : any) {
    return (
        <a
              className="self-center inline-block 3xl:mr-52"
              href={favicon?.url}
            >
              <img
                src="assets/images/logo.png"
                alt=""
                className="object-contain h-14"
                width="auto"
              />
            </a>
    )
}