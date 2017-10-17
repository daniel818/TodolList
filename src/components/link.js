/**
 * Created by Daniel on 16/10/2017.
 */
import React from 'react'

const Link = ({ active, children, onClick }) => {
    if (active) {
        return <span>{children}</span>
    }

    return (
        <a
            href="#"
            onClick={e => {
                e.preventDefault();
                onClick()
            }}
            className="btn btn-secondary"
            role="button"
        >
            {children}
        </a>
    )
}


export default Link