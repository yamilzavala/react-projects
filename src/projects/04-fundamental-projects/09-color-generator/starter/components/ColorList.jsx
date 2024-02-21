import React from 'react';
import { nanoid } from 'nanoid';
import SimgleColor from './SimgleColor';

const ColorList = ({colors}) => {
    return (
        <section className='colors'>
            {colors.map((color, idx) => {
                return <SimgleColor index={idx} color={color} key={nanoid()}/>
            })}
        </section>
    );
};

export default ColorList;