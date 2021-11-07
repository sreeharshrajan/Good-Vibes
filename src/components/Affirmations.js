import React from 'react';
import '../assets/styles/index.css';
import '../assets/styles/affirmations.css';

import AffirmationsList from '../constants/affirmationsList';

const Affirmations = () => (
    <table className="fadeIn affirmationsTable">
        <tr>
            <th>Affirmations</th>
            <th>Type</th>
        </tr>
        {AffirmationsList.map(item => (
            <tr key={item.affirmation}>
                <td className="affirmation">{item.affirmation}</td>
                <td className="category">{item.category}</td>
            </tr>
        ))}
    </table>
);

export default Affirmations;