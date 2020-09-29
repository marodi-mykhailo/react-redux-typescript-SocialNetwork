import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import axios from 'axios'
import {AppStateType} from "../../redux/redux-store";
import {authInitialStateType, setUserData} from "../../redux/authReducer";

type headerContaineType = {
    userLogin: string | null
    isAuth: boolean
    setUserData: (userData: authInitialStateType) => void
}

class HeaderContainer extends React.Component<headerContaineType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => {
                if(response.data.resultCode === 0){
                    debugger
                    this.props.setUserData(response.data.data)
                }

        })

    }

    render() {
        return <Header userLogin={this.props.userLogin} isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        userLogin: state.auth.login,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {setUserData})(HeaderContainer)
