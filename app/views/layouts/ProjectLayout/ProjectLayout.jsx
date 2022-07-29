import HomeLayout from "@layouts/HomeLayout"

const ProjectLayout = ({ children }) => {

    return (
        <HomeLayout>
            <section className="pt-24 md:pt-40 pb-24">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap -mx-4 mb-20">
                        <div className="w-full xl:w-1/3 px-4 mb-16 xl:mb-0">
                            <div className="flex flex-col h-full items-start px-6 sm:px-12 pt-16 pb-24 bg-gray-800 rounded-2xl">
                                <div className="w-full mb-16 pb-2 border-b border-gray-700">
                                    <h4 className="font-heading text-4xl text-white">Files</h4>
                                </div>
                                <div className="flex mb-14 items-center">
                                    <img
                                        className="block mr-8"
                                        src="wrexa-assets/elements/folder1.svg"
                                        alt=""
                                    />
                                    <span className="text-lg text-white">All inspirations</span>
                                </div>
                                <div className="flex mb-14 items-center">
                                    <img
                                        className="block mr-8"
                                        src="wrexa-assets/elements/folder2.svg"
                                        alt=""
                                    />
                                    <span className="text-lg text-white">Bathroom design</span>
                                </div>
                                <div className="flex mb-20 items-center">
                                    <img
                                        className="block mr-8"
                                        src="wrexa-assets/elements/folder3.svg"
                                        alt=""
                                    />
                                    <span className="text-lg text-white">Songs</span>
                                </div>
                                <a
                                    className="inline-block w-full sm:w-auto px-7 py-4 mt-auto text-center font-medium bg-indigo-500 hover:bg-indigo-600 text-white rounded transition duration-250"
                                    href="#"
                                >
                                    All files
                                </a>
                            </div>
                        </div>
                        <div className="w-full xl:w-2/3 px-4">
                            <div className="px-6 sm:px-12 pt-16 pb-24 bg-gray-800 rounded-2xl">
                                <div className="sm:flex justify-between items-center mb-10 pb-2 border-b border-gray-700">
                                    <h4 className="font-heading text-4xl text-white mb-4 sm:mb-0">
                                        Teamwork
                                    </h4>
                                    <div className="pr-6 overflow-hidden border border-gray-700 rounded">
                                        <select
                                            className="pl-6 py-2 bg-gray-800 text-gray-600 outline-none"
                                            aria-label="New select example"
                                            style={{ maxWidth: "max-content" }}
                                        >
                                            <option selected="">New</option>
                                            <option value={1}>Old</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="overflow-x-auto px-4 mb-14">
                                    <table className="table-auto w-full min-w-max">
                                        <thead />
                                        <tbody>
                                            <tr>
                                                <th className="py-5" scope="row">
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
                                                <td className="py-5">
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
                                                <td className="px-12 py-5">
                                                    <span className="text-sm font-light text-gray-700">
                                                        Today, 9:44 AM
                                                    </span>
                                                </td>
                                                <td className="py-5">
                                                    <a
                                                        className="inline-flex items-center text-green-800 hover:text-green-900"
                                                        href="#"
                                                    >
                                                        <svg
                                                            width={14}
                                                            height={11}
                                                            viewBox="0 0 14 11"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M7.89471 0L6.81484 0.972812L11.0771 4.8125L0 4.8125L0 6.1875L11.0771 6.1875L6.81484 10.0272L7.89471 11L14 5.5L7.89471 0Z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                        <span className="ml-3">Details</span>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="py-5" scope="row">
                                                    <div className="flex pr-8 items-center">
                                                        <img
                                                            className="block mr-8"
                                                            src="wrexa-assets/elements/folder2.svg"
                                                            alt=""
                                                        />
                                                        <span className="font-normal text-lg text-white">
                                                            Photos.zip
                                                        </span>
                                                    </div>
                                                </th>
                                                <td className="py-5">
                                                    <div className="relative flex px-12 items-center">
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
                                                <td className="px-12 py-5">
                                                    <span className="text-sm font-light text-gray-700">
                                                        Today, 9:44 AM
                                                    </span>
                                                </td>
                                                <td className="py-5">
                                                    <a
                                                        className="inline-flex items-center text-green-800 hover:text-green-900"
                                                        href="#"
                                                    >
                                                        <svg
                                                            width={14}
                                                            height={11}
                                                            viewBox="0 0 14 11"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M7.89471 0L6.81484 0.972812L11.0771 4.8125L0 4.8125L0 6.1875L11.0771 6.1875L6.81484 10.0272L7.89471 11L14 5.5L7.89471 0Z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                        <span className="ml-3">Details</span>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="py-5" scope="row">
                                                    <div className="flex pr-8 items-center">
                                                        <img
                                                            className="block mr-8"
                                                            src="wrexa-assets/elements/folder3.svg"
                                                            alt=""
                                                        />
                                                        <span className="font-normal text-lg text-white">
                                                            Songs that feel like winter
                                                        </span>
                                                    </div>
                                                </th>
                                                <td className="py-5">
                                                    <div className="relative flex px-12 items-center">
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
                                                <td className="px-12 py-5">
                                                    <span className="text-sm font-light text-gray-700">
                                                        Today, 9:44 AM
                                                    </span>
                                                </td>
                                                <td className="py-5">
                                                    <a
                                                        className="inline-flex items-center text-green-800 hover:text-green-900"
                                                        href="#"
                                                    >
                                                        <svg
                                                            width={14}
                                                            height={11}
                                                            viewBox="0 0 14 11"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M7.89471 0L6.81484 0.972812L11.0771 4.8125L0 4.8125L0 6.1875L11.0771 6.1875L6.81484 10.0272L7.89471 11L14 5.5L7.89471 0Z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                        <span className="ml-3">Details</span>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div>
                                    <a
                                        className="inline-block w-full sm:w-auto px-7 py-4 mb-4 sm:mb-0 sm:mr-4 text-center font-medium bg-indigo-500 hover:bg-indigo-600 text-white rounded transition duration-250"
                                        href="#"
                                    >
                                        Sign in
                                    </a>
                                    <a
                                        className="inline-block w-full sm:w-auto px-7 py-4 text-white text-center font-medium border border-gray-700 hover:text-gray-200 rounded"
                                        href="#"
                                    >
                                        More Scores
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <a
                            className="relative inline-flex items-center justify-center w-32 h-32 text-white hover:text-gray-200"
                            href="#"
                        >
                            <img
                                className="absolute top-0 left-0 h-full w-full object-contain"
                                src="wrexa-assets/elements/circle-border.svg"
                                alt=""
                            />
                            <svg
                                width={12}
                                height={32}
                                viewBox="0 0 12 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.3109 -2.9239e-07L5.3109 29.4165L0.974389 25.1693L-1.88224e-07 26.1236L6 32L12 26.1236L11.0256 25.1693L6.6891 29.4165L6.6891 -2.32147e-07L5.3109 -2.9239e-07Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </HomeLayout>

    )
}

export default ProjectLayout