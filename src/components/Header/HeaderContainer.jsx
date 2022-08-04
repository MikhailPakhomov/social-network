import React from "react";
import Header from "./Header";
import { setAuthUserData} from "../../redux/auth-reducer"


class HeaderContainer extends React.Component {

    componentDidMount () {
        
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me")
        .then((response) => {
            this.props.setAuthUserData(response.data);
            console.log(response.data);
        })
        }
    

    render(){
        return <Header />
    }
}

let mapStateToProps = (state) => ({
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData} ) (HeaderContainer);