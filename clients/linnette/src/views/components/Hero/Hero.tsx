import { default as Container } from "./Container"

export type HeroProps = {
    
}

export default function Hero() {
    return (
    <Container>
  <div className="w-full px-4 mb-6 lg:w-5/12 lg:mb-0">
            <div className="flex flex-col h-full">
              <img
                className="block w-full mb-6 rounded-xl"
                src="https://linnettemartinez.com/wp-content/uploads/2022/04/LevanTecha.jpg"
                alt=""
              />
              <div className="h-full px-10 py-10 bg-black bg-opacity-50 rounded-xl backdrop-blur-sm">
                <h1 className="max-w-sm mb-4 tracking-tighter text-9xl md:max-w-md font-heading sm:text-7xl">
                  Linnette's Lens
                </h1>
                <div className="max-w-sm ml-auto text-right">
                  <span className="block mb-1 text-xs">Since</span>
                  <span className="block mb-3 text-xs">1979</span>
                  <p className="text-lg">
                    <span className="block">
                    Showcasing how to combine 


                    </span>
                    <span className="block">
                    Art and Engineering
                    </span>
                    <span className="block">
                    one project at a time.                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-7/12">
            <div className="relative h-full">
              <div className="absolute top-0 right-0 flex items-center justify-center m-6 w-44 h-44">
                <img
                  className="absolute top-0 left-0 animate-spinSlow"
                  style={{ animationDirection: "reverse" }}
                  src="asitrastudio-assets/headers/spin-bonus.svg"
                  alt=""
                />
                <img
                  className="relative"
                  src="asitrastudio-assets/headers/arrow-spin.svg"
                  alt=""
                />
              </div>
              <img
                className="block object-cover w-full h-full rounded-xl"
                src="https://linnettemartinez.com/wp-content/uploads/2022/10/cropped-cropped-DSCF4486-scaled-1.jpg"
                alt=""
              />
            </div>
          </div>
    </Container>

    )
}