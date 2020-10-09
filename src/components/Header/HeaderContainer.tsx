import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getLoggedUserData, logOut} from "../../redux/authReducer";

type headerContainerType = {
    userLogin: string | null
    isAuth: boolean
    getLoggedUserData: () => void
    logOut: () => void
}

class HeaderContainer extends React.Component<headerContainerType> {
    componentDidMount() {
        this.props.getLoggedUserData()
    }

    render() {
        return <Header userLogin={this.props.userLogin} isAuth={this.props.isAuth} logOut={this.props.logOut}/>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        userLogin: state.auth.login,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {getLoggedUserData, logOut})(HeaderContainer)
