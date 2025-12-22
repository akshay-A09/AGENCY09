import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PartnerWithUs() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    number: '',
    email: '',
    country: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState('Submit');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleValidation = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.companyName) newErrors.companyName = 'Company Name is required';
    if (!formData.number) newErrors.number = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.number)) newErrors.number = 'Phone number must be 10 digits';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.service) newErrors.service = 'Service is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = handleValidation();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setButtonText('Processing...');
    setIsButtonDisabled(true);

    const grecaptcha = window.grecaptcha;
    grecaptcha.ready(async () => {
      const token = await grecaptcha.execute('6LelbAYqAAAAAGvo7ZJ_k3t_R1z4rJKA7Aeu7ojF', { action: 'submit' });

      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      formDataToSend.append('recaptcha_token', token);

      try {
        const response = await fetch('https://www.agency09.in/test_api/partnerApi.php', {
          method: 'POST',
          body: formDataToSend,
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }

        const responseData = await response.json();
        if (responseData.status === 1) {
          setFormData({
            name: '',
            companyName: '',
            number: '',
            email: '',
            country: '',
            service: '',
            message: ''
          });
          // ✅ Redirect to Thank You page
          window.location.href = 'https://www.agency09.in/partner-with-us-thank-you';
        }else {
          setErrorMessage(responseData.message);
        }
      } catch (error) {
        console.error('Error submitting form:', error.message);
      } finally {
        setButtonText('Submit');
        setIsButtonDisabled(false);
      }
    });
  };

   const countries = [
    'India','UAE', 'Australia', 'New Zealand', 'Saudi Arabia', 'USA', 'UK', 'Europe', 'Others'
  ];

 const services = [
  'Launch of a brand from scratch',
  'Everything about Website - Mobile App',
  'AI Based Marketing Tools',
  'Organic Search Presence (SEO) & Reputation',
  'Increase social engagements and community (SMM)',
  'Running Ads & Lead-Based Campaigns',
  'Brand Identity and Packaging',
  'Continuous Video Content',
  'Influencer Tie-Ups',
  'Quick turn around tasks',
  'HR based communication',
  'Distribution / Channel Marcom',
  'Deliver IP’s and Tactical Campaigns',
  'Google based integration like GA4 and Google My Business',
  'Customised Softwares',
  'Consistent - Emailer - Brochure - Leaflets',
  'Others'
];


  return (
    <div className='contactForm formDark '>
      <form onSubmit={handleSubmit}>
        <div className='FormGridTwo '>
          <div className='form-group'>
            <input className='form-control' placeholder='Name' type="text" id="name" name="name" value={formData.name} onChange={handleChange}  />
            {errors.name && <span className='errorText'>{errors.name}</span>}
          </div>
          <div className='form-group'>
            <input className='form-control' placeholder='Company Name*' type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange}  />
            {errors.companyName && <span className='errorText'>{errors.companyName}</span>}
          </div>
          <div className='form-group'>
            <input className='form-control' placeholder='Phone Number*' type="text" id="number" name="number" value={formData.number} onChange={handleChange}  />
            {errors.number && <span className='errorText'>{errors.number}</span>}
          </div>
          <div className='form-group'>
            <input className='form-control' placeholder='Email ID*' type="email" id="email" name="email" value={formData.email} onChange={handleChange}  />
            {errors.email && <span className='errorText'>{errors.email}</span>}
          </div>
          <div className='form-group'>
            <select className='form-control' value={formData.country} onChange={handleChange} name="country" >
              <option value="">Country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
            {errors.country && <span className='errorText'>{errors.country}</span>}
          </div>
          <div className='form-group'>
            <select className='form-control' value={formData.service} onChange={handleChange} name="service" >
              <option value="">Services</option>
              {services.map((service, index) => (
                <option key={index} value={service}>{service}</option>
              ))}
            </select>
            {errors.service && <span className='errorText'>{errors.service}</span>}
          </div>
        </div>
        <div className='FormGridS1'>
          <div className='form-group'>
            <textarea className='form-control textarea' placeholder='Message (Optional)' id="message" name="message" value={formData.message} onChange={handleChange} />
          </div>
        </div>
        <div className='FormGridS1'>
          <div className='form-group-btn center'>
            <button type="submit" className="btnBlack fontS ripple-button" id="partner-with-us-submit" disabled={isButtonDisabled}>
              <span>{buttonText}</span>
            </button>
          </div>
        </div>
        <div className="form_response">
          {errorMessage && <span className="error">{errorMessage}</span>}
        </div>
      </form>
    </div>
  );
}

export default PartnerWithUs;
