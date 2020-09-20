import React from 'react';
import styled, { css } from 'styled-components';

const sharedStyles = css`
    font-weight: ${({bold}) => bold ? 'bold' : 'normal'};
    font-style: ${({italic}) => italic ? 'italic' : 'normal'};
    font-size: ${({fontSize}) => fontSize};
    color: ${({color}) => color};
    text-align: ${({align}) => align};
    text-transform: ${({uppercase}) => uppercase ? 'uppercase' : 'none'};
    margin-bottom: ${({heading}) => heading ? '15px' : '0px'};
`;

const Heading = styled.h1`
    ${sharedStyles}
`;

const Paragraph = styled.p`
    ${sharedStyles}
`;

const Email = styled.a`
    ${sharedStyles}
`;

const Typography = ({ 
    // Typography type
    heading = false, 
    paragraph = false,
    email = false,
    
    // styling
    bold = false, 
    italic = false,
    uppercase = false,
    fontSize = '18px', 
    color = '#000', 
    align = 'left',
    // data
    value = 'Typography',
    href = '#'
}) => {
    const renderHeading = () => (
        <Heading
            heading={heading}
            bold={bold}
            italic={italic}
            fontSize={fontSize}
            color={color}
            align={align}
            uppercase={uppercase}
        >
            { value }
        </Heading>
    );

    const renderParagraph = () => (
        <Paragraph
            bold={bold}
            italic={italic}
            fontSize={fontSize}
            color={color}
            align={align}
            uppercase={uppercase}
        >
            { value }
        </Paragraph>
    );

    const renderEmail = () => (
        <Email
            bold={bold}
            italic={italic}
            fontSize={fontSize}
            color={color}
            align={align}
            uppercase={uppercase}
            href={`mailto: ${href}`}
        >
            { href !== '#' && value === 'Typography' ? href : value }
        </Email>
    );

    return (
        <>
            {heading && renderHeading()}
            {paragraph && renderParagraph()}
            {email && renderEmail()}            
        </>
    )
}

export default Typography;
