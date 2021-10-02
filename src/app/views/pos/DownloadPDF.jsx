import React, { useEffect, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import InvoicePage from './InvoicePage';
const Download = ({ data }) => {
    const [show, setShow] = useState(false);
    
    return (<div className={'download-pdf '} title="Save PDF">
      {false && (<PDFDownloadLink document={<InvoicePage pdfMode={true} data={data}/>} fileName={`${data.invoiceTitle ? data.invoiceTitle.toLowerCase() : 'invoice'}.pdf`} aria-label="Save PDF">Download</PDFDownloadLink>)}
    </div>);
};
export default Download;
