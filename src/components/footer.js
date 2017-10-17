/**
 * Created by Daniel on 16/10/2017.
 */
import React from 'react'
import FilterLink from '../containers/filter_link'

const Footer = () => (
    <div className="col-lg-12 justify-content-center">
    <div className="btn-group" role="group">
        <FilterLink filter="SHOW_ALL"> All </FilterLink>
        <FilterLink filter="SHOW_ACTIVE"> Active </FilterLink>
        <FilterLink filter="SHOW_COMPLETED"> Completed </FilterLink>
    </div>
    </div>
)

export default Footer