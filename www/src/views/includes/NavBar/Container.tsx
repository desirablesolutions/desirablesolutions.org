export default function NavBarContainer({ children, sx}: any) {
    return (
<section className="relative">
  <nav>
    <div className="container px-4 mx-auto">
      <div className="relative flex items-center h-24">
     { children}
      </div>
    </div>
  </nav>

</section>
    )
}