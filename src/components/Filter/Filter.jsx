import React, { Component } from 'react';

class Filter extends Component {
    state = {
        id: null,
        name: '',
        number: '',
    };

    render() {
        return (
            <>
                <div>
                    <h2>Contacts</h2>
                    <label>
                        Find contact by name
                        <input onChange = {this.props.onChange} type="text" name="name" />
                    </label>
                </div>

                <div>
                    <ul></ul>
                </div>
            </>
        );
    }
}

export default Filter;
