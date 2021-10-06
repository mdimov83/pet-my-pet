import { Component } from 'react';
import CategoryNavigation from './CategoryNavigation/CategoryNavigation';
// import { useEffect, useState } from 'react';
import Pet from '../Pet/Pet';
import * as petsService from '../../services/PetService';
class Categories extends Component{
    constructor(props){
        super(props);
        this.state = {
            pets: [],
            currentCategory: 'all'
        };
    }
    componentDidMount(){
        petsService.getAll().then(pets => this.setState({pets: pets}));
    }
    componentDidUpdate(prevProps){

        if(prevProps.match.params.category == this.props.match.params.category){
            return;
        }

        petsService.getAll(this.props.match.params.category).then(pets => {
            
            this.setState({pets: pets, currentCategory: this.props.match.params.category });
        });
    }

    // const [pets, setPets] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:3004/pets')
    //     .then(res => res.json())
    //     .then(pets => setPets(pets))
    //     .catch(error => console.log(error));
    // }, []);
    render(){
        return (
            <section className="dashboard">
                
                <h1>Dashboard</h1>
    
                <CategoryNavigation/>
                <ul className="other-pets-list">
                    {this.state.pets.map(x => 
                    <Pet 
                    key = {x.id}
                    // {...x}
                    name = {x.name}
                    description = {x.description}
                    imageURL = {x.imageURL}
                    category = {x.category}
                    likes = {x.likes}
                    id = {x.id}
                    />
                    )}
                </ul>
            </section>
        );
    }
};
export default Categories;