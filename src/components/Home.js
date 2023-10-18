import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
   return (
      <div className="content">
         <main className="home">
            <div>
               <motion.div
                  className="logoBox"
                  initial={{ scale: 0, duration: 1 }}
                  animate={{ scale: 1 }}
                  transition={{
                     type: "spring",
                     duration: 1,
                     opacity: { duration: 0.7 },
                  }}
                  exit={{
                     scale: 0,
                     opacity: 0,
                     transition: { duration: 0.5 },
                  }}
               >
                  <img
                     src="./images/lamias-logo.png"
                     alt="Lamias"
                  />
               </motion.div>
               <motion.div
                  className="options"
                  initial={{ scale: 0, duration: 1 }}
                  animate={{ scale: 1 }}
                  transition={{
                     type: "spring",
                     duration: 1,
                     opacity: { duration: 0.7 },
                  }}
                  exit={{
                     scale: 0,
                     opacity: 0,
                     transition: { delay: 0.3, duration: 0.5 },
                  }}
               >
                  <Link
                     to="/webdevelopment"
                     className="web"
                  >
                     <div className="web">
                        <div>
                           <img
                              src="./images/cpu-icon.png"
                              alt="Web"
                           />
                           <img
                              src="./images/cpu-icon-hover.png"
                              alt="Web"
                           />
                        </div>
                        <span className="link">Web Development</span>
                     </div>
                  </Link>
                  <Link
                     to="/creative"
                     className="creative"
                  >
                     <div className="art">
                        <div>
                           <img
                              src="./images/art-icon.png"
                              alt="Art"
                           />
                           <img
                              src="./images/art-icon-hover.png"
                              alt="Art"
                           />
                        </div>
                        <span className="link">Art/Creative</span>
                     </div>
                  </Link>
               </motion.div>
            </div>
         </main>
      </div>
   );
};

export default Home;
