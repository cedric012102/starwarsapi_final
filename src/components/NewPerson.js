// import React, { useState } from 'react';

// export default class NewPerson extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             people: [],
//             newPerson: {
//                 name: '',
//                 mass: '',
//                 height: '',
//                 hair_color: ''
//             }
//         };
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         this.setState({...this.state, people:[]})
//     }
//     returnPeople() {
//         return this.state.people;
//     }
//     handleName() {
//         this.setState({
//             ...this.state,
//             newPerson: {
//                 name: name,
//                 mass: this.state.newPerson.mass,
//                 height: this.state.newPerson.height,
//                 hair_color: this.state.newPerson.hair_color
//             }
//         })
//     }
//     handleMass(mass) {
//         this.setState({
//             ...this.state,
//             newPerson: {
//                 name: this.state.newPerson.name,
//                 mass: mass,
//                 height: this.state.newPerson.height,
//                 hair_color: this.state.newPerson.hair_color
//             }
//         })
//     }
//     handleHeight() {
//         this.setState({
//             ...this.state,
//             newPerson: {
//                 name: this.state.newPerson.name,
//                 mass: this.state.newPerson.mass,
//                 height: height,
//                 hair_color: this.state.newPerson.hair_color
//             }
//         })
//     }
//     handlehair_color() {
//         this.setState({
//             ...this.state,
//             newPerson: {
//                 name: this.state.newPerson.name,
//                 mass: this.state.newPerson.mass,
//                 height: this.state.newPerson.height,
//                 hair_color: hair_color
//             }
//         })
//     }
//     handleFormSubmit(e) {
//         let newPerson = this.state.newPerson;
//         let personData = JSON.stringify({
//             "newPerson": this.props.newPerson,
//             "mass": newPerson.mass,
//             "height": newPerson.height,
//             "hair_color": newPerson.hair_color
//         });
//         console.log(personData);
//         let myHeaders = new Headers();
//         let apiOptions_newPerson = {
//             method: 'POST',
//             headers: myHeaders,
//             body: personData
//         };
//             myHeaders.append("Content-Type", "application/json");
//             fetch("https://swapi.dev/api/people/", apiOptions_CreateComment)
//             .then(response => response.text())
//             .then(result => console.log(result))
//             .catch(error => console.log('error', error));
//     };
//     render() {
//         return (
//             <form>
//                 <div className="form-group">
//                     <label htmlFor="name">Name</label>
//                     <input type="name" onChange={(e) => this.handleName(e.target.value)} className="form-control" id="nameSection" placeholder="Enter Name"></input>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="comments">Mass</label>
//                     <input type="mass" onChange={(e) => this.handleMass(e.target.value)} className="form-control" id="massSection" placeholder="Enter Mass"></input>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="comments">Height</label>
//                     <input type="height" onChange={(e) => this.handleHeight(e.target.value)} className="form-control" id="heightSection" placeholder="Enter Height"></input>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="comments">Hair Color</label>
//                     <input type="hair_color" onChange={(e) => this.handlehair_color(e.target.value)} className="form-control" id="hair_colorSection" placeholder="Enter Hair Color"></input>
//                 </div>
//                 <button onClick = {(e) => this.handleFormSubmit(e)} className = "btn btn-primary">Submit</button>
//             </form>
//         )
//     }
// }