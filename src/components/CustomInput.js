import React from "react";
import "../styles/CustomInput.scss";
import {InputBase} from "@material-ui/core";

const CustomInput = (props) => {
	let className = "CustomInput";
	if (props.size) {
		className += " " + props.size;
	}
	return (
		<InputBase
			inputProps={props.inputProps}
			classes={{
				root: className,
				input: "customInputElement"
			}}
			type={props.type}
			value={props.value}
			onChange={props.handleChange}
		/>
	);
}
export default CustomInput;
