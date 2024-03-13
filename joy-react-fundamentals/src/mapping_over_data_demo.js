import { ContactCard } from "./component_ex_contactcard";

import React from "react";

const contactsData = [
  {
    id: "sunita-abc123",
    name: "Sunita Kumar",
    job: "Electrical Engineer",
    email: "sunita.kumar@acme.co",
  },
  {
    id: "henderson-def456",
    name: "Henderson G. Sterling II",
    job: "Receptionist",
    email: "henderson-the-second@acme.co",
  },
  {
    id: "aio-ghi789",
    name: "Aoi Kobayashi",
    job: "President",
    email: "kobayashi.aoi@acme.co",
  },
];

const MappingOverData = () => {
  return (
    <ul>
      {contactsData.map((contact) => (
        <ContactCard
          key={contact.id}
          id={contact.id}
          name={contact.name}
          jobTitle={contact.job}
          email={contact.email}
        />
      ))}
    </ul>
  );
};

export default MappingOverData;
