// import React, { useState } from 'react';
// import { People } from './People';

// export const NewPerson = (props) => {
//     const [name, setName] = useState('');
//     const [height, setHeight] = useState(undefined);

//     const handlePersonInput = (e) => {
//         const int = parseInt(e.target.value, 10);
//         setHeight(int >= 0 ? int : '');
//     }

//     const onSubmit = (e) => {
//         e.preventDefault();
//         if (name && height) {
//             props.addNewPerson({name, height});
//             setName('');
//             setHeight('');
//         } else {
//             console.log('invalid input');
//         }
//     };

//     return (
//         <div>
//             <h4>Let's Add A New Person</h4>
//             <form onSubmit={onSubmit}>
//                 <input
//                 type='text'
//                 placeholder='new name'
//                 onChange={(e) => setName(e.target.value)}
//                 value={name}
//                 />

//                 <input 
//                 type='text'
//                 placeholder='new height'
//                 onChange={handlePersonInput}
//                 value={height}/>

//                 <button type="submit">Add Extra Person</button>
//             </form>
//         </div>
//     )
// }

