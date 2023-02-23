import React from 'react'
import { useState } from 'react';
import { X } from 'phosphor-react';
import classes from "./SearchBarEl.module.css";

const SearchBarEl = (props) => {
    const [searchTerm, setSearchTerm] = useState("");

    
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        props.handleSearch(searchTerm)
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        props.onSearch(searchTerm);
      };

      console.log(searchTerm)
    

  return (
    <form onSubmit={handleSubmit}>
   
      <input
        type="text"
        placeholder="Search for an artist..."
        value={searchTerm}
        onChange={handleChange}
        className={classes.input}
      />
      
    </form>
  )
}

export default SearchBarEl