import React from "react";
import { motion } from "framer-motion";

const WebDev = ({ openModal }) => {
   return (
      <div
         className="container"
         layoutId="test"
      >
         <main className="web">
            <div className="content">
               <motion.div
                  className="grid"
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                     type: "spring",
                     duration: 1,

                     opacity: { duration: 0.7 },
                  }}
                  exit={{
                     y: "100%",
                     opacity: 0,
                     transition: { duration: 0.5 },
                  }}
               >
                  <div>
                     <img
                        src="./images/mfl.jpg"
                        alt="MFL"
                        onClick={openModal}
                        id="mfl"
                        data-url="https://midwestfarmco.com/"
                        data-title="Midwest Farm & Land"
                     />
                  </div>
                  <div>
                     <img
                        src="./images/newton.jpg"
                        alt="Newton"
                        onClick={openModal}
                        id="newton"
                        data-title="Newton Group Transfers"
                        data-url="https://newtongrouptransfers.com/"
                     />
                  </div>
                  <div>
                     <img
                        src="./images/newsire.jpg"
                        alt="Newsie"
                        onClick={openModal}
                        id="newsire"
                        data-title="Local Newsie"
                        data-url="https://localnewsie.com/"
                     />
                  </div>
                  <div>
                     <img
                        src="./images/mfsa.jpg"
                        alt="MFSA"
                        onClick={openModal}
                        id="mfsa"
                        data-title="Maricopa Family Support Alliance"
                        data-url="https://maricopafamilysupportalliance.org/"
                     />
                  </div>
                  <div>
                     <img
                        src="./images/autopro.jpg"
                        alt="auto pro"
                        onClick={openModal}
                        id="autopro"
                        data-title="The Auto Professor"
                        data-url="https://theautoprofessor.com/"
                     />
                  </div>
                  <div>
                     <img
                        src="./images/qc.jpg"
                        alt="qc"
                        onClick={openModal}
                        id="qc"
                        data-title="Queen Creek Accounting"
                        data-url="https://queencreekaccounting.com"
                     />
                  </div>
                  <div>
                     <img
                        src="./images/cpiaz.jpg"
                        alt="cpiaz"
                        onClick={openModal}
                        id="cpiaz"
                        data-title="CPIAZ Realty"
                        data-url="https://cpiaz.com"
                     />
                  </div>
                  <div>
                     <img
                        src="./images/pl.jpg"
                        alt="pl"
                        onClick={openModal}
                        id="pl"
                        data-title="Precision Locating"
                        data-url="https://precision-locating.com"
                     />
                  </div>
                  <div>
                     <img
                        src="./images/5-0.jpg"
                        alt="5-0"
                        onClick={openModal}
                        id="5-0"
                        data-title="5-0 Productions"
                        data-url=""
                     />
                  </div>
               </motion.div>
            </div>
         </main>
      </div>
   );
};

export default WebDev;
