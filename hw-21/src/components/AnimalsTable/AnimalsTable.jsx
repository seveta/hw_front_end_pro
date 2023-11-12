import React, { Component } from 'react';

const animals = [
    { type: `turtle`, icon: `🐢` },
    { type: `octopus`, icon: `🐙` },
    { type: `fish`, icon: `🐠` },
    { type: `flamingo`, icon: `🦩` },
    { type: `penguin`, icon: `🐧` },
];

class AnimalTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAnimalIndex: null,
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(this.selectRandomAnimal, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    selectRandomAnimal = () => {
        const { selectedAnimalIndex } = this.state;
        const unselectedAnimals = animals.filter((animal, index) => index !== selectedAnimalIndex && !animal.selected);

        if (unselectedAnimals.length === 0) {
            clearInterval(this.intervalId);
            return;
        }

        const randomIndex = Math.floor(Math.random() * unselectedAnimals.length);
        const newSelectedIndex = animals.indexOf(unselectedAnimals[randomIndex]);

        this.setState({
            selectedAnimalIndex: newSelectedIndex,
        });
        animals[newSelectedIndex].selected = true;
    };

    render() {
        return (
            <table>
                <tbody>
                    {animals.map((animal, index) => (
                        <tr key={index} style={{ color: animal.selected ? 'green' : 'black', fontWeight: animal.selected ? 'bold' : 'normal' }}>
                            <td>{animal.type}</td>
                            <td>{animal.icon}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default AnimalTable;