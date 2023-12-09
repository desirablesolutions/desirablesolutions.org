"use client";

import { default as Actions } from "./Actions";
import { default as Cover } from "./Cover";
import { default as Container } from "./Container";
import { safeProperties } from "@/controllers/utils";



export function defaultProps() {
  return {
    actions: [
      {
        label: "Home"
      }
    ]
}
}

export default function Navigator({ navigator }: any) {

  const { actions, cover } = safeProperties({ props: navigator, defaults: defaultProps });

  return (
    <Container>
      <Actions actions={actions} />
      <Cover cover={cover}/>
    </Container>
  );
}
