import './ViewExercises.css';
import React from 'react';

const ViewExercises = props => {

    function renderTopics(concepts) {
        return (
            <ul>
                {concepts.map((c, index) => <li key={index}>{c}</li>)}
            </ul>
        )
    }

    function renderCards() {
        return props.exercises.map((exercise, index) => (
            <div className="card" key={index}>
                <a href={exercise.url} >
                    <h2>{exercise.title}</h2>
                    <div>Covers:</div>
                    {renderTopics(exercise.concepts)}
                </a>
            </div>
            
        ))
    }

    return (
        <div className="cards">
            {renderCards()}
        </div>
    )
}

export default ViewExercises;