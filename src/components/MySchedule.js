import React from "react";
// import Greeting from "./Greeting";
import TodaysDate from "./TodaysDate";
import QuoteGenerator from "./QuoteGenerator";

function MySchedule () {
    return(
        <>
        <TodaysDate/>
        <br/>
        <br/>
        <QuoteGenerator/>
        {/* <Greeting/> */}
        <div style={{
            textAlign: "right",
            display: "inline-block",
            marginRight: "30px",
            width: "200px",
            margin: "0px auto"
            
            }}>
        <h1>Weekly Agenda</h1>
       <p style={{textAlign: "left"}}>Monday</p>
        <textarea style={{padding: "20px 15px"}}></textarea>

        <p style={{textAlign: "left"}}>Tuesday</p>
        <textarea style={{padding: "20px 15px"}}></textarea>

        <p style={{textAlign: "left"}}>Wednesday</p>
        <textarea style={{padding: "20px 15px"}}></textarea>

        <p style={{textAlign: "left"}}>Thursday</p>
        <textarea style={{padding: "20px 15px"}}></textarea>

        <p style={{textAlign: "left"}}>Friday</p>
        <textarea style={{padding: "20px 15px"}}></textarea>

        <p style={{textAlign: "left"}}>Saturday</p>
        <textarea style={{padding: "20px 15px"}}></textarea>

        <p style={{textAlign: "left"}}>Sunday</p>
        <textarea style={{padding: "20px 15px"}}></textarea>
        <br/>
        </div>
       </>
    );
}

export default MySchedule;