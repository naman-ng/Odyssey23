import '../styles/globals.css';
import 'react-tippy/dist/tippy.css';
import React, { useState } from "react";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Loader from "../components/Loader";

export const Context = React.createContext();

export default function App({ Component, pageProps }) {
  const [modal, isModal] = useState(true);
  const [modal2, isModal2] = useState(true);
  const [loading, setLoading] = React.useState(false);
  
  React.useEffect(() => {
    setLoading(true);
  }, []);

  React.useEffect(() =>{
    setTimeout(() => setLoading(false), 9000);
   })

  return (
    <>
      {!loading ? 
      (
        <>
          <Context.Provider value={{ modal, isModal, modal2, isModal2 }}>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </Context.Provider>
        </>
      ) : 
      (
        <Loader />
      )}
    </>
  );
}
