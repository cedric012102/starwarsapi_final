// import React from 'react';

//  class AddPerson extends React.Component {
//     constructor(props) {
//         super(props);

//         this.onSubmit = this.onSubmit.bind(this);
//     }

//     onSubmit(event) {
//         event.preventDefault();

//         console.log(this.nameInput.value, this.heightInput.value);
//     }


    

//     render() {
//         return (
//             <form onSubmit={this.onSubmit}>
//                 <h3>Add Person</h3>
//                 <input placeholder='Name'/>
//                 <input placeholder='Body Mass'/>
//                 <input placeholder='Height'/>
//                 <input placeholder='Hair Color'/>
//                 <button>Add</button>

//                 <hr />
//             </form>
//         );
//     }
// }

// export default AddPerson;

import React from 'react';
import { Link } from 'react-router-dom';
import {
Form,
FormGroup,
Label,
Input,
Button
} from 'reactstrap';

export const AddPerson = () => {
    return (
        
            <Form>
            <FormGroup>
            <Label>Name</Label>
            <Input type="text" placeholder="Enter Name"></Input>
            </FormGroup>
            <Button type="submit">Submit</Button>
            <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
            </Form>
        
    )
}

export default AddPerson;
