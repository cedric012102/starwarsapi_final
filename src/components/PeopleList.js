// import React from 'react';
// import { NewPerson } from './NewPerson';

// export const PeopleList = (props) => {
//     const { people, updatePerson } = props;

//     const deletePerson = (personId) => {
//         const updatedPerson = {
//             ...people,
//             persons: people.persons.filter((x) => x._id !== personId)
//         };
//         updatePerson(updatedPerson);
//     }

//     const addNewPerson = (person) => updatePerson({ ...people, persons: [...people.persons, person]});

//         const persons = () => (
//             <ul>
//                 {people.persons.map((person, index) => (
//                     <li key={index}>
//                         <label> {`${person.name}`}</label>
//                         <button onClick={(e) => deletePerson(person._id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         );

//         return (
//             <div>
//                 <h1>{people.name}</h1>
//                 {
//                     persons({ persons, peopleId: people._id, deletePerson})
//                 }
//                 <NewPerson addNewPerson={addNewPerson} />
//             </div>
//         );
//     };

  