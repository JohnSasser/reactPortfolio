import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { Button } from 'react-bootstrap';

import resume from '../../software-engineer-resume.pdf';

import './style.css';

let pdfFilePath = process.env.PUBLIC_URL + '/software-engineer-resume.pdf';

export default function Resume() {
  const [file, setFile] = useState(resume);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setFile(pdfFilePath);
    setNumPages(numPages);
  }

  function nextPage() {
    setPageNumber(pageNumber + 1);
  }
  function previousPage() {
    setPageNumber(pageNumber - 1);
  }

  console.log('numPages:', numPages);
  console.log('pageNumber:', pageNumber);
  return (
    <div id="pdf-container">
      {' '}
      <div id="button-container">
        {pageNumber > numPages - 1 ? (
          <Button
            // style={{ width: '80px', height: '80px', margin: '0 auto' }}
            onClick={previousPage}
            id="button-forward"
            variant={pageNumber > numPages - 1 ? 'info' : 'secondary'}
            className={
              pageNumber > numPages - 1 ? 'active-button' : 'inactive-button'
            }
          >
            previous page
          </Button>
        ) : (
          <Button
            // style={{ width: '80px', height: '80px', margin: '0 auto' }}
            onClick={previousPage}
            id="button-forward"
            variant={pageNumber > numPages - 1 ? 'info' : 'secondary'}
            className={
              pageNumber > numPages - 1 ? 'active-button' : 'inactive-button'
            }
            disabled
          >
            previous page
          </Button>
        )}
        <p>
          Page {pageNumber} of {numPages}
        </p>

        {pageNumber > numPages - 1 ? (
          <Button
            // style={{ width: '80px', height: '80px', margin: '0 auto' }}
            onClick={nextPage}
            id="button-back"
            variant={pageNumber > numPages - 1 ? 'secondary' : 'info'}
            className={
              pageNumber < numPages ? 'active-button' : 'inactive-button'
            }
            disabled
          >
            {' '}
            next page
          </Button>
        ) : (
          <Button
            // style={{ width: '80px', height: '80px', margin: '0 auto' }}
            onClick={nextPage}
            id="button-back"
            variant={pageNumber > numPages - 1 ? 'secondary' : 'info'}
            className={
              pageNumber < numPages ? 'active-button' : 'inactive-button'
            }
          >
            {' '}
            next page
          </Button>
        )}
      </div>
      <div
        id="pdf-container"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <Document
          id="react-pdf-doc"
          file={pdfFilePath}
          // file={pdfFilePath}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
          {/* <Page pageNumber={pageNumber + 1} /> */}
        </Document>
      </div>
    </div>
  );
}
