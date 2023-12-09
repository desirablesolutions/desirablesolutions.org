import { classSet } from "@/controllers/utils";
import { MasonryItemProps } from "@/models/typings";
import { columnSpanSx, orderSx } from "@styles/index";
import { motion } from "framer-motion"

export function defaultSx() {
  return `z-10 h-full w-auto flex bg-[#C8C8C8] flex-grow 
 justify-stretch
  flex flex-col duration-500 ease-in-out hover:opacity-80 rounded-sm shadow-black`;
}

export default function Item({
  item,
  children,
  sx
}: { item: MasonryItemProps } & { children: any } & { sx?: string }) {
  

  const { span, order } = item

  return (
    <motion.div     initial={{ opacity: 0, scale: 0.97 }}
    animate={{ opacity: 1, scale: 0.999 }}
    transition={{ duration: 0.7 }}
      className={classSet([defaultSx(), sx, orderSx(order), columnSpanSx(span)])}
    >
      {children}
    </motion.div>
  );
}
