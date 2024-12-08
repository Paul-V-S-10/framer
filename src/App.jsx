import React from 'react'
import { motion } from "framer-motion"
import './App.css'

const App = () => {
    return (
        <div className='app'>
            <motion.div 
            whileTap={{ scale: 1.5 }} 
            whileHover={{scale:1.3}} 
            animate={{opacity:1, y:0, backgroundColor:'grey'}} 
            initial={{ opacity:0, y:150}}
            exit={{ opacity: 0, y:150 }}
            // transition={{ ease: "easeOut", duration: 1 }}
            className='motion' >
                Paul
            </motion.div>
        </div>
    )
}

export default App