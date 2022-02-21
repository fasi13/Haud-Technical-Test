import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import LandingPage from "./components/LandingPage/LandingPage.component";
import CreateUser from "./components/Users/CreateUser.component";
import store from "./redux/store";
import fbConfig from "./config/fireBase.config";
import { createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebase from "firebase/compat/app";
import "./index.css";
import Page404 from "./pages/ErrorPage/Page404.component";

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const App = () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <div className="px-24">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/create-user" element={<CreateUser />} />
            <Route path="edit-user/:userId" element={<CreateUser />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>
);

export default App;
