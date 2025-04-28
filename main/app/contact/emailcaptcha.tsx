'use client'

import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface ContactWithCaptchaProps {
    RECAPTCHA_SITE_KEY: string
}

const ContactWithCaptcha: React.FC<ContactWithCaptchaProps> = ({ RECAPTCHA_SITE_KEY }) => { // Destructure the prop
  const [emailVisible, setEmailVisible] = useState<boolean>(false);
  const [emailAddress, setEmailAddress] = useState<string>('');
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleCaptchaChange = (value: string | null) => {
    if (value) {
      // In a real application, you would send 'value' to your server for verification.
      console.log('CAPTCHA solved:', value);
      setEmailAddress('mike@mccrae.ca');
      setEmailVisible(true);
    } else {
      setEmailVisible(false);
      setEmailAddress('');
    }
  };

  const handleEmailClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!emailVisible) {
      event.preventDefault(); // Prevent navigation if email is not yet revealed
      alert('Please solve the CAPTCHA to reveal the email address.');
    }
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <p>Please solve the CAPTCHA below to see my email address:</p>

      <ReCAPTCHA
        sitekey={RECAPTCHA_SITE_KEY} // Use the prop value here
        onChange={handleCaptchaChange}
        ref={recaptchaRef}
      />

      {emailVisible ? (
        <p>
          You can email me at: <a href={`mailto:${emailAddress}`} onClick={handleEmailClick}>{emailAddress}</a>
        </p>
      ) : (
        <p>Email address will appear here after CAPTCHA verification.</p>
      )}
    </div>
  );
};

export default ContactWithCaptcha;