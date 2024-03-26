import axios from 'axios';
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({request}) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);    

    try {
        const response = await axios.post(newsletterUrl, data)
        toast.success(response.data.msg)        
        return redirect('/');
    } catch (error) {        
        toast.error(error?.response?.data?.msg)
        return error;
    }
} 