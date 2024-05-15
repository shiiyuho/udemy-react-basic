import "./Child.css";
import React from "react";
const Child = () => {
  console.log(React);
  return (
    <React.Fragment>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa odit,
        dolore sunt ratione magnam repudiandae vero, illo excepturi
        reprehenderit a molestiae consequuntur corporis. Et itaque accusantium,
        quidem voluptates corrupti sequi.
      </p>
    </React.Fragment>
  );
};

export default Child;
