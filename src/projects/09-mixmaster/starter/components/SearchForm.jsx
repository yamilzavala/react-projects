import React from 'react';
import { Form, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SearchForm';

const SearchForm = ({searchTerm}) => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'isSubmitting';

    return (
        <Wrapper>
            <Form className="form">
                <input className="form-input" type="search" name='search' id='search' defaultValue={searchTerm} placeholder="vodka"/>
                <button className="btn" disabled={isSubmitting}>{isSubmitting ? 'submitting' : 'search'}</button>
            </Form>
        </Wrapper>
    );
};

export default SearchForm;