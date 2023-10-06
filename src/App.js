import "./App.css";
// import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import AnimateRoutes from "./components/AnimateRoutes";
import { AnimatePresence } from "framer-motion";
import Modal from "./components/Modal";
import { useState } from "react";
let img;
let title;
let url;
let type = "";
let imgsrc = "";
let visitclass;
function App() {
   const [modalView, setModalView] = useState("");

   const openModal = e => {
      //change modal size depending on image

      if (e.target.dataset.type === "img") {
         type = "img";
         imgsrc = "drawings/";
      }
      img = e.target.id;
      title = e.target.dataset.title;
      url = e.target.dataset.url;

      //if no url then add a class to hide link
      if (!url) {
         visitclass = "visit";
      } else {
         visitclass = "";
      }

      setModalView(img);
      const modal = document.getElementById("modal");
      console.log(modal);
   };

   const closeModal = () => {
      setModalView("");
      type = "";
      imgsrc = "";
      visitclass = "";
   };

   return (
      <Router>
         <div className="App">
            <AnimateRoutes openModal={openModal} />
            <AnimatePresence mode="wait">
               {modalView && (
                  <Modal
                     img={img}
                     title={title}
                     url={url}
                     closeModal={closeModal}
                     type={type}
                     imgsrc={imgsrc}
                     visitclass={visitclass}
                  />
               )}
            </AnimatePresence>
         </div>
      </Router>
   );
}

export default App;
