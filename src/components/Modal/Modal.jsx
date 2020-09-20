import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import s from './Modal.module.scss';
import { placeholderApi } from '../../api'
import Item from '../Item/Item';

export class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            items: []
        }
    }

    componentDidMount() {
        this.setItems();
    }

    setItems = async () => {
        try {
            const { selection } = this.props;
            this.setState({ loading: true, items: [] })
            const data = await placeholderApi(selection);
            this.setState({ loading: false, items: [...data].slice(0, 10) })
            console.log(this.state.items)
        } catch (error) {
            console.log('Error retrieving data', error);
            this.setState({ loading: false })
        }
    }

    render() {
        const { items, loading } = this.state;
        const { selection } = this.props;

        return (
            <div className={s.modal}>
                <div className={s.closeModal} onClick={this.props.handleCloseModal}>
                    <div></div>
                    <div></div>
                </div>
                {loading && <Loader />}
                {items.map(item => (
                    <Item 
                        item={item}
                        selection={selection}
                    />
                ))}
            </div>
        )
    }
}

export default Modal;
