import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
// import { HashRouter as Router } from "react-router-dom";
import AnimateRoutes from "./components/AnimateRoutes";
import Modal from "./components/Modal";
import { useState } from "react";
let img;
let title;
let url;
let type = "";
let imgsrc = "";
function App() {
   const [modalView, setModalView] = useState("");
   const openModal = e => {
      if (e.target.dataset.type) {
         type = e.target.dataset.type;
         imgsrc = "drawings/";
      }
      img = e.target.id;
      title = e.target.dataset.title;
      url = e.target.dataset.url;
      setModalView(img);
      const modal = document.getElementById("modal");
      console.log(modal);
   };

   const closeModal = () => {
      setModalView("");
   };
   return (
      <Router>
         <div className="App">
            <AnimateRoutes openModal={openModal} />
            {modalView && (
               <Modal
                  img={img}
                  title={title}
                  url={url}
                  closeModal={closeModal}
                  type={type}
                  imgsrc={imgsrc}
               />
            )}
         </div>
      </Router>
   );
}

export default App;
