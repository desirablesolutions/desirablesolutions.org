
import type { NavBarProps } from "@typings/index"
import Link from "@components/Link"
import Image from "@components/Image"

export function Container({ children }: any) {
  return (
    <main className="flex justify-center w-full border-b border-black">
      <div>
        {children}
      </div>
    </main>

  )
}
export default function Favicon({ favicon }: { favicon: NavBarProps["favicon"] }) {

  return (
    <Container>
      <Link url={favicon?.url}>
        <h1 className="object-contain pb-2 mt-2 text-[80px] text-center text-white h-28">
          Jama Riley
        </h1>
      </Link>
    </Container>
  )
}