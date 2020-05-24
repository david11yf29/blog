import  React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    componentDidMount() {
        // 會得到特定 id 作者的資訊
        this.props.fetchUser(this.props.userId);
    }

    render() {
        const user = this.props.users.find((user) => user.id === this.props.userId);

        if (!user) {
            return null;
        }

        return (
            <div className="header">{user.name}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (id) => dispatch(fetchUser(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);