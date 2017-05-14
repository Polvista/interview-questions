import * as React from 'react';

export class SomeComponent extends React.Component {

    someProp = '123';

    render() {
        return (
            <div>
                <button onClick={this.onClick}>Log</button>
            </div>
        );
    }

    onClick() {
        console.log(this.someProp);
    }

}