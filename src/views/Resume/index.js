import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

import resume from '../../software-engineer-resume.pdf';

function Resume() {
  const [file, setFile] = useState(resume);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setFile(resume);
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={process.env.PUBLIC_URL + '/software-engineer-resume.pdf'}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default Resume;
