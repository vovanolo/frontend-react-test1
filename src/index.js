import React from "react";
import ReactDOM from "react-dom";

const link = React.createElement(
  "a",
  { href: "http://www.google.com" },
  "Посилання на гугл"
);

const header = React.createElement("h1", {}, "Заголовок сайту");

ReactDOM.render(header, document.getElementById("root"));
