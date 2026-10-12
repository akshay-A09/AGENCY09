
import React, { useState, useEffect, useRef } from 'react';
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
  const [captchaToken, setCaptchaToken] = useState('');

  const captchaContainerRef = useRef(null);
  const captchaWidgetId = useRef(null);

  useEffect(() => {
    document.body.classList.add('modal-open');

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  // Load and render Google reCAPTCHA v2
  useEffect(() => {
    let cancelled = false;

    const renderCaptcha = () => {
      if (
        cancelled ||
        !captchaContainerRef.current ||
        !window.grecaptcha?.render ||
        captchaWidgetId.current !== null
      ) {
        return;
      }

      captchaWidgetId.current = window.grecaptcha.render(
        captchaContainerRef.current,
        {
          sitekey: '6Ld6hestAAAAAGygJlzMvi2IsZVlHucqB-hfIIoD',

          callback: (token) => {
            setCaptchaToken(token);
            setErrors((prev) => ({
              ...prev,
              captcha: ''
            }));
          },

          'expired-callback': () => {
            setCaptchaToken('');
          },

          'error-callback': () => {
            setCaptchaToken('');
            setErrorMessage(
              'Unable to load CAPTCHA. Please try again.'
            );
          }
        }
      );
    };

    if (window.grecaptcha?.render) {
      renderCaptcha();
    } else {
      window.onPartnerCaptchaReady = renderCaptcha;

      if (
        !document.querySelector(
          'script[data-partner-recaptcha]'
        )
      ) {
        const script = document.createElement('script');

        script.src =
          'https://www.google.com/recaptcha/api.js?onload=onPartnerCaptchaReady&render=explicit';

        script.async = true;
        script.defer = true;
        script.dataset.partnerRecaptcha = 'true';

        script.onerror = () => {
          setErrorMessage(
            'Unable to load CAPTCHA. Please refresh and try again.'
          );
        };

        document.head.appendChild(script);
      }
    }

    return () => {
      cancelled = true;
      delete window.onPartnerCaptchaReady;
    };
  }, []);

  const countries = [
    'India',
    'UAE',
    'Australia',
    'New Zealand',
    'Saudi Arabia',
    'USA',
    'UK',
    'Europe',
    'Others'
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: ''
    }));
  };

  const handleValidation = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company Name is required';
    }

    if (!formData.number) {
      newErrors.number = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.number)) {
      newErrors.number = 'Phone number must be 10 digits';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.country) {
      newErrors.country = 'Country is required';
    }

    if (!formData.service) {
      newErrors.service = 'Service is required';
    }

    if (!captchaToken) {
      newErrors.captcha =
        'Please complete the CAPTCHA verification';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    const validationErrors = handleValidation();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setButtonText('Processing...');
    setIsButtonDisabled(true);

    try {
      const formDataToSend = new FormData();

      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      formDataToSend.append(
        'recaptcha_token',
        captchaToken
      );

      const response = await fetch(
        'https://www.agency09.in/test_api/partnerApi.php',
        {
          method: 'POST',
          body: formDataToSend
        }
      );

      const responseData = await response.json();

      if (!response.ok || Number(responseData.status) !== 1) {
        setErrorMessage(
          responseData.message || 'Failed to submit form'
        );

        // Require a fresh CAPTCHA for another attempt.
        setCaptchaToken('');

        if (
          captchaWidgetId.current !== null &&
          window.grecaptcha?.reset
        ) {
          window.grecaptcha.reset(captchaWidgetId.current);
        }

        return;
      }

      setFormData({
        name: '',
        companyName: '',
        number: '',
        email: '',
        country: '',
        service: '',
        message: ''
      });

      window.location.href =
        'https://www.agency09.in/partner-with-us-thank-you';

    } catch (error) {
      console.error('Error submitting form:', error);

      setErrorMessage(
        'Error submitting form. Please try again.'
      );

      setCaptchaToken('');

      if (
        captchaWidgetId.current !== null &&
        window.grecaptcha?.reset
      ) {
        window.grecaptcha.reset(captchaWidgetId.current);
      }
    } finally {
      setButtonText('Submit');
      setIsButtonDisabled(false);
    }
  };

  return (
    <div className="contactForm formDark">
      <form onSubmit={handleSubmit}>
        <div className="FormGridTwo">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Name*"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <span className="errorText">{errors.name}</span>
            )}
          </div>

          <div className="form-group">
            <input
              className="form-control"
              placeholder="Company Name*"
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
            {errors.companyName && (
              <span className="errorText">{errors.companyName}</span>
            )}
          </div>

          <div className="form-group">
            <input
              className="form-control"
              placeholder="Phone Number*"
              type="tel"
              name="number"
              value={formData.number}
              onChange={handleChange}
            />
            {errors.number && (
              <span className="errorText">{errors.number}</span>
            )}
          </div>

          <div className="form-group">
            <input
              className="form-control"
              placeholder="Email ID*"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="errorText">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <select
              className="form-control"
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="">Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.country && (
              <span className="errorText">{errors.country}</span>
            )}
          </div>

          <div className="form-group">
            <select
              className="form-control"
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Services</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && (
              <span className="errorText">{errors.service}</span>
            )}
          </div>
        </div>

        <div className="FormGridS1">
          <div className="form-group">
            <textarea
              className="form-control textarea"
              placeholder="Message (Optional)"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Google reCAPTCHA v2 checkbox */}
        <div className="FormGridS1">
          <div className="form-group">
            <div ref={captchaContainerRef}></div>

            {errors.captcha && (
              <span className="errorText">
                {errors.captcha}
              </span>
            )}
          </div>
        </div>

        <div className="FormGridS1">
          <div className="form-group-btn center">
            <button
              type="submit"
              className="btnBlack fontS ripple-button"
              id="partner-with-us-submit"
              disabled={isButtonDisabled}
            >
              <span>{buttonText}</span>
            </button>
          </div>
        </div>

        <div className="form_response">
          {errorMessage && (
            <span className="error">{errorMessage}</span>
          )}
        </div>
      </form>
    </div>
  );
}

export default PartnerWithUs;
