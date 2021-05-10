import React, { Component, useUstate } from 'react'

class UsersClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };

    }

    componentWillMount() { }

    componentDidMount() {
        console.log('first');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                return response.json();

            })
            .then((jsonData) => {
                console.log(jsonData);
                this.setState({ users: jsonData });
            })
        console.log('third');



    }
    render() {
        return (
            <div>
                {
                    this.state.users.map((user) => {
                        return (
                        <div>
                            <p>
                                <strong>Name</strong> {user.name}
                            </p>
                            <p>
                                <strong>Username</strong> {user.username}
                            </p>
                            <p>
                                <strong>Email</strong> {user.email}
                            </p>
                            <hr></hr>
                        </div>)
                    }
                    )
                }
            </div>


        )
    }
}
export default UsersClass;