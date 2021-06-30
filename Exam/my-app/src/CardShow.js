import React from 'react'
import post from './list'
import Card from './Card'

function CardShow() {
    return (
        <div>
            <Card
            key = {post.id}
            name = {post.name}
            body = {post.body}
        />
        </div>
    )
}

function display() {
    return (
        <>
        {post.map(CardShow)}
        </>
    )
}

export default display;