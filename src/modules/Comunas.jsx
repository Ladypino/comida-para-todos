import React, { Component } from "react";

class ComunasSelect extends Component{

	constructor(props){

		super(props);

		this.renderOption = this.renderOption.bind(this);
		this.valueChangeHandler = this.valueChangeHandler.bind(this);

		this.state = { value: "" };

	}

	componentDidUpdate(p,s) {
		// if the component updates because the region changed
		// set the value to an empty string
		if( p.comunas.length !== this.props.comunas.length ) {
			this.setState({ value:"" });
		}
	}

	renderOption(e,i){
		
		return(
			<option key={e.code} value={e.name}>{e.name}</option>
		);
	}

	// select change handler
	valueChangeHandler(e){

		const selection = e.target.value;
		// if the value is not an empty string, update the state
		if( selection !== "" ) {
			this.setState({ value:selection });
		} else {
			this.setState({ value:"" });
		}

		this.props.update(this.props.type, selection);

	}

	render(){
		
		return(
			<div className="form-group">
        <br/>
				<label className='titleForms'>¿En qué comuna te encuentras?</label>
        <br/><br/>
				<select className="selectFormHuertas" name="comuna" id="comuna-selector"
					onChange={this.valueChangeHandler}
				>
					<option defaultValue value="">Seleccione Comuna</option>
					{ this.props.comunas.map(this.renderOption) }
				</select>
			</div>
		);

	}

}

export default ComunasSelect;