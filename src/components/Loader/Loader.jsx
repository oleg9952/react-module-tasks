import React, { Component } from 'react';
import s from './Loader.module.scss'

export class Loader extends Component {
    render() {
        return <div className={s.loader}></div>
    }
}

export default Loader;
