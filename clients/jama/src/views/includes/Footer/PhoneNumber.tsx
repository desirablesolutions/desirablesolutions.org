import { FooterProps } from "@typings/index";

export default function FooterPhoneNumber({
  phoneNumber,
}: {
  phoneNumber: FooterProps["phoneNumber"];
}) {
  return (
    <span className="m-2 text-black text-md sm:text-center">{phoneNumber}</span>
  );
}
