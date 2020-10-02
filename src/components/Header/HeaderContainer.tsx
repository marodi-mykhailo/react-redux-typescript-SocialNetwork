import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {authInitialStateType, setUserData} from "../../redux/authReducer";
import {authAPI} from "../../redux/api";

type headerContainerType = {
    userLogin: string | null
    isAuth: boolean
    setUserData: (userData: authInitialStateType) => void
}

class HeaderContainer extends React.Component<headerContainerType> {
    componentDidMount() {
        authAPI.me()
            .then(response => {
                if(response.data.resultCode === 0){
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
