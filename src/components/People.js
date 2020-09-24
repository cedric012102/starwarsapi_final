import React from 'react'

export default function People() {
    return (
        <div>
           <p>People</p> 
        </div>
    )
}



// import React from 'react';
// import { NewPerson } from './NewPerson';

// export const App = (props) => {
//     const { setPeople, updatePerson } = props;

//     const deletePerson = (personId) => {
//         const updatedPerson = {
//             ...setPeople,
//             persons: setPeople.persons.filter((x) => x._id !== personId)
//         };
//         updatePerson(updatedPerson);
//     }

//     const addNewPerson = (person) => updatePerson({ ...setPeople, persons: [...setPeople.persons, person]});

//         const persons = () => (
//             <ul>
//                 {setPeople.persons.map((person, index) => (
//                     <li key={index}>
//                         <label> {`${person.name} Height: ${person.height}`}</label>
//                         <button onClick={(e) => deletePerson(person._id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         );

//         return (
//             <div>
//                 <h1>{setPeople.name}</h1>
//                 {
//                     persons({ persons, setPeopleId: setPeople._id, deletePerson})
//                 }
//                 <NewPerson addNewPerson={addNewPerson} />
//             </div>
//         );
//     };

//     export default People;

    






     


