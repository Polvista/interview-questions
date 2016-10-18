import * as React from 'react';

export class SomeComponent extends React.Component {

    someProp = '123';

    render() {
        return (
            <div>
                {this.someProp}
                <button>Log</button>
            </div>
        );
    }

    onClick() {
        console.log(this.someProp);
    }

}