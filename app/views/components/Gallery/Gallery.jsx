import Avatar from "@components/Avatar";
import Image from "@components/Image";
import team from "@db/team";



const Gallery = ({ title, order, heading }) => {


  return (

    <section style={{
      borderTop: '1px solid #e6e6e6',
      background: `url('/assets/images/bg.png') #000000 no-repeat center center fixed`,
      filter: 'opacity(0.8)'

  }} className="pt-24 pb-24 md:pb-40">
      <div className="container px-4 mx-auto">
        <div className="flex items-center mb-6">
          <span className="font-heading outline p-1 text-white text-xl">{order}</span>
          <div className="mx-4 rounded-full bg-gray-200 h-1 w-1" />
          <span className="font-heading text-white text-xl">{title}</span>
        </div>
        <div className="flex flex-wrap -mx-4 mb-20">
          <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
            <h1 className="font-heading text-white text-5xl sm:text-6xl">{heading}</h1>
          </div>

          <div className="w-full md:w-1/2 px-4 md:text-right">
            <a className="inline-block" href="/">
              <img
                className="w-16 h-16"
                src="/assets/images/logo-transparent.png"
                alt=""
              />
            </a>
          </div>

        </div>


        <div className="flex flex-wrap justify-center -mx-4 relative">

          {
            team.map((member, index) => {
              return (
                <div key={`${index}`} className="w-full border-r-white border-white lg:w-1/2 3xl:w-auto px-4 3xl:px-12">
                  <div className="max-w-md mx-auto relative">
                    <div className="absolute top-0 left-0 -mt-2 w-full">
                      <div className="mx-5 rounded-t-xl h-4" />
                    </div>
                    <div className="relative rounded-full">
                      <Image
                        className="block w-full h-96 object-cover"
                        src={member.profile.src}
                        alt={member.name}
                      />
                      <div className="pt-12 pb-16 px-6 sm:px-12">
                        <h4 className="text-2xl text-white mb-2">{member.name}</h4>
                        <span className="text-red-200">{member.role}</span>
                        <p className="mt-8 text-white font-light">
                          {member.description}
                        </p>
                      </div>
                      <div className="pt-6 pb-7 px-6 sm:px-12 border-t border-gray-200">
                        <div className="flex items-center">
                          <Avatar
                            className="w-10 h-10 mr-4"
                            src={member.profile.src}
                            alt={member.name}
                          />
                          <span className="text-gray-300">{member.info[0]}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }



















          <div className="lg:hidden mt-16 text-center">
            <a className="inline-block mr-6" href="#">
              <svg
                width={11}
                height={20}
                viewBox="0 0 11 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L1 10L9 2"
                  stroke="#232126"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a className="inline-block" href="#">
              <svg
                width={12}
                height={20}
                viewBox="0 0 12 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L11 10L2 18"
                  stroke="#232126"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Gallery