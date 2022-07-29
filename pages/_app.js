import { Provider } from "react-redux";
import { useEffect, useState } from "react";
import Login from "./login";
import store from "../store";
import Navbar from "../componets/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

const MyApp = ({ Component, pageProps }) => {

    const [isLogged, setIsLogged] = useState(false);

    const isLogin = () => {
        return localStorage.getItem('token');
    }

    useEffect(() => {
        setIsLogged(isLogin());
    }, [isLogged])

  return (
      <div className="container-fluid">
          <Provider store={store}>
          {isLogged ? (
              <>
                  <Navbar/>
                  <Component {...pageProps} />
              </>
          ):(
              <Login setIsLogged={setIsLogged}/>
          )}
          </Provider>
      </div>
  )
}

export default MyApp;
