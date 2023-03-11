import React from "react";

function InputWithLabel ({children, todoTitle, handleTitleChange} ) {

    console.log(children);
    const inputRef = React.useRef();

    React.useEffect(() => {
        if(inputRef.current){
            inputRef.current.focus();
        }
    }, []);

    return (
        <>
            <label htmlFor="todoTitle"> {children} 
                <input 
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

export default InputWithLabel;