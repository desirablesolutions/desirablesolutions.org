export default function NavBarLink({ link }: { link: any}) {

    let { name, url } = link
    
    return (
        
        <a
        className="flex items-center content-center justify-center mt-2 text-center group"
        href={url }
      >
        <span className="relative text-2xl text-white duration-1000 hover:text-shadow shadow-black whitespace-nowrap hover:text-pink-200">
          {name }
        </span>
      </a>
    )
    }