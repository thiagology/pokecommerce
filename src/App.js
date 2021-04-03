import React from 'react';
import Routes from './routes';
import AppContextProvider from './AppContextProvider';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.scss"

export default function App() {
  return (
    <AppContextProvider>
      <ToastContainer />
      <Routes/>
    </AppContextProvider>
  )
}
