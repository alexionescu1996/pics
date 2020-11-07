import React from 'react';

const users = [
    {id: 1, name: 'Leanne Graham'},
    {id: 2, name: 'Ervin Howell'},
    {id: 3, name: 'Clementine Bauch'},
    {id: 4, name: 'Patricia Lebsack'}
];

export default class UserNames extends React.Component {
    render() {
        return (
            <ul>
                {this.getNames()}
            </ul>
        );
    }

    getNames() {

        let names = users.map(({id, name}) => {
            return <li key={id}>{name}</li>
        });

        return <ul>{names}</ul>;
    }
}

