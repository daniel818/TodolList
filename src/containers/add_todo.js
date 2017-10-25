/**
 * Created by Daniel on 16/10/2017.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {addTodo} from '../actions'
import {currentUser} from '../actions';

class AddTodo extends Component {

    constructor(props){
        super(props);



    }

    renderField(field){
        const {meta: {touched ,error}} = field;

        return (
            <div>
                {touched? error : ""}
                <input
                    type="text"
                    className="form-control"
                    {...field.input}
                />
            </div>
        )
    }

    onSubmit(values){
        const currentUser = this.props.userObj;
        console.log(currentUser);
        this.props.addTodo(values.title,currentUser);
        values.title = '';

    }

    render(){

        const {handleSubmit} = this.props;
        return(

            <div className="col-lg-12">
                <form style={{display: "inline"}}  onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div className="input-group">

                        <Field
                            name="title"
                            component={this.renderField}
                        />

                        <span className="input-group-btn">
                            <button type="submit" className="btn btn-secondary"> Add Todo </button>
                        </span>

                    </div>
                </form>
            </div>
        )
    }
}

function validate(values){

    const errors = {};

    if(!values.title){
        errors.title = 'Enter a Todo';
    }

    return errors
}
export default reduxForm({
    validate,
    form: 'AddTodoForm'
})(
    connect(null,{addTodo})(AddTodo)
);