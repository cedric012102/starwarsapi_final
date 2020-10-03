import React from 'react';

 class AddPerson extends React.Component {
//     constructor(props) {
//         super(props);

//         this.onSubmit = this.onSubmit.bind(this);
//     }

//     onSubmit(event) {
//         event.preventDefault();

//         console.log(this.nameInput.value, this.heightInput.value);
//     }


    

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h3>Add Person</h3>
                <input placeholder='Name'/>
                <input placeholder='Body Mass'/>
                <input placeholder='Height'/>
                <input placeholder='Hair Color'/>
                <button>Add</button>

                <hr />
            </form>
        );
    }
}

export default AddPerson;