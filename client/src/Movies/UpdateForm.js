import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UpdateForm = props => {
    
    const initialItem = {
        id: props.match.params.id,
        title: "",
        director: "",
        metascore: ""
    }; 

    const [item, setItem] = useState(initialItem);
    const [stars, setStars] = useState([]);

    const changeHandler = event => {
        event.preventDefault();
        setItem({
            ...item,
            [event.target.name]: event.target.value
        });
    };

    const movieInfo = {
        ...item,
        ...stars
    }

    const changeHandlerStars = event => {
        event.preventDefault();
        setStars({
            ...stars,
            [event.target.name]: [event.target.value]
        });
    }

      const handleSubmit = e => {
        e.preventDefault();
        axios
            .put(`http://localhost:5000/api/movies/${item.id}`, movieInfo)
            .catch(err => console.log(err.response));
            props.history.push('/');
            window.location.href = window.location.href;

      };

    return (
        <div>
            <h2>Update Item</h2>
            <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="title"
            onChange={changeHandler}
            placeholder="title"
            value={item.title}
            />

            <input
            type="text"
            name="director"
            onChange={changeHandler}
            placeholder="director"
            value={item.director}
            />

            <input
            type="number"
            name="metascore"
            onChange={changeHandler}
            placeholder="metascore"
            value={item.metascore}
            />

            <input
            type="array"
            name="stars"
            onChange={changeHandlerStars}
            placeholder="stars"
            />

            <button className="md-button form-button">Update</button>
        </form>
    </div>
  );
}

export default UpdateForm;