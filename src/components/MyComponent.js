import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'cao',
        address: 'caobang',
        age: 1000
    };

    //tap hop cac khoi html(jsx) chuyen thanh giao dien(UI)
    render() {
        return (
            <div> my name is {this.state.name}</div>
        )
    }
}
export default MyComponent;