import '../styles/globals.css';
import 'react-tippy/dist/tippy.css';
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
  }, []);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 900);
  });

  return (
    <>
      {!loading ? (
        <>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}
