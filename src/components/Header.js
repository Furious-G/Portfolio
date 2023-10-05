import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Header = ({ location }) => {
   console.log(location);
   return (
      <div className="topBar">
         <div className="header">
            <motion.div
               className="headerLogo"
               initial={{ y: -200, duration: 1 }}
               animate={{ y: 0 }}
               transition={{
                  type: "spring",
                  duration: 1,
                  // x: 0,
                  // opacity: { duration: 0.7 },
               }}
               exit={{
                  y: -200,
                  transition: { duration: 1 },
               }}
            >
               <NavLink
                  to="/"
                  className="web"
                  initial={{ y: -200, duration: 1 }}
                  animate={{ y: 0 }}
                  transition={{
                     type: "spring",
                     duration: 1,
                     // x: 0,
                     // opacity: { duration: 0.7 },
                  }}
                  exit={{
                     y: -200,
                     transition: { duration: 1 },
                  }}
               >
                  <img
                     src="./images/lamias-logo.png"
                     alt="Lamias"
                  />
               </NavLink>
            </motion.div>
            <motion.nav
               initial={{ x: 200, opacity: 0, duration: 0.3 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{
                  type: "spring",
                  duration: 0.5,
                  // x: 0,
                  // opacity: { duration: 0.7 },
               }}
               exit={{
                  x: 200,
                  opacity: 0,
                  transition: { duration: 0.3 },
               }}
            >
               <ul>
                  <li>
                     <NavLink
                        to="/webdevelopment"
                        className="web"
                     >
                        Web Development
                     </NavLink>
                     {location === "/webdevelopment" && (
                        <motion.div
                           className="underline web"
                           layoutId="underline"
                        />
                     )}
                  </li>
                  <li>
                     <NavLink
                        to="/creative"
                        className="creative"
                     >
                        Creative
                     </NavLink>
                     {location === "/creative" && (
                        <motion.div
                           className="underline creative"
                           layoutId="underline"
                        />
                     )}
                  </li>
               </ul>
            </motion.nav>
         </div>
      </div>
   );
};

export default Header;
