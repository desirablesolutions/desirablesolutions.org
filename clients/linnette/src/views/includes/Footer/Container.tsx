export default function FooterContainer({ children } : any) {
return (
    <section className="py-12 backdrop-blur-lg md:py-20">
  <div className="container px-4 mx-auto">
  {children}
  </div>
</section>
)
}