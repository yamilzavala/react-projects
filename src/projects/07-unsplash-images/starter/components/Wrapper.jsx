import React from 'react';

const Wrapper = ({children}) => {
    return (
        <div id='wrapperContainer' className="wrapper-container">
            {children}
        </div>
    );
};

export default Wrapper;