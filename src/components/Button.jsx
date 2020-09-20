import React from 'react';
import styled, { css } from 'styled-components';

const buttonStyle = css`
    padding: 5px 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const linkStyle = css`
    text-decoration: underline;
    background-color: transparent;
    color: blue;
`;

const ButtonStyled = styled.input`
    font-weight: ${({bold}) => bold ? 'bold' : 'normal'};
    font-size: ${({fontSize}) => fontSize};
    margin: ${({center}) => center ? '0 auto' : '0'};
    background-color: ${({bgColor}) => bgColor};
    color: ${({color}) => color};
    display: block;
    outline: none;
    border: none;
    margin-bottom: 10px;
    transition: .3s;
    cursor: pointer;
    ${({link}) => link ? linkStyle : buttonStyle};
`;

const Button = ({
    // Button type
    link = false,
    // styling
    bold = false,
    center = false,
    fontSize = '18px',
    bgColor='#fff',
    color="#000",
    // data
    value = 'Button',
    // events
    onClick = null
}) => {
    const renderButton = () => {
        return (
            <ButtonStyled 
                type="button"
                link={link}
                bold={bold}
                center={center}
                fontSize={fontSize}
                bgColor={bgColor}
                color={color}
                value={value}
                onClick={onClick}
            />
        )
    };

    return renderButton();
}

export default Button;