import React from 'react';
import { useParams } from 'react-router-dom';

const PetDetail = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <div>
            <h1>Pet Detail</h1>
            <p>Pet ID: {id}</p>
        </div>
    );
};

export default PetDetail;
