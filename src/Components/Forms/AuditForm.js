import React, { useState } from "react";

function AuditForm() {

const [formData, setFormData] = useState({
  email: "",
  workEmail: "",
  website: ""
});

const [errors, setErrors] = useState({});
const [buttonText, setButtonText] = useState("REQUEST FREE AUDIT");
const [responseMessage, setResponseMessage] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);



const handleChange = (e) => {

const { name, value } = e.target;

setFormData({
...formData,
[name]: value
});

setErrors({
...errors,
[name]: ""
});

};



const validate = () => {

let newErrors = {};

if (!formData.email) {
newErrors.email = "Email is required";
}
else if (!/\S+@\S+\.\S+/.test(formData.email)) {
newErrors.email = "Invalid email format";
}

if (!formData.workEmail) {
newErrors.workEmail = "Work Email is required";
}
else if (!/\S+@\S+\.\S+/.test(formData.workEmail)) {
newErrors.workEmail = "Invalid work email";
}

if (!formData.website) {
newErrors.website = "Website URL is required";
}
else if (!/^https?:\/\/.+\..+/.test(formData.website)) {
newErrors.website = "Enter valid website URL";
}

return newErrors;

};



const handleSubmit = async (e) => {

e.preventDefault();

const validationErrors = validate();

if (Object.keys(validationErrors).length > 0) {
setErrors(validationErrors);
return;
}

setIsSubmitting(true);
setButtonText("Processing...");


const grecaptcha = window.grecaptcha;

grecaptcha.ready(async () => {

const token = await grecaptcha.execute(
"6LelbAYqAAAAAGvo7ZJ_k3t_R1z4rJKA7Aeu7ojF",
{ action: "submit" }
);

const dataToSend = {
...formData,
recaptcha_token: token
};

try {

const response = await fetch(
"https://www.agency09.in/test_api/techAuditForm.php",
{
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(dataToSend)
}
);

const data = await response.json();

if (data.status === 1) {

setFormData({
email: "",
workEmail: "",
website: ""
});

//setResponseMessage(data.message);
window.location.href = 'https://www.agency09.in/tech-partner/tech-partner-thank-you';

}

} catch (error) {
console.log(error);
}

setIsSubmitting(false);
setButtonText("REQUEST FREE AUDIT");

});

};



return (

<form className="audit-form" onSubmit={handleSubmit}>

<div className="label-pill"><img src="https://www.figma.com/api/mcp/asset/eda3cf04-4f88-4046-9c1d-93e0503b9f8e" alt="" />Complimentary · No commitment</div>
<h3>REQUEST YOUR FREE AUDIT</h3>
<p>Share the basics. Our senior technology team will prepare a tailored review.</p>

<div className="audit-field">

{/* <label>Email*</label> */}

<input
type="email"
name="email"
placeholder="Email ID*"
value={formData.email}
onChange={handleChange}
className={errors.email ? "input-error" : ""}
/>

{errors.email && (
<span className="error-text">{errors.email}</span>
)}

</div>



<div className="audit-field">

{/* <label>Work Email*</label> */}

<input
type="email"
name="workEmail"
placeholder="Work Email"
value={formData.workEmail}
onChange={handleChange}
className={errors.workEmail ? "input-error" : ""}
/>

{errors.workEmail && (
<span className="error-text">{errors.workEmail}</span>
)}

</div>



<div className="audit-field">

{/* <label>Company / Website URL*</label> */}

<input
type="url"
name="website"
placeholder="Company / Website URL"
value={formData.website}
onChange={handleChange}
className={errors.website ? "input-error" : ""}
/>

{errors.website && (
<span className="error-text">{errors.website}</span>
)}

</div>



<button
type="submit"
className="btn-outline-white"
disabled={isSubmitting}
>
{buttonText}
</button>


{responseMessage && (
<div className="form_response">
{responseMessage}
</div>
)}

</form>

);

}

export default AuditForm;