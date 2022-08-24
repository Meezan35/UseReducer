import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "React":
      return { React: true };

    case "Angular":
      return { Angular: true };

    case "Next":
      return { Next: true };

    default:
      throw new Error();
  }
};

const Courses = () => {
  const initialState = { React: false, Angular: false, Nextjs: false };

  const [state, dispatch] = useReducer(reducer, initialState);

  // const handleReactPress = () => {
  //   dispatch({ type: "React" });
  // };
  const handleAngularPress = () => {
    dispatch({ type: "Angular" });
  };
  const handleNextPress = () => {
    dispatch({ type: "Next" });
  };

  return (
    <>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "React" });
          }}
        >
          React
        </button>
        <button onClick={handleAngularPress}>Angular</button>
        <button onClick={handleNextPress}>Next</button>
      </div>
      <p>
        {" "}
        I am learning{" "}
        {state.React
          ? "React"
          : state.Angular
          ? "Angular"
          : state.Next
          ? "Next"
          : "Not started"}{" "}
      </p>
    </>
  );
};

export default Courses;
