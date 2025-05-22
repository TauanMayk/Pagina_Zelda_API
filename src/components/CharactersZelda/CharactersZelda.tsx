import { motion } from "framer-motion"

export const CharactersZelda = () => {
    <motion.section
  initial={{ scale: 0, rotate: 180, opacity: 0 }}
  animate={{ scale: 1, rotate: 0, opacity: 1 }}
  exit={{ scale: 0, rotate: -180, opacity: 0 }}
  transition={{ duration: 0.8, ease: "easeInOut" }}
>
<motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.5 }}
    className="card"
  >
    <img src="" alt="" />
    <p>
        
    </p>
  </motion.div>

</motion.section>
}