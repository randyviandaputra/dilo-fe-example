import React, {useState} from 'react'

const Search = props => {
  const [search, setSearch] = useState('')
  const handleSearch = e => {
    setSearch(e.target.value)
    props.onSearch(search)
  }

  return (
    <input
      placeholder="Search ..."
      value={search}
      onChange={e => handleSearch(e)}
      style={styles.textInput}
    />
  )
}

const styles = {
  textInput: {
    height: '25px',
    fontSize: '14px',
    outline: 'none',
    border: '1px solid #20232a',
    padding: '5px',
    borderRadius: '5px',
    color: '#20232a',
  },
}

export default Search
