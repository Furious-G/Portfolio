import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Creative from "./Creative";
import Home from "./Home";
import WebDev from "./WebDev";

const AnimateRoutes = ({ openModal }) => {
   const location = useLocation();

   return (
      <AnimatePresence mode="wait">
         <Routes location={location} key={location.key}>
            <Route path="/" element={<Home />} />
            <Route path="/webdevelopment" element={<WebDev openModal={openModal} />} />
            <Route path="/creative" element={<Creative />} />
         </Routes>
      </AnimatePresence>
   );
};

export default AnimateRoutes;
