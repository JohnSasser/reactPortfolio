import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import resume from '../../software-engineer-resume.pdf';

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

  return (
    <div>
      <button onClick={nextPage} id="button-back"></button>
      Page {pageNumber} of {numPages}
      <button onClick={previousPage} id="button-forward"></button>
      <Document
        id="react-pdf-doc"
        file={resume}
        // file={process.env.PUBLIC_URL + '/software-engineer-resume.pdf'}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p></p>
    </div>
  );
}

// export default Resume;

// import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf/dist/esm/entry.parcel';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// // import './Sample.less';

// // import pdfFile from '../../software-engineer-resume.pdf';

// const options = {
//   cMapUrl: 'cmaps/',
//   cMapPacked: true,
// };

// export default function Resume() {
//   const [file, setFile] = useState(pdfFile);
//   const [numPages, setNumPages] = useState(null);

//   // function onFileChange(event) {
//   //   setFile(event.target.files[0]);
//   // }

//   function onDocumentLoadSuccess({ numPages: nextNumPages }) {
//     setNumPages(nextNumPages);
//   }

//   return (
//     <div className="Example">
//       <header>
//         <h1>react-pdf sample page</h1>
//       </header>
//       <div className="Example__container">
//         {/* <div className="Example__container__load">
//           <label htmlFor="file">Load from file:</label>{' '}
//           <input onChange={onFileChange} type="file" />
//         </div> */}
//         <div className="Example__container__document">
//           <Document
//             file={file}
//             onLoadSuccess={onDocumentLoadSuccess}
//             options={options}
//           >
//             {Array.from(new Array(numPages), (el, index) => (
//               <Page key={`page_${index + 1}`} pageNumber={index + 1} />
//             ))}
//           </Document>
//         </div>
//       </div>
//     </div>
//   );
// }
