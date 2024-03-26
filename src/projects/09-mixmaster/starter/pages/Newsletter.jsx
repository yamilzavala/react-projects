import { Form, useNavigation } from 'react-router-dom';

const Newsletter = () => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    return (
        <Form className="form" method='POST'>
            <h4 style={{marginBottom: '2rem', textAlign: 'center'}}> our newsletter</h4>
            {/* name */}
            <div className="form-row">
                <label htmlFor="name" className='form-label'>
                    name
                </label>
                <input type="text" id="name" name="name" defaultValue="jhon" className='form-input'/>
            </div>
            {/* last name */}
            <div className="form-row">
                <label htmlFor="lastName" className='form-label'>
                    last name
                </label>
                <input type="text" id="lastName" name="lastName" defaultValue="snow" className='form-input'/>
            </div>
            {/* email */}
            <div className="form-row">
                <label htmlFor="email" className='form-label'>
                    email
                </label>
                <input type="email" id="email" name="email" defaultValue="test@test.com" className='form-input'/>
            </div>
            <button disabled={isSubmitting} type="submit" className="btn btn-block" style={{marginTop: '0.5rem'}}>{isSubmitting ? 'submitting' : 'submit'}</button>
        </Form>
    );
};

export default Newsletter;