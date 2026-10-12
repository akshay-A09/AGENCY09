
import React, { useState, useEffect, useRef } from 'react';

function GetInTouch() {
  const [errorMessage, setErrorMessage] = useState('');
  const [buttonText, setButtonText] = useState('Submit');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [captchaToken, setCaptchaToken] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const captchaContainerRef = useRef(null);
  const captchaWidgetId = useRef(null);

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
      window.onGetInTouchCaptchaReady = renderCaptcha;

      if (
        !document.querySelector(
          'script[data-get-in-touch-recaptcha]'
        )
      ) {
        const script = document.createElement('script');

        script.src =
          'https://www.google.com/recaptcha/api.js?onload=onGetInTouchCaptchaReady&render=explicit';

        script.async = true;
        script.defer = true;
        script.dataset.getInTouchRecaptcha = 'true';

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
      delete window.onGetInTouchCaptchaReady;
    };
  }, []);

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

    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must be 10 digits';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = 'Invalid email format';
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
      const formDataToSend = {
        ...formData,
        recaptcha_token: captchaToken
      };

      const response = await fetch(
        'https://www.agency09.in/test_api/getInApi.php',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formDataToSend)
        }
      );

      const responseData = await response.json();

      if (!response.ok || Number(responseData.status) !== 1) {
        setErrorMessage(
          responseData.message || 'Failed to submit form'
        );

        // Reset CAPTCHA so the user can retry.
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
        mobile: '',
        email: '',
        service: '',
        message: ''
      });

      window.location.href =
        'https://www.agency09.in/get-in-touch-thank-you';

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
              id="name"
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
              placeholder="Mobile*"
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
            {errors.mobile && (
              <span className="errorText">{errors.mobile}</span>
            )}
          </div>

          <div className="form-group">
            <input
              className="form-control"
              placeholder="Email ID*"
              type="email"
              id="email"
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
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Select Service*</option>
              <option value="Launch of a brand from scratch">
                Launch of a brand from scratch
              </option>
              <option value="Website & Mobile App">
                Everything about Website - Mobile App
              </option>
              <option value="AI Based Marketing Tools">
                AI Based Marketing Tools
              </option>
              <option value="SEO & Reputation">
                Organic Search Presence (SEO) & Reputation
              </option>
              <option value="Social Media Marketing">
                Increase social engagements and community (SMM)
              </option>
              <option value="Ads & Lead Campaigns">
                Running Ads & Lead-Based Campaigns
              </option>
              <option value="Brand Identity & Packaging">
                Brand Identity and Packaging
              </option>
              <option value="Video Content">
                Continuous Video Content
              </option>
              <option value="Influencer Tie-Ups">
                Influencer Tie-Ups
              </option>
              <option value="Quick Turnaround">
                Quick turn around tasks
              </option>
              <option value="HR Communication">
                HR based communication
              </option>
              <option value="Distribution & Channel Marcom">
                Distribution / Channel Marcom
              </option>
              <option value="IP & Tactical Campaigns">
                Deliver IP’s and Tactical Campaigns
              </option>
              <option value="Google Integrations">
                Google based integration like GA4 and Google My Business
              </option>
              <option value="Customised Software">
                Customised Softwares
              </option>
              <option value="Emailers & Print">
                Consistent - Emailer - Brochure - Leaflets
              </option>
              <option value="Others">Others</option>
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
              id="message"
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
              id="get-in-touch-submit"
              disabled={isButtonDisabled}
            >
              <span>{buttonText}</span>
            </button>
          </div>
        </div>
      </form>

      <div className="form_response">
        {errorMessage && (
          <span className="error">{errorMessage}</span>
        )}
      </div>
    </div>
  );
}

export default GetInTouch;
