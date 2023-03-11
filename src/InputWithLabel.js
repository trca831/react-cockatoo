import React from "react";

function InputWithLabel ( props, {children} ) {

    const inputRef = React.useRef();

    React.useEffect(() => {
        if(inputRef.current){
            inputRef.current.focus();
        }
    }, []);

    return (
        <>
            <label htmlFor="title"> {children} 
                <input 
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