import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import AddPerson from './AddPerson';
import PeopleItem from './PeopleItem';
import NewPerson from './NewPerson';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Heading } from './Heading';
import { Userlist } from './Userlist';
import { GlobalProvider } from '../context/GlobalState';


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

                            </Card.Body>
                        </Card>
                        <Heading />
                        <Userlist />
                        <div style={{ maxWidth: '30rem', margin: '4rem auto'}}>
                        <GlobalProvider>
                    <AddPerson />
                    <NewPerson />
                    </GlobalProvider>
                        </div>
                    </Container>

                )
            })}

        </div>
    )

}












