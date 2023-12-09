import { motion } from "framer-motion"


const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  show: {
    transition: {
      staggerChildren: 0.9,
      delayChildren: 1.3,
    },
  },

};

const animationsSx = {
  variants,
  initial: "hidden",
  animate: "enter",

  transition: {
    type: "easeInOut",
    duration: 1.8,
    staggerChildren: 1.17,
    staggerDirection: 1,
  },
};

export default function Reanimator(props: any) {

  let { children } = props

  return (
    <motion.div className="relative h-auto m-0 -mt-24 top-10" {...animationsSx}>
      {children}
    </motion.div>
  )
}