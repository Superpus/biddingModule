import {MenuItem, Select} from "@material-ui/core";
import React from "react";
import "../styles/CustomSelect.scss";

const CustomSelect = (props) => {
	return (
		<div className="CustomSelect">
			<Select
				classes={{
					root: "selComponent",
					select: "select",
					selectMenu: "selectMenu"
				}}
				labelId="select-label"
				id="select"
				value={props.value}
				onChange={props.handleChange}
			>
				{props.selectItems.map((item, key) =>
					<MenuItem
						classes={{
							root: "CustomMenuItem"
						}}
						key={key}
						value={item}
					>
						{item}
					</MenuItem>
				)}
			</Select>
		</div>
	);
}
export default CustomSelect;
