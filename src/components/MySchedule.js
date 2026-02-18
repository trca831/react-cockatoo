import React from "react";

import TodaysDate from "./TodaysDate";
import QuoteGenerator from "./QuoteGenerator";

function MySchedule() {
  return (
    <>
      <TodaysDate />
      <br />
      <br />
      <br />
      <QuoteGenerator />

      <div
        style={{
          textAlign: "right",
          display: "inline-block",
          marginRight: "30px",
          width: "200px",
          margin: "0px auto",
        }}
      ></div>
    </>
  );
}

export default MySchedule;
