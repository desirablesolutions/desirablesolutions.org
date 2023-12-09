import { FooterProps } from "@typings/index";

export default function AgencyTag({ tag }: { tag: FooterProps["tag"] }) {
  
  const { url, image } = tag;

  return (
    <a
      href={url}
      className="absolute mb-4 ease-in-out bg-black bg-opacity-50 rounded-full cursor-pointer bottom-10 hover:opacity-90 opacity-70 right-2 lg:left-2 h-14 w-14"
    >
      <img className="object-contain rounded-full h-14 w-14" src={image?.src} />
    </a>
  );
}
