import React, { useState, useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Related from './Related';
import './display.css'

// var { match } = useParams();

const Frosting = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios
            .get(
                `http://localhost:5000/custom/frosting/${id}`
            )
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }
    
    return(
        <div>
            <h1>Product details here</h1>
            <div className='product-container' key={data._id}>
                <h1>{data.name}</h1>
                <p>{data.price}</p>
            </div>
            <Related />
        </div>
    )
}

export default Frosting;