import type { FooterProps } from "@typings/index";
import { safeProperties } from "@utils/index";
import { default as AgencyTag } from "./AgencyTag";
import { default as Container } from "./Container";
import { default as Copyright } from "./Copyright";
import { default as EmailAddress } from "./EmailAddress";
import { default as Links } from "./Links";
import { default as PhoneNumber } from "./PhoneNumber";
import { defaultProps } from "./defaults";


export default function Footer({ footer }: { footer: FooterProps }) {
  
  const { copyright, tag, phoneNumber, emailAddress, links } = safeProperties({
    props: footer,
    defaults: defaultProps,
  });

  return (
    <Container>
      <Copyright copyright={copyright} />
      <AgencyTag tag={tag} />
      <PhoneNumber phoneNumber={phoneNumber} />
      <EmailAddress emailAddress={emailAddress} />
      <Links links={links} />
    </Container>
  );
}
