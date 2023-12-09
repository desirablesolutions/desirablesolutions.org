import Image from "@components/Image";
import Item from "@components/Masonry/Item";
import FaxSVG from "@components/FaxSVG"
import PhoneSVG from "@components/PhoneSVG"

import ArrowSVG from "@components/ArrowSVG"
export function CalloutTemplate({ item }: any) {
  return (
    <Item sx="flex-start p-2" item={item}>
    <h1 className="w-full text-xl text-left text-white m-1 p-1 tracking-tight">{item.title}</h1>
    <h2 className="text-lg text-left text-white opacity-90 m-1 p-1">{item.subTitle}</h2>
    <blockquote className="text-lg text-left text-black p-1 m-1">{item.content}</blockquote>
    <a className="text-md text-left flex flex-row text-white m-1 p-1  border-white border-1" href={item?.link?.url ?? ""}>
      {item?.link?.label ?? ""}{!item?.link?.label ? <></>: <ArrowSVG/>} </a>
  </Item>
  )
}

export function ContactTemplate({ item }: any) {
  return (
    <Item sx="items-center mb-2" item={item}>
    <h1 className="px-6 py-2 text-xl text-left text-white">{item.title}</h1>
    <h2 className="px-4 text-lg text-left text-white opacity-90">{item.emailAddress}</h2>
    <blockquote className="text-xl text-left text-black flex flex-row">Phone {item.phoneNumber}</blockquote>
    <blockquote className="text-xl text-left text-black flex flex-row">Fax {item.faxNumber}</blockquote>
  </Item>
  )
}

export function ImageTemplate({ item }: any) {
  return (
        <Item item={item}>
      <Image className="object-cover w-full h-full bg-center rounded-sm" {...item} />
    </Item>
  )

}


export function DataTemplate({ item }: any) {
  return (
    <Item sx="flex-start" item={item}>
      <h1 className="text-4xl p-1 m-1">{item.title}</h1>
      <blockquote className="p-1 m-1">{item.content}</blockquote>
    </Item>
  )
}


export function HeaderTemplate({ item }: any) {
  return (
    <Item sx="bg-black" item={item} >
      <h1 className="p-2 text-2xl tracking-tight text-center text-white">{item.content}</h1>
    </Item>
  )
}


export function TextTemplate({ item }: any) {
  return (
    <Item item={item} >
      <h2 className="m-1 p-1">{item.content}</h2>
    </Item>
  )
}


export const Templates = {
  image: ImageTemplate,
  text: TextTemplate,
  header: HeaderTemplate,
  callout: CalloutTemplate,
  contact: ContactTemplate,
  data:DataTemplate,
};
