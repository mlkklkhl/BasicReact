"use client";

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

function RetreiveRights({ right, index }) {
    var no = index + 1;

    return (
        <tr>
            <td className="py-2 px-4">{no}</td>
            <td className="py-2 px-4">{right.Patient_Rights}</td>
            <td className="py-2 px-4">
                <button className="text-blue-500 hover:text-blue-700"><FontAwesomeIcon icon={faPenToSquare} /></button>
                <button className="text-red-500 hover:text-red-700 ml-2"><FontAwesomeIcon icon={faTrash} /></button>
            </td>
        </tr>
    );
}

export default function Rights() {

    const [rights, setRights] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3001/rights")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setRights(data);
                setLoading(false);
            }).catch((err) => {
                console.log(err);
            });
    }, []);

    if (loading) {
        return (
            <div className="container mx-auto px-4 pt-8 mt-8">
                <div>Loading...</div>
            </div>
        );
    }

    return (
        <div className="container max-w-7xl mx-auto px-4 pt-8 mt-8 my-20 pb-20">
            <h1 className="text-3xl font-bold mb-4">Rights</h1>
            <table className="min-w-full bg-white table-auto border-b-4 border-orange-500 shadow-lg">
                <thead className='bg-orange-500 text-white text-left'>
                    <tr>
                        <th className="py-2 px-4 border-b">No</th>
                        <th className="py-2 px-4 border-b">Right</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rights.map((right, index) => (
                        <RetreiveRights key={index} right={right} index={index} />
                    ))}
                </tbody>
            </table>
        </div>       
    );
}