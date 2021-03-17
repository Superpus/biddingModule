import CustomSelect from "./CustomSelect";
import React from "react";
import "../styles/MarketWidget.scss";
import CustomCheckBox from "./CustomCheckBox";
import {Paper, Button} from "@material-ui/core"
import CustomInput from "./CustomInput";

const volumes = ([100, 50, 20, 10, 5]);

const MarketWidget = (props) => {
	const {state, handleStateChange} = props;

	return (
		<div className="MarketWidget">
			<div className="infoBar">
				<div className="val val1">Place order</div>
				<div className="val val2">{state.val1}</div>
				<div className="val val3">{state.val2}</div>
				<div className="val val4">{state.val3}</div>
				<div className="val val5">{state.val4}</div>
			</div>
			<div className="settings">
				<div className="role">Limit</div>
				<div className="selectContainer">
					<CustomSelect
						value={state.tradeSpeed}
						handleChange={(e) => handleStateChange({
							tradeSpeed: e.target.value
						})}
						selectItems={["slow", "normal", "quick"]}
					/>
					<CustomSelect
						value={state.tradeMarket}
						handleChange={(bool) => handleStateChange({
							tradeMarket: bool
						})}
						selectItems={["stop market"]}
					/>
				</div>
			</div>
			<div className="tradeModuleContainer">
				<div className="tradeModule">
					<Paper classes={{
						root: "tradeModulePaper"
					}}>
						<div className="trackingBar">
							<CustomCheckBox
								label="Track: "
								checked={state.buyDataTracked}
								handleChange={(bool) => handleStateChange({
									buyDataTracked: bool
								})}
							/>
							<CustomInput
								size="small"
								type="number"
								inputProps={{step: "0.1"}}
								value={state.buyDataTrackValue}
								handleChange={(e) => handleStateChange({
									buyDataTrackValue: e.target.value
								})}
							/>
						</div>
						<div className="actionContainer">
							<div className="actionInputs">
								<CustomInput
									size="normal"
									type="number"
									inputProps={{step: "1"}}
									value={state.currentLimitBuyVolume}
									handleChange={(e) => handleStateChange({
										currentLimitBuyVolume: e.target.value
									})}
								/>
								<CustomInput
									size="normal"
									type="number"
									inputProps={{step: "0.1"}}
									value={state.currentLimitBuyValue}
									handleChange={(e) => handleStateChange({
										currentLimitBuyValue: e.target.value
									})}
								/>
							</div>
							<div className="actions">
								<div className="miniActions">
									{volumes.map((vol, key) =>
										<Button
											key={key}
											classes={{root: "miniActionButton"}}
											onClick={() => handleStateChange({
												currentLimitBuyVolume: vol > 0 ? (vol * 1000) : 0
											})}
										>
											{`${vol}k`}
										</Button>
									)}
									<Button
										classes={{root: "miniActionButton"}}
										onClick={() => handleStateChange({
											currentLimitBuyVolume: 0
										})}
									>
										CC
									</Button>
								</div>
								<div className="mainAction">
									<Button classes={{root: "mainActionButton buy"}}>Limit</Button>
								</div>
							</div>
						</div>
						<div className="footer">
							<CustomCheckBox
								label="Post: "
								checked={state.buyDataPostChecked}
								handleChange={(bool) => handleStateChange({
									buyDataPostChecked: bool
								})}
							/>
							<CustomCheckBox
								label="Reduce: "
								checked={state.buyDataReduceChecked}
								handleChange={(bool) => handleStateChange({
									buyDataReduceChecked: bool
								})}
							/>
						</div>
					</Paper>
				</div>
				<div className="tradeModule">
					<Paper classes={{
						root: "tradeModulePaper"
					}}>
						<div className="trackingBar">
							<CustomCheckBox
								label="Track: "
								checked={state.sellDataTracked}
								handleChange={(bool) => handleStateChange({
									sellDataTracked: bool
								})}
							/>
							<CustomInput
								size="small"
								type="number"
								inputProps={{step: "0.1"}}
								value={state.sellDataTrackValue}
								handleChange={(e) => handleStateChange({
									sellDataTrackValue: e.target.value
								})}
							/>
						</div>
						<div className="actionContainer">
							<div className="actionInputs">
								<CustomInput
									size="normal"
									type="number"
									inputProps={{step: "1"}}
									value={state.currentLimitSellVolume}
									handleChange={(e) => handleStateChange({
										currentLimitSellVolume: e.target.value
									})}
								/>
								<CustomInput
									size="normal"
									type="number"
									inputProps={{step: "0.1"}}
									value={state.currentLimitSellValue}
									handleChange={(e) => handleStateChange({
										currentLimitSellValue: e.target.value
									})}
								/>
							</div>
							<div className="actions">
								<div className="miniActions">
									{volumes.map((vol, key) =>
										<Button
											key={key}
											classes={{root: "miniActionButton"}}
											onClick={() => handleStateChange({
												currentLimitSellVolume: vol > 0 ? (vol * 1000) : 0
											})}
										>
											{`${vol}k`}
										</Button>
									)}
									<Button
										classes={{root: "miniActionButton"}}
										onClick={() => handleStateChange({
											currentLimitSellVolume: 0
										})}
									>
										CC
									</Button>
								</div>
								<div className="mainAction">
									<Button classes={{root: "mainActionButton buy"}}>Limit</Button>
								</div>
							</div>
						</div>
						<div className="footer">
							<CustomCheckBox
								label="Post: "
								checked={state.sellDataPostChecked}
								handleChange={(bool) => handleStateChange({
									sellDataPostChecked: bool
								})}
							/>
							<CustomCheckBox
								label="Reduce: "
								checked={state.sellDataReduceChecked}
								handleChange={(bool) => handleStateChange({
									sellDataReduceChecked: bool
								})}
							/>
						</div>
					</Paper>
				</div>
			</div>
		</div>
	);
};
export default MarketWidget;
