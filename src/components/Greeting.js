import React from "react";

const date = new Date();

const hours = date.getHours()
let timeOfDay

const styles = {
  fontSize: 20
}

if (hours < 5){
  timeOfDay = "gracious. Shouldn't you be asleep?"
  styles.color = "#dc143c" 
} else if (hours >= 5 && hours < 9) {
  timeOfDay = "timing. Early bird gets the worm."
  styles.color = "#8a2be2"  
} else if (hours >= 9 && hours < 12) {
  timeOfDay = "morning. Let's make a list"
  styles.color = "#8a2be2"  
} else if (hours >= 12 && hours < 17) {
  timeOfDay = "afternoon. Did you finish your list?"
  styles.color = "#8a2be2"
} else if (hours >= 17 && hours < 21) {
  timeOfDay = "evening. Let's work on your list!"
  styles.color = "#8a2be2"
} else {
  timeOfDay = "night. Good job on completing your list!!"
  styles.color = "#4169e1"
}

function Greeting () {
    return <h2 style={styles}> Good {timeOfDay}! </h2>
}

export default Greeting;