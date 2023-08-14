export default function NavBarContainer({ children } : any) {
    return (
        <nav className="sticky top-0 left-0 z-50 w-full backdrop-blur-sm">
      <div className="container px-4 mx-auto">
        <div className="flex items-center h-24">
        {children}
        </div>
      </div>
    </nav>
    )
}