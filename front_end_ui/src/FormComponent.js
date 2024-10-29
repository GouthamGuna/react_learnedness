// src/FormComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const FormComponent = () => {
    const [formData, setFormData] = useState({ name: '', email: '', age: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Input Form : ', formData); 
            const response = await axios.post('http://localhost:3001/submitForm', formData);
            console.log('Server Response : ', response);  // Show server response to the user. You can modify this according to your needs.  e.g., storing it in a database, sending a confirmation email, etc.  Here, we just log it to console for demonstration purposes.  In a real-world scenario, you would need to handle the response appropriately.  For example, you might want to redirect the user to a success page or display a success message to them.
            alert('Server Response : '+ response.data)
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit data');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Age:</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormComponent;
