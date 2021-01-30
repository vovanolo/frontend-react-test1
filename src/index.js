import React from "react";
import ReactDOM from "react-dom";

const link = React.createElement(
  "a",
  { href: "http://www.google.com" },
  "Посилання на гугл"
);

ReactDOM.render(link, document.getElementById("root"));
