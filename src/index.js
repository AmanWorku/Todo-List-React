import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoContainer from "./components/TodoContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TodoContainer />, document.getElementById("root"));
