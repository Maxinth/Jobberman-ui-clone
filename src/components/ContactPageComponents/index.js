import React, { useState } from "react";
import { ContactContainer } from "./styled";
import ContactNav from "./ContactNav";
import AllContactPages from "./PagesByClick";
import { pageHeading, pageContent } from "./PagesByClick/data";

const ContactPage = () => {
  const [pageNo, setPageNo] = useState(3);
  const changePage = (id) => setPageNo(id);

  return (
    <ContactContainer>
      <ContactNav id={pageNo} changePage={changePage} />
      <AllContactPages
        heading={pageHeading(pageNo)}
        content={pageContent(pageNo)}
      />
    </ContactContainer>
  );
};

export default ContactPage;
