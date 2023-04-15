import React from "react";
import PropTypes from "prop-types";

function InputWithLabel ( {todoTitle, handleTitleChange, children} ) {

    const inputRef = React.useRef();

    const whitebox = {
        padding: "10px 2px",
        margin: "15px",
        textAlign: "center",
        border: "2px solid purple",
        borderRadius: "14px"
    };

    React.useEffect(() => {
        if(inputRef.current){
            inputRef.current.focus();
        }
    }, []);

    return (
        <>
            <label htmlFor="title"> {children} 
                <input 
                    style = {whitebox}
                    ref = {inputRef}
                    type="text" 
                    id="todoTitle"
                    name="title"
                    value = {todoTitle}
                    onChange = {handleTitleChange}
                    />
                    </label>
         </>
    );
};

InputWithLabel.propTypes = {
		children: PropTypes.string,
        todoTitle: PropTypes.array,
        handleTitleChange: PropTypes.func,
}

export default InputWithLabel;