import React, {useRef, useEffect} from "react";
import PropTypes from "prop-types";


function InputWithLabel ( {
    children, 
    setInputValue,
    inputValue,
    editMode
} ) {

    const inputRef = useRef(null);

    const whitebox = {
        padding: "10px 2px",
        margin: "15px",
        textAlign: "center",
        border: "2px solid purple",
        borderRadius: "14px",
        width: "40%"
    };

    useEffect(() => {
            inputRef.current.focus();
    }, []);

    useEffect(() => {
        if(editMode.status){
            setInputValue(editMode.data.fields.Title);
        }
    }, [editMode, setInputValue])

    return (
        <>
            <label htmlFor="title"> {children} </label>
                <input 
                    style = {whitebox}
                    ref = {inputRef}
                    type="text" 
                    id="todoTitle"
                    name="title"
                    value={inputValue}
                    onChange={ (event) => setInputValue(event.target.value) }
                    />     
         </>
    );
};

InputWithLabel.propTypes = {
		children: PropTypes.string,
        todoTitle: PropTypes.array,
        handleTitleChange: PropTypes.func,
        setInputValue: PropTypes.func,
        inputValue: PropTypes.string,
        editMode: PropTypes.object,

}

export default InputWithLabel;