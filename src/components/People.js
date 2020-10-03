import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import AddPerson from './AddPerson';
import PeopleItem from './PeopleItem';


// this.onAdd = this.onAdd.bind(this);
// onDelete(people.name); {
//     console.log(name);
// }



export default function People({ data }) {
    return (
        <div>
            <h1>People</h1>
            {data.map((people, index) => {
                return (
                    <Container key={index}>
                        <Card>
                            <Card.Header>{people.name}</Card.Header>
                            <Card.Body>
                                <Card.Subtitle>Body Mass</Card.Subtitle>
                                <Card.Text>{people.mass}</Card.Text>
                                <Card.Subtitle>Height</Card.Subtitle>
                                <Card.Text>{people.height}</Card.Text>
                                <Card.Subtitle>Hair Color</Card.Subtitle>
                                <Card.Text>{people.hair_color}</Card.Text>
                                {/* <button>Delete</button> */}
                                <PeopleItem />
                                {/* <PeopleItem 
                                 key={people.name}
                                 {...people}
                                /> */}
                            </Card.Body>
                        </Card>
                        <AddPerson 
                            // onAdd={this.onAdd}
                        />
                  </Container>
                
                )
            })}
           
        </div>
    )
  
}












