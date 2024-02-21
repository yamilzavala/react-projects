import React from 'react';
import { toast } from 'react-toastify';

const SimgleColor = ({index, color}) => {
    const {hex, weight} = color;
    const saveToClipboard = async() => {
        if(navigator.clipboard) {
            try {
                await navigator.clipboard.writeText(`#${hex}`)
                toast.success(`#${hex} Color copied to clipboard`)
            } catch (error) {
                toast.error('Error copying clipboard')
            }
        } else {
            toast.error('Clipboard access not available')
        }
    }

    return (
        <article className={index > 10 ? 'color color-light' : 'color'} style={{background: `#${hex}`}} onClick={saveToClipboard}>
            <p className='percent-value'>#{hex}</p>
            <p className='color-value'>{weight}%</p>
        </article>
    );
};

export default SimgleColor;