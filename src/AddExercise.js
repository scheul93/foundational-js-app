import React from 'react';
import appService from './services/appService';

class AddExercise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            url: '',
            concepts: '',
            category: ''
        }
    }

    onInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const payload = {...this.state};
        payload.concepts = this.state.concepts.split(',');
        appService.saveExercise(payload);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <fieldset>
                    <div className="field">
                        <label htmlFor="title" className="label">Exercise Title</label>
                        <input type="text" className="input" name="title" id="title" value={this.state.title} onChange={this.onInputChange.bind(this)} />
                    </div>
                    <div className="field">
                        <label htmlFor="category" className="label">
                            Category
                            <div className="hint">Chapter from You Don't Know JS</div>
                        </label>
                        <input type="text" className="input" name="category" id="category" value={this.state.category} onChange={this.onInputChange.bind(this)} />
                    </div>
                    <div className="field">
                        <label htmlFor="url" className="label">URL</label>
                        <input type="text" className="input" name="url" id="url" value={this.state.url} onChange={this.onInputChange.bind(this)} />
                    </div>
                    <div className="field">
                        <label htmlFor="concepts" className="label">
                            Concepts
                            <div className="hint">Enter multiple concepts with comma separation</div>
                        </label>
                        <input type="text" className="input" name="concepts" id="concepts" value={this.state.concepts} onChange={this.onInputChange.bind(this)} />
                    </div>
                    <button className="button">Add</button>
                    <button className="button" type="reset">Clear</button>
                </fieldset>
            </form>
        )
    }
}

export default AddExercise;