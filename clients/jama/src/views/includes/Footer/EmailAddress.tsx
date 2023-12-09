import { FooterProps } from "@typings/index";

export default function FooterEmailAddress({
  emailAddress,
}: {
  emailAddress: FooterProps["emailAddress"];
}) {
  return (
    <span className="m-2 text-black text-md sm:text-center">
      {emailAddress}
    </span>
  );
}
