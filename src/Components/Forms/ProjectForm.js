import React, { useState } from "react";

function ProjectForm() {

const [formData, setFormData] = useState({
name:"",
company:"",
email:"",
phone:"",
projectType:""
});

const [errors,setErrors] = useState({});
const [buttonText,setButtonText] = useState("Book a Call");
const [isSubmitting,setIsSubmitting] = useState(false);
const [responseMessage,setResponseMessage] = useState("");

const handleChange = (e)=>{

const {name,value} = e.target;

setFormData({
...formData,
[name]:value
});

setErrors({
...errors,
[name]:""
});

};

const validate = ()=>{

let newErrors={};

if(!formData.name) newErrors.name="Name is required";
if(!formData.company) newErrors.company="Company name is required";

if(!formData.email){
newErrors.email="Email required";
}
else if(!/\S+@\S+\.\S+/.test(formData.email)){
newErrors.email="Invalid email";
}

if(!formData.phone){
newErrors.phone="Phone required";
}
else if(!/^[0-9]{10}$/.test(formData.phone)){
newErrors.phone="Phone must be 10 digits";
}

if(!formData.projectType){
newErrors.projectType="Select project type";
}

return newErrors;

};

const handleSubmit = async(e)=>{

e.preventDefault();

const validationErrors = validate();

if(Object.keys(validationErrors).length>0){
setErrors(validationErrors);
return;
}

setButtonText("Processing...");
setIsSubmitting(true);

const grecaptcha = window.grecaptcha;

grecaptcha.ready(async()=>{

const token = await grecaptcha.execute(
'6LelbAYqAAAAAGvo7ZJ_k3t_R1z4rJKA7Aeu7ojF',
{action:'submit'}
);

const dataToSend = {
...formData,
recaptcha_token:token
};

try{

const response = await fetch(
"https://www.agency09.in/test_api/techProjectForm.php",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(dataToSend)
}
);

const data = await response.json();

if(data.status===1){

setFormData({
name:"",
company:"",
email:"",
phone:"",
projectType:""
});

//setResponseMessage(data.message);
window.location.href = 'https://www.agency09.in/tech-partner/tech-partner-thank-you';
}

}catch(error){
console.log(error);
}

setButtonText("Book a Call");
setIsSubmitting(false);

});

};

return(

<form className="tech-partner-hero-form" onSubmit={handleSubmit}>

<h3>Start Your Project</h3>
<p>Tell us what you're building. We'll shape the right solution.</p>

<div className="form-field">
{/* <label>Name*</label> */}
<input
type="text"
name="name"
placeholder="Name*"
value={formData.name}
onChange={handleChange}
/>
{errors.name && <span className="error-text">{errors.name}</span>}
</div>

<div className="form-field">
{/* <label></label> */}
<input
type="text"
name="company"
placeholder="Company*"
value={formData.company}
onChange={handleChange}
/>
{errors.company && <span className="error-text">{errors.company}</span>}
</div>

<div className="form-field">
{/* <label>Email*</label> */}
<input
type="email"
name="email"
placeholder="Email ID*"
value={formData.email}
onChange={handleChange}
/>
{errors.email && <span className="error-text">{errors.email}</span>}
</div>

<div className="form-field">
{/* <label>Phone*</label> */}
<input
type="tel"
name="phone"
placeholder="Phone Number*"
value={formData.phone}
onChange={handleChange}
/>
{errors.phone && <span className="error-text">{errors.phone}</span>}
</div>

<div className="form-field">
{/* <label>Project Type*</label> */}
<select
name="projectType"
value={formData.projectType}
onChange={handleChange}
>
<option value="">Project Type</option>
<option>Website</option>
<option>Ecommerce</option>
<option>Mobile App</option>
<option>SaaS</option>
<option>AI Automation</option>
</select>
{errors.projectType && <span className="error-text">{errors.projectType}</span>}
</div>

<button type="submit" disabled={isSubmitting} className="btn-primary">
{buttonText}
</button>

{responseMessage && <div className="form_response">{responseMessage}</div>}

</form>

);

}

export default ProjectForm;