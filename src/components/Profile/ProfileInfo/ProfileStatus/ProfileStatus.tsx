import React, {ChangeEvent} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, any> {
    state = {
        editMode: true,
        status: this.props.status
    }

    activeEditMode = () => {
        this.setState({
            editMode: false
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: true
        })
        this.props.updateStatus(this.state.status)
    }
    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    onKeyDownHandler = (e: any) => {
        if (e.keyCode === 13) {
            this.setState({
                editMode: true
            })
            this.props.updateStatus(this.state.status)
        }
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<any>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activeEditMode}>{this.props.status}</span>
                    </div>
                    : <div>
                        <input onChange={(e) => this.onChangeHandler(e)} value={this.state.status}
                               onBlur={this.deactivateEditMode} onKeyDown={(e) => this.onKeyDownHandler(e)}
                               autoFocus={true}/>
                    </div>
                }
            </div>
        );
    }
};

export default ProfileStatus;
