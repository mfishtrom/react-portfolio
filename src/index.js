import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from "./App.js";
import Research from "./routes/research.js";
import Graphic from "./routes/graphic.js";
import PrM from "./routes/pm.js";
import WeD from "./routes/wd.js";
import Other from "./routes/other.js";
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/research",
    element: <Research />,
  },
  {
    path: "/graphic",
    element: <Graphic />,
  },
  {
    path: "/projectmanagement",
    element: <PrM />,
  },
  {
    path: "/webdesign",
    element: <WeD />,
  },
  {
    path: "/other",
    element: <Other />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
