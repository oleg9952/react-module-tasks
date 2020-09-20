import React, { Component } from 'react';
import s from './Controls.module.scss'

export class Controls extends Component {
    renderBtns = () => {
        const { handleSelection, selection } = this.props;
        const buttons = [
            {label: 'Posts', icon: 'fab fa-usps'},
            {label: 'Comments', icon: 'fas fa-comments'},
            {label: 'Albums', icon: 'fas fa-compact-disc'},
            {label: 'Users', icon: 'fas fa-users'}
        ];

        return (
            <>
                {buttons.map(({ label, icon }) => {
                    return (
                        <div className={`${s.button} ${selection && s.disabled}`}
                            onClick={() => handleSelection(label)}
                        >
                            <i className={icon}></i>
                            <p>{ label }</p>
                        </div>
                    )
                })}
            </>
        )
    }

    render() {
        return (
            <div className={s.controls}>
                {this.renderBtns()}
            </div>
        )
    }
}

export default Controls;
