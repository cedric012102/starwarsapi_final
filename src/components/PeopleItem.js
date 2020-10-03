import React from "react";
import People from "./People";


// class PeopleItem extends React.Component {
//     render() {
//         const { name, height } = this.props;

//         return (
//             <div>
//                 <span>{name}</span>
//                 {` | `}
//                 <span>{height}</span>
//                 {` | `}
//                 <button>Delete</button>
//             </div>
//         );
//     }
// }

// export default PeopleItem;

export default class Person extends React.Component {
    constructor(props){
        super(props);
        this.name = this.props.name;
        this.mass = this.props.mass;
        this.height = this.props.height;
        this.hair_color = this.props.hair_color;
        this.deletePerson = this.deletePerson.bind(this);
    }

deletePerson() {
    const ENDPOINT = 'https://swapi.dev/api/people/';
    fetch(ENDPOINT + this.props.id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => console.log(res))
}
componentDidMount() {
    console.log("We mounted up!")
}
render() {
    return <div className = "card-body">
                <div key={this.id}>
                    <h2>{this.name}</h2>
                    <h2>{this.mass}</h2>
                    <h2>{this.height}</h2>
                    <h2>{this.hair_color}</h2>
                </div>
                <button onClick={this.deletePerson.bind(this.id)} className="btn btn-warning">Delete</button>
            </div>
};
}
