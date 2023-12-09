import type { NavBarProps } from "@typings/index";


export function defaultProps(): NavBarProps {
    return {
      favicon: {
        image: {
          alt: "logo",
          src: "https://static.wixstatic.com/media/254c65_f4b64d6d825546f186dc0a4358ffa178~mv2.png/v1/fill/w_346,h_154,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Kait%20Whitcomb%20logo-04.png",
        },
        url: "https://drkaitwhitcomb.com",
      },
      links: [
        {
          name: "Home",
          url: "/",
        },
        {
          name: "About Me",
          url: "/about",
        },
        {
          name: "Services",
          url: "/services",
        },
        {
          name: "Contact",
          url: "/contact",
        },
      ],
    };
  }