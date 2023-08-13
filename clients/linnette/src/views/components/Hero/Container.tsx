export default function HeroContainer({ children } : any) {
    return (
        <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
        {children}
        </div>
      </div>
    )
}