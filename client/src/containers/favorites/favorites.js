import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFavorites } from '../../actions';

class Favorites extends Component {

    componentWillMount() {
        this.props.fetchFavorites();
    }

    render() {
        console.log(this.props.favorites);
        return (
            <React.Fragment>
                Favorites
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites
    }
}

export default connect(mapStateToProps, { fetchFavorites })(Favorites);