import type { FooterProps } from "@typings/index";

export default function Copyright({
  copyright,
}: {
  copyright: FooterProps["copyright"];
}) {
  return (
    <span className="m-2 text-black text-md sm:text-center">{copyright}</span>
  );
}
