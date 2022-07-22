import PageLayout from "@layouts/PageLayout"

const ProjectsLayout = ({ children }) => {

    return (
        <PageLayout>
            <section className="bg-transparent">
                <div className="md:ml-10 py-24 md:py-40 ">
                    <div className="container px-4 mx-auto">
                        <div className="pb-20 mb-16 border-b border-gray-700">
                            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl text-white mb-32">
                                Yonder Airways
                            </h1>
                            <div className="flex flex-wrap -mx-4">
                                <div className="w-full lg:w-1/2 px-4 mb-32 lg:mb-0">
                                    <div className="max-w-md mx-auto relative">
                                        <img
                                            className="block mx-auto"
                                            src="wrexa-assets/images/women-photo-orange-couch.png"
                                            alt=""
                                        />
                                        <img
                                            className="absolute bottom-0 left-0 md:-ml-8 -mb-20"
                                            src="wrexa-assets/images/women-photo2.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 px-4">
                                    <div className="max-w-md mx-auto">
                                        <h1 className="font-heading text-5xl sm:text-6xl text-white mb-8">
                                            What you need, when you need it
                                        </h1>
                                        <p className="max-w-sm font-light text-xl text-white mb-8">
                                            The pond cras ornare, some chords for a three moments, like a
                                            sense of truth that comes from within.
                                        </p>
                                        <p className="font-light text-gray-600 mb-20">
                                            The pond cras ornare, some chords for a three moments, like a
                                            sense of truth that comes from within.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="max-w-xl 3xl:max-w-3xl mx-auto">
                                <div className="flex flex-wrap -mx-4">
                                    <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0">
                                        <h4 className="font-heading text-2xl text-white mb-8">
                                            One platform for you
                                        </h4>
                                        <p className="text-xl text-gray-200 font-light">
                                            Proin a tempor magna. Pellentesque malesuada nunc non augue
                                            fringilla some chords for.
                                        </p>
                                    </div>
                                    <div className="w-full md:w-1/2 px-4">
                                        <h4 className="font-heading text-2xl text-white mb-8">
                                            Workflow builder
                                        </h4>
                                        <p className="text-xl text-gray-200 font-light">
                                            Sed tellus tortor, rutrum id ante sagittis, eleifend
                                            sollicitudin est. Cras lacinia arcu vitae tortor semper, sit
                                            amet mollis arcu pharetra
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-40 ">
                <div className="container px-4 mx-auto">
                    <div className="pt-18 pb-16 px-12 rounded-2xl">
                        <h3 className="font-heading text-4xl text-white mb-5">New files</h3>
                        <div className="overflow-x-auto px-4 mb-14">
                            <table className="table-auto w-full min-w-max">
                                <thead>
                                    <tr>
                                        <th
                                            className="pb-2 border-b border-gray-700 text-left"
                                            scope="col"
                                        >
                                            <span className="text-sm font-normal text-gray-700">
                                                Catalog
                                            </span>
                                        </th>
                                        <th
                                            className="pb-2 border-b border-gray-700 text-left"
                                            scope="col"
                                        >
                                            <span className="text-sm font-normal text-gray-700">Notes</span>
                                        </th>
                                        <th
                                            className="pb-2 border-b border-gray-700 text-left"
                                            scope="col"
                                        >
                                            <span className="text-sm font-normal text-gray-700">
                                                All users
                                            </span>
                                        </th>
                                        <th
                                            className="pb-2 border-b border-gray-700 text-left"
                                            scope="col"
                                        >
                                            <span className="text-sm font-normal text-gray-700">
                                                Activity
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="py-5 pr-12" scope="row">
                                            <div className="flex pr-8 items-center">
                                                <img
                                                    className="block mr-8"
                                                    src="wrexa-assets/elements/folder1.svg"
                                                    alt=""
                                                />
                                                <span className="font-normal text-lg text-white">
                                                    All inspirations
                                                </span>
                                            </div>
                                        </th>
                                        <td className="py-5 pr-12">
                                            <div className="max-w-xs">
                                                <p className="text-xs text-gray-500">
                                                    The house like a sense of truth that comes from within. The
                                                    final game.
                                                </p>
                                            </div>
                                        </td>
                                        <td className="py-5 pr-14">
                                            <div className="relative flex pl-12 items-center">
                                                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-px h-3 rounded-full bg-gray-700" />
                                                <img
                                                    className="w-12 h-12 rounded-full object-cover"
                                                    src="wrexa-assets/images/avatar-women1.png"
                                                    alt=""
                                                />
                                                <img
                                                    className="-ml-2 mr-2 w-12 h-12 rounded-full object-cover"
                                                    src="wrexa-assets/images/avatar-male2.png"
                                                    alt=""
                                                />
                                                <a
                                                    className="inline-block text-gray-700 hover:text-gray-600"
                                                    href="#"
                                                >
                                                    <svg
                                                        width={25}
                                                        height={25}
                                                        viewBox="0 0 25 25"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle
                                                            cx="12.5"
                                                            cy="12.5"
                                                            r="11.25"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2.5"
                                                        />
                                                        <path
                                                            d="M16.6465 11.6543H13.4609V8.35352C13.4609 7.88086 13.0781 7.49805 12.6055 7.49805C12.1328 7.49805 11.75 7.88086 11.75 8.35352V11.6543H8.35156C7.88281 11.6543 7.5 12.0371 7.5 12.5098C7.5 12.9824 7.88281 13.3652 8.35547 13.3652H11.7539V16.6465C11.7539 17.1192 12.1367 17.502 12.6094 17.502C13.082 17.502 13.4648 17.1192 13.4648 16.6465V13.3652H16.6504C17.123 13.3652 17.5059 12.9824 17.5059 12.5098C17.5 12.0371 17.1191 11.6543 16.6465 11.6543Z"
                                                            fill="currentColor"
                                                        />
                                                        <defs>
                                                            <rect
                                                                width={10}
                                                                height={10}
                                                                fill="white"
                                                                transform="translate(7.5 7.5)"
                                                            />
                                                        </defs>
                                                    </svg>
                                                </a>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="text-xs text-gray-700">23/01/22</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="py-5 pr-12" scope="row">
                                            <div className="flex pr-8 items-center">
                                                <img
                                                    className="block mr-8"
                                                    src="wrexa-assets/elements/folder2.svg"
                                                    alt=""
                                                />
                                                <span className="font-normal text-lg text-white">
                                                    Photo.zip
                                                </span>
                                            </div>
                                        </th>
                                        <td className="py-5 pr-12">
                                            <div className="max-w-xs">
                                                <p className="text-xs text-gray-500">
                                                    Eg. a pond cras ornare, some chords for a three moments,
                                                    like a sense of truth proin posuere nisl sit amet.
                                                </p>
                                            </div>
                                        </td>
                                        <td className="py-5 pr-14">
                                            <div className="relative flex pl-12 items-center">
                                                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-px h-3 rounded-full bg-gray-700" />
                                                <img
                                                    className="w-12 h-12 rounded-full object-cover"
                                                    src="wrexa-assets/images/avatar-women1.png"
                                                    alt=""
                                                />
                                                <img
                                                    className="-ml-2 mr-2 w-12 h-12 rounded-full object-cover"
                                                    src="wrexa-assets/images/avatar-male2.png"
                                                    alt=""
                                                />
                                                <a
                                                    className="inline-block text-gray-700 hover:text-gray-600"
                                                    href="#"
                                                >
                                                    <svg
                                                        width={25}
                                                        height={25}
                                                        viewBox="0 0 25 25"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle
                                                            cx="12.5"
                                                            cy="12.5"
                                                            r="11.25"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2.5"
                                                        />
                                                        <path
                                                            d="M16.6465 11.6543H13.4609V8.35352C13.4609 7.88086 13.0781 7.49805 12.6055 7.49805C12.1328 7.49805 11.75 7.88086 11.75 8.35352V11.6543H8.35156C7.88281 11.6543 7.5 12.0371 7.5 12.5098C7.5 12.9824 7.88281 13.3652 8.35547 13.3652H11.7539V16.6465C11.7539 17.1192 12.1367 17.502 12.6094 17.502C13.082 17.502 13.4648 17.1192 13.4648 16.6465V13.3652H16.6504C17.123 13.3652 17.5059 12.9824 17.5059 12.5098C17.5 12.0371 17.1191 11.6543 16.6465 11.6543Z"
                                                            fill="currentColor"
                                                        />
                                                        <defs>
                                                            <rect
                                                                width={10}
                                                                height={10}
                                                                fill="white"
                                                                transform="translate(7.5 7.5)"
                                                            />
                                                        </defs>
                                                    </svg>
                                                </a>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="text-xs text-gray-700">23/01/22</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="py-5 pr-12" scope="row">
                                            <div className="flex pr-8 items-center">
                                                <img
                                                    className="block mr-8"
                                                    src="wrexa-assets/elements/folder3.svg"
                                                    alt=""
                                                />
                                                <span className="font-normal text-lg text-white">
                                                    Files from UO
                                                </span>
                                            </div>
                                        </th>
                                        <td className="py-5 pr-12">
                                            <div className="max-w-xs">
                                                <p className="text-xs text-gray-500">
                                                    Some chords for a three moments, like a sense of truth
                                                    proin.
                                                </p>
                                            </div>
                                        </td>
                                        <td className="py-5 pr-14">
                                            <div className="relative flex pl-12 items-center">
                                                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-px h-3 rounded-full bg-gray-700" />
                                                <img
                                                    className="w-12 h-12 rounded-full object-cover"
                                                    src="wrexa-assets/images/avatar-women1.png"
                                                    alt=""
                                                />
                                                <img
                                                    className="-ml-2 mr-2 w-12 h-12 rounded-full object-cover"
                                                    src="wrexa-assets/images/avatar-male2.png"
                                                    alt=""
                                                />
                                                <a
                                                    className="inline-block text-gray-700 hover:text-gray-600"
                                                    href="#"
                                                >
                                                    <svg
                                                        width={25}
                                                        height={25}
                                                        viewBox="0 0 25 25"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle
                                                            cx="12.5"
                                                            cy="12.5"
                                                            r="11.25"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2.5"
                                                        />
                                                        <path
                                                            d="M16.6465 11.6543H13.4609V8.35352C13.4609 7.88086 13.0781 7.49805 12.6055 7.49805C12.1328 7.49805 11.75 7.88086 11.75 8.35352V11.6543H8.35156C7.88281 11.6543 7.5 12.0371 7.5 12.5098C7.5 12.9824 7.88281 13.3652 8.35547 13.3652H11.7539V16.6465C11.7539 17.1192 12.1367 17.502 12.6094 17.502C13.082 17.502 13.4648 17.1192 13.4648 16.6465V13.3652H16.6504C17.123 13.3652 17.5059 12.9824 17.5059 12.5098C17.5 12.0371 17.1191 11.6543 16.6465 11.6543Z"
                                                            fill="currentColor"
                                                        />
                                                        <defs>
                                                            <rect
                                                                width={10}
                                                                height={10}
                                                                fill="white"
                                                                transform="translate(7.5 7.5)"
                                                            />
                                                        </defs>
                                                    </svg>
                                                </a>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="text-xs text-gray-700">23/01/22</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="text-center">
                            <a
                                className="inline-block w-full sm:w-auto px-7 py-4 text-white text-center font-medium border border-gray-700 hover:text-gray-200 rounded"
                                href="#"
                            >
                                See All
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative pb-52 bg-gray-900 overflow-hidden">
  <div className="bg-white h-16 mb-32 sm:mb-52">
    <div className="absolute top-0 left-1/2">
      <div className="w-px h-16 bg-gray-900" />
      <div className="w-px h-24 bg-white" />
    </div>
  </div>
  <div className="container px-4 mx-auto">
    <div className="flex items-center mb-20">
      <span className="font-heading text-xl text-white">08</span>
      <div className="mx-4 rounded-full bg-gray-200 h-1 w-1" />
      <span className="font-heading text-xl text-white">Customer review</span>
    </div>
    <div className="max-w-4xl 3xl:max-w-6xl mx-auto">
      <div className="sm:flex mb-12 items-center">
        <div className="flex-shrink-0 relative max-w-max mr-5 mb-6 sm:mb-0">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src="wrexa-assets/images/avatar.png"
            alt=""
          />
          <img
            className="absolute bottom-0 right-0 -mb-1 -mr-1"
            src="wrexa-assets/elements/miro-logo-small-icon.svg"
            alt=""
          />
        </div>
        <div className="sm:flex items-center sm:mr-20 mb-5 sm:mb-0">
          <h5 className="text-xl text-white font-mono">Helen Keller</h5>
          <div className="ml-4 pl-4 border-l border-gray-600">
            <span className="text-gray-600">Miro, Head of Design</span>
          </div>
        </div>
        <svg
          width={130}
          height={22}
          viewBox="0 0 130 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 8.70801H13.6583L11 0.458008L8.34166 8.70801H0L6.80168 13.548L4.19835 21.5414L11 16.5913L17.8017 21.5414L15.1983 13.548L22 8.70801Z"
            fill="white"
          />
          <path
            d="M49 8.70801H40.6583L38 0.458008L35.3417 8.70801H27L33.8017 13.548L31.1984 21.5414L38 16.5913L44.8017 21.5414L42.1983 13.548L49 8.70801Z"
            fill="white"
          />
          <path
            d="M76 8.70801H67.6583L65 0.458008L62.3417 8.70801H54L60.8017 13.548L58.1984 21.5414L65 16.5913L71.8017 21.5414L69.1983 13.548L76 8.70801Z"
            fill="white"
          />
          <path
            d="M103 8.70801H94.6583L92 0.458008L89.3417 8.70801H81L87.8017 13.548L85.1984 21.5414L92 16.5913L98.8017 21.5414L96.1983 13.548L103 8.70801Z"
            fill="white"
          />
          <path
            d="M130 8.70801H121.658L119 0.458008L116.342 8.70801H108L114.802 13.548L112.198 21.5414L119 16.5913L125.802 21.5414L123.198 13.548L130 8.70801Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="flex -mx-4 mb-32">
        <div className="w-10 px-4 relative">
          <div className="absolute top-0 left-0 ml-12 w-px h-full bg-gray-600" />
          <a
            className="absolute bottom-0 left-0 ml-12 w-10 h-10 mb-12 transform -translate-x-1/2 flex items-center justify-center bg-gray-900 border border-gray-600 rounded-full"
            href="#"
          >
            <svg
              width={12}
              height={7}
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2L6 6L2 2"
                stroke="#C6C9CF"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <div className="w-3/4 px-4">
          <div className="pl-8 sm:pl-20">
            <h2 className="font-heading text-3xl sm:text-5xl 3xl:text-7xl text-white mb-14">
              “Tried a lot, find the best Tried a lot. Choose this one.”
            </h2>
            <p className="text-gray-600 font-light">
              “A real nice tools and app. It comes with a few free plug-ins that
              will be more than enough for beginners. For more advansed users,
              you'll need to get a few more plug-ins for an extra cost on 3rd
              party websites, but Wressa makes it quite easy to set them up.”
            </p>
          </div>
        </div>
      </div>
      <div className="sm:flex items-center opacity-25">
        <div className="flex-shrink-0 relative max-w-max mr-5 mb-6 sm:mb-0">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src="wrexa-assets/images/avatar-male1.png"
            alt=""
          />
          <img
            className="absolute bottom-0 right-0 -mb-1 -mr-1"
            src="wrexa-assets/elements/miro-logo-small-icon.svg"
            alt=""
          />
        </div>
        <div className="sm:flex items-center sm:mr-20 mb-5 sm:mb-0">
          <h5 className="text-xl text-white font-mono">Helen Keller</h5>
          <div className="ml-4 pl-4 border-l border-gray-600">
            <span className="text-gray-600">Miro, Head of Design</span>
          </div>
        </div>
        <svg
          width={130}
          height={22}
          viewBox="0 0 130 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 8.70801H13.6583L11 0.458008L8.34166 8.70801H0L6.80168 13.548L4.19835 21.5414L11 16.5913L17.8017 21.5414L15.1983 13.548L22 8.70801Z"
            fill="white"
          />
          <path
            d="M49 8.70801H40.6583L38 0.458008L35.3417 8.70801H27L33.8017 13.548L31.1984 21.5414L38 16.5913L44.8017 21.5414L42.1983 13.548L49 8.70801Z"
            fill="white"
          />
          <path
            d="M76 8.70801H67.6583L65 0.458008L62.3417 8.70801H54L60.8017 13.548L58.1984 21.5414L65 16.5913L71.8017 21.5414L69.1983 13.548L76 8.70801Z"
            fill="white"
          />
          <path
            d="M103 8.70801H94.6583L92 0.458008L89.3417 8.70801H81L87.8017 13.548L85.1984 21.5414L92 16.5913L98.8017 21.5414L96.1983 13.548L103 8.70801Z"
            fill="white"
          />
          <path
            d="M130 8.70801H121.658L119 0.458008L116.342 8.70801H108L114.802 13.548L112.198 21.5414L119 16.5913L125.802 21.5414L123.198 13.548L130 8.70801Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  </div>
</section>

        </PageLayout>

    )
}

export default ProjectsLayout