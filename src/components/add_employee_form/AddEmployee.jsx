import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEmployeeForm = () => {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate()
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value, });
    };
    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:5000/employees', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const response_message = await response.json()
                alert(`${response_message.message}`)

            }


        } catch (error) {
            alert("Adding employee failed")

        }

        setFormData({
            fname: '',
            lname: '',
            title_id: '',
            email: '',
            phone: '',
        });
    };

    return (
        <div>
            <h2>Add Employee</h2>
            <div className='row'>
            <div className="col-2">
            <button onClick={() => navigate(-1)} className="btn btn-xl btn-primary mt-2" type="button" >
             Back
            </button></div>
            <div className="col-8">
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>


<input required type="text" name="fname" value={formData.fname} onChange={handleChange} className='form-control mt-2' placeholder='First name' />
<br />
<input required placeholder='Lastname' type="text" name="lname" value={formData.lname} onChange={handleChange} className='form-control mt-2' />
<br />
<input required placeholder='Email' type="email" name="email" value={formData.email} onChange={handleChange} className='form-control mt-2' />
<br />
<input required placeholder='Phone number' type="number" name="phone" value={formData.phone} onChange={handleChange} className='form-control mt-2' />
<br />
<select
    required
    name="title_id"
    value={formData.title_id}
    onChange={handleChange}
    className='form-control mt-2'>
    <option value="">Select Title</option>
    <option value="1">Staff engineer Engineer</option>
    <option value="2">Senior Engineer</option>
    <option value="3">Junior Engineer</option>
    <option value="4">Tech Lead</option>
    <option value="5">Project Manager</option>
</select>
<br />
<button className='btn btn-success mt-3' type="submit">Add Employee</button><br />
</form>
            </div>


            
        </div>

        </div>
    );
};

export default AddEmployeeForm;
