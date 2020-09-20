import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
    display: grid;
    grid-template-rows: 35px auto;
    grid-row-gap: 7px;
`;

const StyledInput = styled.input`
    padding: 0 10px;
    font-size: 15px;
    outline: none;
    border: 2px solid ${({ error }) => error ? 'red' : '#000'};
`;

const ValidationMessage = styled.p`
    font-size: 14px;
    color: red;
    margin-bottom: 5px;
`;

const Input = ({
    // events
    onBlur = null,
    onChange = null,
    // data
    placeholder = null,
    name = null,
    stateEntry = null,
}) => {
    const { value = '', error = '' } = stateEntry;

    const handleChange = ({ target }) => {
        const { value = '' } = target;
        onChange && onChange(value, name);
    }
    
    return (
        <InputWrapper>
            <StyledInput 
                onChange={handleChange}
                onBlur={() => onBlur(name)}
                type="input"
                placeholder={placeholder}
                name={name}
                value={value}
                error={error}
            />
            <ValidationMessage>
                { error && error }
            </ValidationMessage>
        </InputWrapper>
    )
}

export default Input;
