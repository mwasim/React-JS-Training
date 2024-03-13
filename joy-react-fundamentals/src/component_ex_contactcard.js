import React from "react";

export const ContactCard = ({ name, jobTitle, email }) => {
  return (
    <li className="contact-card">
      <h2>{name}</h2>
      <dl>
        <dt>Job</dt>
        <dd>{jobTitle}</dd>
        <dt>Email</dt>
        <dd>{email}</dd>
      </dl>
    </li>
  );
};

const ContactCardDemo = () => {
  return (
    <ul>
      <ContactCard
        name="Sunita Kumar"
        jobTitle="Electrical Engineer"
        email="sunita.kumar@acme.co"
      />
      <ContactCard
        name="Henderson G. Sterling II"
        jobTitle="Receptionist"
        email="henderson-the-second@acme.co"
      />
      <ContactCard
        name="Aoi Kobayashi"
        jobTitle="President"
        email="kobayashi.aoi@acme.co"
      />
    </ul>
  );
};

export default ContactCardDemo;
