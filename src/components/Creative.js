import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";

const Creative = () => {
   return (
      <>
         <Header />
         <main className="creative">
            <div className="content">
               <motion.div
                  className="grid"
                  initial={{ scale: 0, duration: 6 }}
                  animate={{ scale: 1 }}
                  transition={{
                     type: "spring",
                     delay: 0.4,
                     scale: 1,
                     // opacity: { duration: 0.7 },
                  }}
                  exit={{
                     scale: 0,
                     transition: { duration: 0.5 },
                  }}
               >
                  <div>coming soon</div>
               </motion.div>
            </div>
         </main>
      </>
   );
};

export default Creative;
