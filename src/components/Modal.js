import { useEffect } from "react";
import { motion } from "framer-motion";

const Modal = ({ img, title, closeModal, url }) => {
   useEffect(() => {}, []);

   return (
      <>
         <motion.div
            id="modal"
            className="modal"
            initial={{ opacity: 0, x: "-50%", y: "-100%" }}
            animate={{ opacity: 1, y: "-50%" }}
            transition={{
               type: "spring",
               // opacity: { duration: 0.7 },
            }}
            exit={{
               scale: 0,
               transition: { duration: 0.5 },
            }}
         >
            <div className="innerModal">
               <span className="closeM" onClick={closeModal}>
                  &#10006;
               </span>
               <div className="projectImg">
                  <img src={`./images/${img}.jpg`} alt="Lamias" />
               </div>
               <div className="projectInfo">
                  Client:
                  <h3>{title}</h3>
                  <br />
                  <a href={url} target="_blank" rel="noreferrer">
                     Visit Site
                  </a>
               </div>
            </div>
         </motion.div>
         <div className="backdrop" onClick={closeModal}></div>
      </>
   );
};

export default Modal;