import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './display.css';

const Frosting = () => {
    const [frostings, setFrostings] = useState([]);

    useEffect(() => {
        fetchFrostings();
    }, []);

    const fetchFrostings = () => {
        axios
            .get('http://localhost:5000/custom/frosting')
            .then((res) => {
                console.log(res);
                setFrostings(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // function chooseFrosting(value) {
    //     let frosting = value;
    //     console.log(frosting);
    // }

    return (
        <div>
            <h1>Frostings</h1>
            <div className='item-container'>
                {frostings.map((frosting) => (
                    <div className='card' key={frosting._id}>
                        <h3>{frosting.name}</h3>
                        <p>{frosting.price}</p>
                        <Link to={`/custom/frosting/${frosting._id}`}>
                            <button>View</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Frosting;