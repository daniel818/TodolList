import { connect } from 'react-redux'
import { setVisibiltyFilter } from '../actions'
import Link from '../components/link'

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibiltyFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setVisibiltyFilter(ownProps.filter))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Link);


