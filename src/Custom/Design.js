import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './display.css';

const Design = () => {
    const [designs, setDesigns] = useState([]);

    useEffect(() => {
        fetchDesigns();
    }, []);

    const fetchDesigns = () => {
        axios
            .get('http://localhost:5000/custom/design')
            .then((res) => {
                console.log(res);
                setDesigns(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <h1>Designs</h1>
            <div className='item-container'>
                {designs.map((design) => (
                    <div className='card' key={design._id}>
                        <h3>{design.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Design;