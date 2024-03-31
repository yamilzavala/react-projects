import React from 'react';
import { Form, Link } from 'react-router-dom';
import FormInput from './FormInput';
import SubmitBtn from './SubmitBtn';

const RegisterForm = () => {

    return (
        <section className='h-screen grid place-items-center'>
            <Form method='POST' className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
                <h4 className="text-center text-3xl font-bold">Register</h4>
                <FormInput label='username' name='username' style={{border: '1px solid red'}} />
                <FormInput type='email' label='email' name='email'/>
                <FormInput type='password' label='password' name='password'/>
                <div className='mt-4'>
                    <SubmitBtn text='register'/>
                </div>
                <p className='text-center'>
                    Already a member?
                    <Link to='/login' className='ml-2 link link-hover link-primary capitalize'>login</Link>
                </p>
            </Form>
        </section>
    );
};

export default RegisterForm;