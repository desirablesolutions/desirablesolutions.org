export default function FooterContainer({ children } : any) {
    return (
        <footer className="relative bottom-0 z-40 w-full p-6 border-t border-black backdrop-blur-md relative-20 md:flex md:items-center md:justify-between md:p-6 dark:border-gray-600">
        {children}
      </footer>
    )
}