import { motion } from "framer-motion"

export default function Container({ children }: any) {
    return (
        <motion.div   dragConstraints={{ top: -50, bottom: 50 }}
        drag="y" data-dial-init="" className="fixed z-50 right-6 bottom-28 group opacity-70 hover:opacity-100">
     {children}
        </motion.div>
    )
}