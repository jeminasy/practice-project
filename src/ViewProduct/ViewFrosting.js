import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Frosting from './Frosting';
import Related from './Related';

function ViewFrosting () {
    return(
        <>
            <Frosting />
            <Related />
        </>
    )
}

export default ViewFrosting;