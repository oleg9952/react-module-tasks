import React, { Component } from 'react';
import s from './Item.module.scss';

export class Item extends Component {
    renderPost = () => {
        const { title, body } = this.props.item;
        return (
            <>
                <h3>{ title }</h3>
                <p>{ body }</p>
            </>
        )
    }

    renderComment = () => {
        const { email, body, name } = this.props.item;
        return (
            <>
                <h3>{ email }</h3>
                <p>{ name }</p>
                <p>{ body }</p>
            </>
        )
    }

    renderAlbum = () => {
        const { title } = this.props.item;
        return <h3>{ title }</h3>;
    }

    renderUser = () => {
        const { email, name, phone, website  } = this.props.item;
        return (
            <>
                <h3>{ email }</h3>
                <p>{ name }</p>
                <p><a href={`tel: ${phone}`}>{ phone }</a></p>
                <p><a href={`https://${website}`}>{ website }</a></p>
            </>
        )
    }

    render() {
        const { selection } = this.props;
        return (
            <div className={s.item}>
                {selection === 'posts' && this.renderPost()}
                {selection === 'comments' && this.renderComment()}
                {selection === 'albums' && this.renderAlbum()}
                {selection === 'users' && this.renderUser()}
            </div>
        )
    }
}

export default Item;
