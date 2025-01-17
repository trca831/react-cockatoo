import React, {useState, useEffect} from "react";

const QuoteGenerator = () => {
    const [quote, setQuote] = useState("");

    useEffect(() => {
        fetch("https://api.quotable.io/random")
          .then((response) => response.json())
          .then((data) => {
            setQuote(`${data.content} —${data.author}`);
          });
      }, []);
    
      const handleClick = () => {
        fetch("https://api.quotable.io/random")
          .then((response) => response.json())
          .then((data) => {
            setQuote(`${data.content} —${data.author}`);
          });
      };
    
      return (
        <div>
            <p style={{
              borderStyle: "dotted",
              borderColor: "black",
              backgroundColor: "pink",
              margin: "30px"

            }}>{quote}</p>
          <button onClick={handleClick}>Generate Quote</button>
          
        </div>
      );
    };
    
    export default QuoteGenerator;