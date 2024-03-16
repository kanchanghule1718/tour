import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
    const errors = useRouteError()
    return (
        <div>
            <h2 style={{ textAlign: 'center' }} >Page not found</h2>
            <h3 style={{ textAlign: 'center' }}>{errors.status}-{errors.statusText}</h3>
            <img style={{ marginLeft: "34%" }} src="https://www.cloudns.net/blog/wp-content/uploads/2023/10/Error-404-Page-Not-Found.png" alt='' height={300} width={500}></img>
        </div>
    )
}
