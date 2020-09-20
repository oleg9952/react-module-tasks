import React, { Component } from 'react';
import styled from 'styled-components';
import { darkBlue } from '../utils/constants'
import { required, lengthLimit, email } from '../utils/validators'
import Typography from './Typography';
import Input from './Input';
import Button from '../components/Button';

export class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valid: true,
            fields: [
                {
                    value: '',
                    name: 'First Name',
                    placeholder: 'First name...',
                    limit: 15,
                    error: '',
                    validators: [
                        required,
                        lengthLimit
                    ],
                },
                {
                    value: '',
                    name: 'Last Name',
                    placeholder: 'Last name...',
                    limit: 15,
                    error: '',
                    validators: [
                        required,
                        lengthLimit
                    ],
                },
                {
                    value: '',
                    name: 'Nickname',
                    placeholder: 'Nickname...',
                    limit: 15,
                    error: '',
                    validators: [
                        required,
                        lengthLimit
                    ],
                },
                {
                    value: '',
                    name: 'Email',
                    placeholder: 'Email...',
                    limit: 20,
                    error: '',
                    validators: [
                        required,
                        email
                    ],
                },
            ]
        }
    }

    updateInput = (value, target) => {
        const { fields } = this.state;
        const updatedFields = fields.map((field) => {
            if (field.name === target) {
                return {
                    ...field,
                    value
                }
            }
            return field;
        })

        this.setState(prevState => ({
            ...prevState,
            fields: [...updatedFields]
        }))
    }

    validate = (target) => {
        const { fields } = this.state;
        const stateEntry = fields.find(field => field.name === target);
        const { validators } = stateEntry;   
        const unvalid = validators
            .map(validator => validator(stateEntry))
            .find(({ valid }) => !valid); 

        const isFormValid = (newFields) => !!!newFields.map(({error}) => error).find(error => error.length > 0);
        
        if (unvalid) {
            const { fields } = this.state;
            const { valid, error } = unvalid;
            const updatedFields = fields.map(field => {
                if (field.name === target) {
                    return {
                        ...field,
                        error
                    }
                }
                return field;
            });
            this.setState({
                valid: isFormValid(updatedFields),
                fields: [...updatedFields]
            })
            return;
        }

        const updatedFields = fields.map(field => {
            if (field.name === target) {
                return {
                    ...field,
                    error: ''
                }
            }
            return field;
        });

        this.setState(({
            valid: isFormValid(updatedFields),
            fields: [...updatedFields]
        }));
    }

    resetForm = () => {
        this.setState(({fields}) => ({
            valid: true,
            fields: fields.map(field => ({ ...field, value: '' }))
        }))
    }

    handleSubmit = async () => {
        const { fields } = this.state;
        for await (const field of fields) this.validate(field.name);
        const { valid } = this.state;
        if (!valid) return;
        const formData = fields.map(({ name, value }) => ({ name, value }));
        console.log({formData});
        this.resetForm();
    }

    render() {
        const { fields } = this.state;

        return (
            <>
                <Typography 
                    heading
                    bold
                    uppercase
                    color={darkBlue}
                    fontSize="24px"
                    align="center"
                    value="Add a new account"
                />
                {fields.map(field => (
                    <Input
                        key={field.name} 
                        name={field.name}
                        placeholder={field.placeholder}
                        stateEntry={field}
                        onChange={this.updateInput}
                        onBlur={this.validate}
                    />
                ))}
                <Button 
                    center
                    bgColor="lightblue"
                    color="#fff"
                    value="Add"
                    onClick={this.handleSubmit}
                />
            </>
        )
    }
}

export default CreateForm;
