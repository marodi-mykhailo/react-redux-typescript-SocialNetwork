import React from 'react';

class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: true
    }

    activeEditMode() {
        this.setState({
            editMode: false
        })
    }
    deactivateEditMode() {
        this.setState({
            editMode: true
        })
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activeEditMode.bind(this)}>Its my status</span>
                    </div>
                    : <div>
                        <input onBlur={this.deactivateEditMode.bind(this)} autoFocus={true}/>
                    </div>
                }
            </div>
        );
    }
};

export default ProfileStatus;
