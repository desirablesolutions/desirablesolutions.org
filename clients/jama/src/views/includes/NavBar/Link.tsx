export default function NavBarLink({ link }: { link: any}) {

    let { name, url } = link
    
    return (
        
        <a
        className="flex items-center content-center justify-center mt-2 text-center group"
        href={url }
      >
        <span className="relative text-white duration-1000 font-xl hover:text-shadow shadow-black whitespace-nowrap hover:text-pink-200">
          {name }
        </span>
      </a>
    )
    }