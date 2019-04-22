import React from 'react';

import Card from './Card';

const CardList = ({ robots }) => (
    <div>
        {robots
            .map(r => ({ key: r.id, ...r }))
            .map(robot =>
                <Card {...robot} />
            )}
    </div>
);

export default CardList;