import React from "react";
import { easeInOut, motion } from "framer-motion";
import { drawings } from "./drawings";
// import { useEffect } from "react";
import Masonry from "react-masonry-css";

const Creative = ({ openModal }) => {
   const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1,
   };

   const variant = {
      initial: { opacity: 0, y: "100%" },
      enter: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring", stiffness: 30, damping: 7, ease: "easeInOut" } },
      exit: { y: "100%", opacity: 0, transition: { duration: 0.8 } },
   };

   return (
      <div className="container">
         <main className="creative">
            <motion.div
               className="content"
               initial={{ opacity: 0, y: "100%" }}
               animate={{ opacity: 1, y: 0 }}
               transition={{
                  type: "spring",
                  bounce: 0.34,
                  duration: 1,
                  opacity: { duration: 0.7 },
               }}
               exit={{
                  y: "100%",
                  opacity: 0,
                  transition: { duration: 0.5 },
               }}
            >
               <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
               >
                  {drawings.map(item => (
                     <div key={item.id}>
                        <img
                           src={item.src}
                           alt={item.name}
                           id={item.id}
                           onClick={openModal}
                           data-type="img"
                        />
                     </div>
                  ))}
               </Masonry>
            </motion.div>
         </main>
      </div>
   );
};

export default Creative;
