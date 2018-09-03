
import {h, Component} from "preact"
import {observer} from "mobx-preact"
import {MainMenuProps} from "./components-interfaces"
import {MainMenuStore} from "../stores/main-menu-store"

@observer
export class MainMenu extends Component<MainMenuProps> {

	private handleLookSensitivityChange = (
		event: {target: {value: number} & EventTarget} & Event & MouseEvent & KeyboardEvent
	) => {
		this.props.store.setLookSensitivity(event.target.value)
	}

	private renderLookSensitivitySetting() {
		const {store} = this.props
		const std = {
			min: 1,
			max: 100,
			value: store.lookSensitivity
		}
		return (
			<div class="setting look-sensitivity">
				<label>Look sensitivity</label>
				<div class="input-wrapper">
					<input
						className="look-sensitivity-range"
						type="range"
						{...std}
						onChange={this.handleLookSensitivityChange}
						onMouseMove={this.handleLookSensitivityChange}
						/>
				</div>
				<div class="input-wrapper">
					<input
						className="look-sensitivity-number"
						type="number"
						{...std}
						onChange={this.handleLookSensitivityChange}
						onKeyDown={this.handleLookSensitivityChange}
						/>
				</div>
			</div>
		)
	}

	render() {
		return (
			<div className="main-menu">
				{this.renderLookSensitivitySetting()}
			</div>
		)
	}
}
