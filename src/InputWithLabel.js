import React from "react";

function InputWithLabel ( props, {children} ) {

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
                    value = {props.todoTitle}
                    onChange = {props.handleTitleChange}
                    />
                    </label>
         </>
    );
};

export default InputWithLabel;