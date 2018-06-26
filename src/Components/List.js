import React, {Component} from 'react';
import Cinema from './Cinema';
import {connect} from 'react-redux';


const list = [
    {
        picture: 'path_here',
        address: 'address 1',
        workingTime: '08:00 - 17:00',
        link: 'cinema1'
    },
    {
        picture: 'path_here',
        address: 'address 2',
        workingTime: '08:00 - 17:00',
        link: 'cinema2'
    },
    {
        picture: 'path_here',
        address: 'address 3',
        workingTime: '08:00 - 17:00',
        link: 'cinema3'
    }
];


class List extends Component {
    render() {
        return (
            <div className="cinema-list">
                {
                    list.map((cinema) => {
                        return <Cinema {...cinema} />
                    })
                }
            </div>
        )
    }
}

const matchStateToProps = (state) => {
    return {
        loggedUser: state.loggedUser
    }
};

const matchDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(matchStateToProps, matchDispatchToProps)(List);
