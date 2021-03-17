import {Checkbox, Button} from "@material-ui/core";
import React from "react";
import "../styles/CustomCheckBox.scss";

const CustomCheckBox = (props) => {
	return (
		<Button
			classes={{
				root: "CustomCheckBox"
			}}
			onClick={() => props.handleChange(!props.checked)}
		>
			{props.label &&
			<div className="label">
				{props.label}
			</div>
			}
			<Checkbox
				classes={{
					root: `checkBoxEl ${props.checked ? "checked" : "unChecked"}`
				}}
				checked={props.checked}
				name="checked"
				color="primary"
			/>
		</Button>
	);
};
export default CustomCheckBox;
