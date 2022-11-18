import SectionSx from "@styles/Section.sx";
import Image from "next/image"
import FadeAnimation from "../FadeAnimation";
import { Fade } from "react-awesome-reveal";

import { SocialIcon } from 'react-social-icons';

const Logo = ({ alt, src, url }) => (
    <div className="w-full md:w-auto px-4 mb-12 md:mb-0">
        <a href={url}>
            <Image height="75px" width="75px" src={src} alt={alt} />
        </a>
    </div>
)

const Footer = ({ socials, copyright, favicon, navLinks, email, phoneNumber, heading, terminalLinks, cta }) => {


    const Socials = () => {

        return (
            socials ? <div className="mt-8">

                {
                    socials.map((social, index) => {
                        return (
                            <a key={index} className="inline-flex items-center mr-2 hover:scale-90 transition-all hover:bg-opacity-60" href={social.url}>
                                <SocialIcon bgColor="#FFFFFF" url={social.url} />
                            </a>

                        )
                    })
                }

            </div> : <></>
        )
    }


    const Copyright = () => {

        return (
            <div className="w-full lg:w-2/3 xl:w-auto px-4 mb-8 2xl:mb-0">
                <span className="text-sm font-light">
                    {copyright.title}
                </span>
                <p className="max-w-xl text-gray-400 text-xs font-light mt-5">
                    {copyright.description}
                </p>
            </div>
        )
    }

    return (

        <section className="pt-24 md:pt-32 backdrop-blur-sm">
            <div className="container px-4 mx-auto">
                <div className="pb-24">
                    <div className="flex flex-wrap items-center justify-between -mx-4 mb-20">
                        <div className="w-full md:w-auto px-4 mb-12 md:mb-0">
                            <a href="#">
                                <img src="wrexa-assets/logos/wrexa-co-logo-name-dark.svg" alt="" />
                            </a>
                        </div>
                        <div className="w-full md:w-auto px-4">
                            <a
                                className="inline-block px-7 py-4 text-center font-medium bg-indigo-500 hover:bg-indigo-600 text-white rounded transition duration-250"
                                href="#"
                            >
                                Get started
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full xl:w-2/6 px-4 mb-16 xl:mb-0">
                            <div className="max-w-md">
                                <h2 className="font-heading text-4xl mb-10">
                                    Have any question? Feel free and text us
                                </h2>
                                <p className="font-light mb-6">The house by the pond cras ornare</p>
                                <div className="pb-8 border-b border-gray-200">
                                    <a
                                        className="inline-block mr-6 text-indigo-500 hover:text-indigo-600"
                                        href="#"
                                    >
                                        +44 0870 5576 00
                                    </a>
                                    <a
                                        className="inline-block text-indigo-500 hover:text-indigo-600"
                                        href="#"
                                    >
                                        hello@wrexa.co
                                    </a>
                                </div>
                                <div className="mt-8">
                                    <a className="inline-flex mr-12 items-center" href="#">
                                        <img
                                            className="mr-4"
                                            src="wrexa-assets/logos/brands/messenger.svg"
                                            alt=""
                                        />
                                        <span className="font-light">chatshxxk</span>
                                    </a>
                                    <a className="inline-flex items-center" href="#">
                                        <img
                                            className="mr-4"
                                            src="wrexa-assets/logos/brands/snapchat.svg"
                                            alt=""
                                        />
                                        <span className="font-light">snapshxxk</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 lg:w-1/4 xl:w-1/6 px-4 mb-8 lg:mb-0">
                            <h4 className="mb-12">About</h4>
                            <ul>
                                <li className="mb-4">
                                    <a className="inline-block text-gray-900 font-light" href="#">
                                        Story
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a className="inline-block text-gray-900 font-light" href="#">
                                        Creative Team
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a className="inline-block text-gray-900 font-light" href="#">
                                        Founders
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a className="inline-block text-gray-900 font-light" href="#">
                                        Why Us
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a className="inline-block text-gray-900 font-light" href="#">
                                        Our Mission
                                    </a>
                                </li>
                                <li>
                                    <a className="inline-block text-gray-900 font-light" href="#">
                                        Idea
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/2 lg:w-1/4 xl:w-1/6 px-4 mb-8 lg:mb-0">
                            <h4 className="mb-12">Application</h4>
                            <ul>
                                <li className="mb-4">
                                    <a className="inline-block text-gray-900 font-light" href="#">
                                        Download Desktop
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a className="inline-block text-gray-900 font-light" href="#">
                                        Download Mobile
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a className="inline-block text-gray-900 font-light" href="#">
                                        Sign Up
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a className="inline-block text-gray-900 font-light" href="#">
                                        Sign In
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a className="inline-block text-gray-900 font-light" href="#">
                                        Your history
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a className="inline-block text-gray-900 font-light" href="#">
                                        FAQ's
                                    </a>
                                </li>
                                <li>
                                    <a className="inline-block text-gray-900 font-light" href="#">
                                        Integrations
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/2 lg:w-1/4 xl:w-1/6 px-4">
                            <h4 className="mb-12">Product</h4>
                            <ul>
                                <li className="mb-4">
                                    <a className="inline-block text-gray-900 font-light" href="#">
                                        Plans
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a className="inline-block text-gray-900 font-light" href="#">
                                        Pricing
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a className="inline-block text-gray-900 font-light" href="#">
                                        Integration
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a className="inline-block text-gray-900 font-light" href="#">
                                        Sign Up
                                    </a>
                                </li>
                                <li>
                                    <a className="inline-block text-gray-900 font-light" href="#">
                                        Careers
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/2 lg:w-1/4 xl:w-1/6 px-4">
                            <h4 className="mb-12">Support</h4>
                            <ul>
                                <li className="mb-4">
                                    <a className="inline-block text-gray-900 font-light" href="#">
                                        FAQ's
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a className="inline-block text-gray-900 font-light" href="#">
                                        Live Chat
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a className="inline-block text-gray-900 font-light" href="#">
                                        Hotline +442234480171
                                    </a>
                                </li>
                                <li>
                                    <a className="inline-block text-gray-900 font-light" href="#">
                                        Messages
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-12">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap items-start justify-between -mx-4">
                        <div className="w-full lg:w-2/3 xl:w-auto px-4 mb-8 2xl:mb-0">
                            <span className="text-sm font-light">
                                © 2022 Wrexa. All rights reserved.
                            </span>
                            <p className="max-w-xl text-gray-400 text-xs font-light mt-5">
                                Cookies are important to the proper functioning of a site. To
                                improve your experience, we use cookies to remember log-in details
                                and provide secure log-in, collect statistics to optimize site
                                functionality, and deliver content tailored to your interests...
                            </p>
                        </div>
                        <div className="w-full lg:w-1/3 xl:w-auto px-4">
                            <div>
                                <a
                                    className="inline-block text-sm text-gray-500 hover:text-gray-600 font-light mr-4"
                                    href="#"
                                >
                                    Privacy Policy
                                </a>
                                <a
                                    className="inline-block text-sm text-gray-500 hover:text-gray-600 font-light mr-4"
                                    href="#"
                                >
                                    Responsible Disclosure
                                </a>
                                <a
                                    className="inline-block text-sm text-gray-500 hover:text-gray-600 font-light mr-4"
                                    href="#"
                                >
                                    Program Policy
                                </a>
                                <a
                                    className="inline-block text-sm text-gray-500 hover:text-gray-600 font-light"
                                    href="#"
                                >
                                    Terms and Conditions
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Footer
export { Logo }
