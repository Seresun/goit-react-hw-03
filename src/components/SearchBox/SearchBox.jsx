import PropTypes from 'prop-types'

const SearchBox = ({ value, onChange }) => {
  return <input value={value} onChange={onChange} />
}

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default SearchBox
