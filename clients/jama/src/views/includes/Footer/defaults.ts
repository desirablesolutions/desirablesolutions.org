import type { FooterProps } from "@typings/index";

export function defaultProps(override?: FooterProps): FooterProps {
  const props: FooterProps = !override
    ? {
        tag: {
          image: {
            src: "https://storage.ko-fi.com/cdn/useruploads/4a30523b-678b-4e1b-a85b-cb794cd29439.png",
          },
          url: "https://ko-fi.com/desirablesolutions",
        },
        phoneNumber: "(407) 493-2238",
        emailAddress: "therapy@drkaitwhitcomb.com",
        copyright: "©️ Dr. Kait Whitcomb LLC, 2023",
        links: [
          {
            label: "Home",
            url: "/",
          },
          {
            label: "About",
            url: "/about",
          },
          {
            label: "Services",
            url: "/services",
          },
          {
            label: "Contact",
            url: "/contact",
          },
        ],
      }
    : (override as FooterProps);

  return props as FooterProps;
}