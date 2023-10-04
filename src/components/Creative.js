import React from "react";
import { motion } from "framer-motion";
import Masonry from "react-masonry-css";
import Header from "./Header";

const Creative = ({ openModal }) => {
   const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1,
   };

   return (
      <>
         <Header />
         <main className="creative">
            <motion.div
               className="content"
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               transition={{
                  type: "spring",
                  duration: 1,
                  delay: 0.5,
                  opacity: { duration: 0.7 },
               }}
               exit={{
                  scale: 0,
                  transition: { duration: 0.5 },
               }}
            >
               <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
               >
                  <div>
                     <img
                        src="./images/drawings/kobe.jpg"
                        data-title="Kobe Bryant"
                        alt="Kobe"
                        id="kobe"
                        onClick={openModal}
                        data-type="img"
                     ></img>
                  </div>
                  <div>
                     <img
                        src="./images/drawings/icecube.jpg"
                        data-title="Ice Cube"
                        alt="Ice Cube"
                        id="icecube"
                        onClick={openModal}
                     ></img>
                  </div>
                  <div>
                     <img
                        src="./images/drawings/basterds.jpg"
                        data-title="Inglorious Basterds"
                        alt="Basterds"
                        id="basterds"
                        onClick={openModal}
                        data-type="img"
                     ></img>
                  </div>
                  <div>
                     <img
                        src="./images/drawings/cornell.jpg"
                        data-title="Chris Cornell"
                        alt="Cornell"
                        id="cornell"
                        onClick={openModal}
                        data-type="img"
                     ></img>
                  </div>

                  <div>
                     <img
                        src="./images/drawings/tilman.jpg"
                        data-title="Pat Tillman"
                        alt="Pat Tillman"
                        id="tilman"
                        onClick={openModal}
                        data-type="img"
                     ></img>
                  </div>
                  <div>
                     <img
                        src="./images/drawings/daenerys.jpg"
                        data-title="Daenerys Targaryen"
                        alt="Daenerys Targaryen"
                        id="daenerys"
                        onClick={openModal}
                        data-type="img"
                     ></img>
                  </div>

                  <div>
                     <img
                        src="./images/drawings/edved.jpg"
                        data-title="Eddie Vedder (Autographed)"
                        alt="Eddie Vedder"
                        id="edved"
                        onClick={openModal}
                        data-type="img"
                     ></img>
                  </div>
                  <div>
                     <img
                        src="./images/drawings/layne.jpg"
                        data-title="Layne Staley"
                        alt="Layne Staley"
                        id="layne"
                        onClick={openModal}
                        data-type="img"
                     ></img>
                  </div>
                  <div>
                     <img
                        src="./images/drawings/jules.jpg"
                        data-title="Pulp Fiction"
                        alt="Jules"
                        id="jules"
                        onClick={openModal}
                        data-type="img"
                     ></img>
                  </div>
                  <div>
                     <img
                        src="./images/drawings/hq.jpg"
                        data-title="Harley Quinn"
                        alt="Harley"
                        id="hq"
                        onClick={openModal}
                        data-type="img"
                     ></img>
                  </div>
                  <div>
                     <img
                        src="./images/drawings/ww.jpg"
                        data-title="Walter White"
                        alt="Walter"
                        id="ww"
                        onClick={openModal}
                        data-type="img"
                     ></img>
                  </div>
                  <div>
                     <img
                        src="./images/drawings/ez.jpg"
                        data-title="Eazy E"
                        id="ez"
                        onClick={openModal}
                        data-type="img"
                        alt="Eazy"
                     ></img>
                  </div>
               </Masonry>
            </motion.div>
         </main>
      </>
   );
};

export default Creative;
