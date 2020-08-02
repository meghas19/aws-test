import React from 'react';
import { Row, Col } from 'reactstrap';

import PageTitle from '../../components/PageTitle';

// import { Document, Page } from 'react-pdf';

import samplePDF from './QuestionPaper.pdf';
import SinglePagePDFViewer from './PDF/single-page';
import AllPagesPDFViewer from './PDF/all-pages';

import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const QuestionPaper = () => {
    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Pages', path: '/pages/starter' },
                            { label: 'Starter', path: '/pages/starter', active: true },
                        ]}
                        title={'Question Paper'}
                    />
                </Col>
            </Row>

            <div className="App">
                {/* <h4>Single Page</h4>
                <SinglePagePDFViewer pdf={samplePDF} />

                <hr />

                <h4>All Pages</h4> */}
                <div className="all-page-container">
                    <AllPagesPDFViewer pdf={samplePDF} />
                </div>

                <hr />
            </div>
        </React.Fragment>
    );
};

export default QuestionPaper;
