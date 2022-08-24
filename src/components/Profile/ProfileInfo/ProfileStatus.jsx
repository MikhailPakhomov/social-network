import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            value: "У меня все хорошо",
            editMode: false
        }

        this.activateEditMode = this.activateEditMode.bind(this);
        this.deactivateEditMode = this.deactivateEditMode.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    activateEditMode() {
        this.setState({ editMode: true })
    }
    deactivateEditMode() {
        this.setState({ editMode: false })
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (<div>
            {!this.state.editMode &&
                <div className={s.profileStatus} onDoubleClick={this.activateEditMode}>{this.state.value}</div>}
            {this.state.editMode &&
                <div className={s.profileStatus}>
                    <input type="text" value={this.state.value}
                           onChange={this.handleChange}
                           autoFocus={true}
                           onBlur={this.deactivateEditMode}>
                    </input>
                </div>}
        </div>)
    }
}

export default ProfileStatus;