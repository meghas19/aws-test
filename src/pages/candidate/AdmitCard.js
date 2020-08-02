import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button } from 'reactstrap';
import logo from '../../assets/images/logo.png';

import PageTitle from '../../components/PageTitle';
import { storage, auth, db } from '../../helpers/firebase';

export default class AdmitCard extends Component {
    state = {
        registerNumber: 0,
        candidateName: '',
        isDifferentlyAbled: '',
        languageOffered1: '',
        languageOffered2: '',
        subjectOfferedPaper2: '',
        paper1Date: '',
        paper2Date: '',
        paper1Time: '',
        paper2Time: '',
        examCenterNo: '',
        examCentreAddress: '',
    };

    componentDidMount = () => {
        db
            .collection('users')
            .doc(auth.currentUser.uid)
            .get()
            .then((res) => {
                this.setState({ candidateName: res.data().fname + ' ' + res.data().lname });
                console.log('users WORKS', res.data());
                console.log('USER NAME', this.state.candidateName);
            }).catch = (err) => {
            console.log('error');
        };
        db
            .collection('Candidate_Exam_Details')
            .doc(auth.currentUser.uid)
            .get()
            .then((res) => {
                this.setState({ isDifferentlyAbled: res.data().disability });
                this.setState({ languageOffered1: res.data().language1 });
                this.setState({ languageOffered2: res.data().language2 });
                this.setState({ subjectOfferedPaper2: res.data().paper2subj });

                console.log('Candidate_Exam_Details WORKS', res.data());
            }).catch = (err) => {
            console.log('error');
        };

        db
            .collection('Global_Variables')
            .doc('admitCard')
            .get()
            .then((res) => {
                this.setState({ paper1Date: res.data().paper1_date });
                this.setState({ paper2Date: res.data().paper2_date });
                this.setState({ paper1Time: res.data().paper1_time });
                this.setState({ paper2Time: res.data().paper2_time });
                console.log('Candidate_Education WORKS', res.data());
            }).catch = (err) => {
            console.log('error');
        };
    };

    render() {
        return (
            <React.Fragment>
                <Row className="page-title d-print-none">
                    <Col md={12}>
                        <PageTitle
                            breadCrumbItems={[
                                { label: 'Pages', path: '/pages/invoice' },
                                { label: 'Invoice', path: '/pages/invoice', active: true },
                            ]}
                            title={'Admit Card'}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <div className="clearfix">
                                    <Row>
                                        <Col md={2}>
                                            <div className="m-0 mt-2 mb-4 text-center font-weight-bold">
                                                <img src={logo} alt="" height="80" />
                                            </div>
                                        </Col>

                                        <Col md={10}>
                                            <div>
                                                <h4 className="m-0 mt-4 text-center">
                                                    SIKKIM HUMAN RESOURCE DEVELOPMENT DEPARTMENT
                                                </h4>
                                                <h3 className="m-0 mt-2 mb-4 text-center font-weight-bold">
                                                    ADMIT CARD FOR SIKKIM TEACHER ELIGIBILITY TEST - JULY 2020
                                                </h3>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <Row>
                                    <Col md={8}>
                                        <div className="table-responsive">
                                            <table
                                                className="table mt-4 table-centered"
                                                style={{ border: '2px solid #000' }}>
                                                <tr>
                                                    <td
                                                        className="font-weight-bold"
                                                        style={{ border: '1px solid #000', width: '200px' }}>
                                                        Register No.
                                                    </td>
                                                    <td style={{ border: '1px solid #000' }}>
                                                        {this.state.registerNumber}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        className="font-weight-bold"
                                                        style={{ border: '1px solid #000' }}>
                                                        Name
                                                    </td>
                                                    <td style={{ border: '1px solid #000' }}>
                                                        {this.state.candidateName}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        className="font-weight-bold"
                                                        style={{ border: '1px solid #000' }}>
                                                        Is Differently Abled?
                                                    </td>
                                                    <td style={{ border: '1px solid #000' }}>
                                                        {this.state.isDifferentlyAbled}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        className="font-weight-bold"
                                                        style={{ border: '1px solid #000' }}>
                                                        Language Offered 1
                                                    </td>
                                                    <td style={{ border: '1px solid #000' }}>
                                                        {this.state.languageOffered1}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        className="font-weight-bold"
                                                        style={{ border: '1px solid #000' }}>
                                                        Language Offered 2
                                                    </td>
                                                    <td style={{ border: '1px solid #000' }}>
                                                        {this.state.languageOffered2}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        className="font-weight-bold"
                                                        style={{ border: '1px solid #000' }}>
                                                        Subject Offered Paper 2
                                                    </td>
                                                    <td style={{ border: '1px solid #000' }}>
                                                        {this.state.subjectOfferedPaper2}
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>

                                        <div className="table-responsive text-center">
                                            <table
                                                className="table mt-4 table-centered"
                                                style={{ border: '2px solid #000' }}>
                                                <thead>
                                                    <tr>
                                                        <th style={{ border: '1px solid #000' }}>Paper</th>
                                                        <th style={{ border: '1px solid #000' }}>Date</th>
                                                        <th style={{ border: '1px solid #000' }}>Time</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ border: '1px solid #000' }}>Paper 1</td>
                                                        <td style={{ border: '1px solid #000' }}>
                                                            {this.state.paper1Date}
                                                        </td>
                                                        <td style={{ border: '1px solid #000' }}>
                                                            {this.state.paper1Time}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ border: '1px solid #000' }}>Paper 2</td>
                                                        <td style={{ border: '1px solid #000' }}>
                                                            {this.state.paper2Date}
                                                        </td>
                                                        <td style={{ border: '1px solid #000' }}>
                                                            {this.state.paper2Time}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="table-responsive text-center">
                                            <table
                                                className="table mt-4 table-centered"
                                                style={{ border: '2px solid #000' }}>
                                                <tr>
                                                    <td
                                                        className="md-2 font-weight-bold"
                                                        style={{ border: '1px solid #000', height: '230px' }}>
                                                        Photograph
                                                        <br />
                                                        <img src={logo} alt="" width="auto" height="100%" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        className="md-2 mt-2 font-weight-bold"
                                                        style={{ border: '1px solid #000', height: '180px' }}>
                                                        <img src={logo} alt="" width="auto" height="100%" />
                                                        <br />
                                                        Candidate Signature
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <div className="table-responsive">
                                        <table
                                            className="table mt-4 table-centered"
                                            style={{ border: '2px solid #000' }}>
                                            <tr>
                                                <td
                                                    className="font-weight-bold"
                                                    style={{ border: '1px solid #000', width: '200px' }}>
                                                    Exam Centre No.
                                                </td>
                                                <td className="font-weight-bold" style={{ border: '1px solid #000' }}>
                                                    Exam Centre Address
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="font-weight-bold" style={{ border: '1px solid #000' }}>
                                                    {this.state.examCenterNo}
                                                </td>
                                                <td className="font-weight-bold" style={{ border: '1px solid #000' }}>
                                                    {this.state.examCentreAddress}
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </Row>

                                {/* <Row className="mt-4">
                                <Col md={6}>
                                    <h6 className="font-weight-normal">Invoice For:</h6>
                                    <h6 className="font-size-16">{invoiceDetail.customer}</h6>
                                    <address>
                                        {invoiceDetail.billing_address.line_1}<br />
                                        {invoiceDetail.billing_address.city}, {invoiceDetail.billing_address.state} {invoiceDetail.billing_address.zip}<br />
                                        <abbr title="Phone">P:</abbr> {invoiceDetail.billing_address.phone}
                                    </address>
                                </Col>

                                <Col md={6}>
                                    <div className="text-md-right">
                                        <h6 className="font-weight-normal">Total</h6>
                                        <h2>{invoiceDetail.total}</h2>
                                    </div>
                                </Col>
                            </Row> */}

                                {/* <Row>
                                <Col>
                                    <div className="table-responsive">
                                        <table className="table mt-4 table-centered">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Item</th>
                                                    <th>Hours</th>
                                                    <th>Hours Rate</th>
                                                    <th className="text-right">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {invoiceDetail.items.map((item, idx) => {
                                                    return (
                                                        <tr key={idx}>
                                                            <td>{idx + 1}</td>
                                                            <td>
                                                                <h5 className="font-size-16 mt-0 mb-2">{item.name}</h5>
                                                                <p className="text-muted mb-0">{item.description}</p>
                                                            </td>
                                                            <td>{item.qty}</td>
                                                            <td>{item.unit_cost}</td>
                                                            <td className="text-right">{item.total}</td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </Col>
                            </Row> */}

                                <Row>
                                    <Col>
                                        <div className="clearfix pt-5">
                                            <h5 className="font-weight-bold text-muted">
                                                Instruction to the Candidates:
                                            </h5>
                                            <p style={{ color: 'red' }}>
                                                {' '}
                                                Please check the particulars and other details i.e. Name, Language
                                                Offered for Paper I and/or Paper Il and subject offered for Paper Il of
                                                admit card with final confirmation page. In case any particular(s) of
                                                Admit Card is not matching with the Final Confirmation Page, the
                                                candidate may communicate the same to STET Unit for necessary correction
                                                immediately.
                                            </p>
                                            <br />
                                            1. The Candidate should report at the examination centre 90 minutes before
                                            the commencement of examination. Candidate will not be allowed to enter the
                                            Examination Centre after the commencement of the examination under any
                                            circumstances in each paper.
                                            <br />
                                            2. Candidate should bring their own blue/black ballpoint pen for filling OMR
                                            Sheet as we will not provide Ball point pens for CTET-JULY 2020 exam
                                            <br />
                                            3. Candidate without having proper admit card and photo id proof shall not
                                            be allowed in the examination under any circumstances by the Centre
                                            Superintendent.
                                            <br />
                                            4. Candidate shall not be allowed to leave the examination hall before the
                                            conclusion of examination, without signing the attendance sheet second time
                                            and without submitting the OMR Sheet to the invigilator.
                                            <br />
                                            5. Before writing particulars on the cover page of Test Booklet candidate
                                            should check and ensure that the Test Booklet contains same number of pages
                                            as written on the top of the cover page.
                                            <br />
                                            6. Candidate shall not remove any page(s) from the Test Booklet and if any
                                            page(s) is/are found missing from his/her Test Booklet he/she is liable for
                                            suitable action under Unfair Means.
                                            <br />
                                            7. Candidate should use blue/black ball point pen only ta write/fill his/her
                                            particulars on Test Booklet and OMR Sheet. Use of PENCIL, WHITE FLUID ROVER
                                            WRITING / CUTTING on TEST BOOKLET and OMR SHEET is STRICTLY PROHIBITED.
                                            <br />
                                            8. Candidate should ensure that he/she has darkened the circle for providing
                                            information Le Roll Number, Subject Attempted, Supplement Language Booklet
                                            Code, Test Booklet Number & Code etc. in the OMR Sheet.
                                            <br />
                                            9. On completion of the test, the candidate must handover the OMR Sheet to
                                            the invigilator.
                                            <br />
                                            10.Candidate must follow the instructions strictly as mentioned in the
                                            information bulletin. in the room/hall and take away Test Booklet only.
                                            <br />
                                            11.The Admit Card is issued provisionally to the candidate as per the
                                            information provided by him her. The eligibility of the candidate has not
                                            been verified by the Board. The appointing authority/recruiting agency will
                                            verify the same before appointment/recruitment Qualifying the STET would not
                                            confer a right on any person for recruitment employment as it is only one of
                                            the eligibility criteria for appointment as the teacher.
                                            <br />
                                            12.The candidates are advised to visit their allotted examination centre one
                                            day before the date of examination in order to confirm its location,
                                            distance, mode of transport etc.
                                            <br />
                                            13.The STET Unit uploads STET related information at its website. It is the
                                            responsibility of candidate to visit CTET website regularly for updates.
                                            <br />
                                            <br />
                                            <p className="font-weight-bold text-muted">
                                                CANDIDATE MUST CARRY: 1. DOWNLOADED ADMIT CARD 2. ONE PHOTO ID PROOF
                                                (PAN CARD, AADHAAR CARD, PASSPORT, DRIVING LICENCE, VOTER ID CARD) 3.
                                                BALL POINT PEN (BLUE/BLACK) OF GOOD QUALITY
                                            </p>
                                            <p className="font-weight-bold text-muted">
                                                LIST OF BARRED ITEMS WHICH ARE NOT ALLOWED IN THE EXAMINATION CENTRE IN
                                                ANY CIRCUMSTANCES BOOKS, NOTES, BITS OF PAPERS PENCIL, SCALE LOG TABLE,
                                                WRITING PAD, ERASER, CARDBOARD ELECTRONICS DEVICES, WATCH, WRIST WATCH,
                                                WALLET, GOGGLES, HANDBAGS, MOBILE PHONES, EARPHONE, MICROPHONES,
                                                CAMERAS, HEADPHONES, PEN-DRIVES, PAGER, VICES, CALCULATOR DEBIT CREDIT
                                                CARD, ELECTRONIC PEN'SCANNERS, WATER BOTTLE, FOOD & BEVERAGES (ALCOHOLIC
                                                OR NON-ALCOHOLIC) AND OTHER ITEMS WHICH COULD BE USED FOR UNFAIR MEANS.
                                            </p>
                                        </div>
                                    </Col>

                                    {/* <Col sm={6}>
                                    <div className="float-right mt-4">
                                        <p><span className="font-weight-medium">Sub-total:</span> <span
                                            className="float-right">{invoiceDetail.sub_total}</span></p>
                                        <p><span className="font-weight-medium">Discount (10%):</span> <span
                                            className="float-right"> &nbsp;&nbsp;&nbsp; {invoiceDetail.discount}</span></p>
                                        <h3>{invoiceDetail.total} USD</h3>
                                    </div>
                                    <div className="clearfix"></div>
                                </Col> */}
                                </Row>

                                <div className="mt-5 mb-1">
                                    <div className="text-right d-print-none">
                                        <Button
                                            color="primary"
                                            onClick={(e) => {
                                                window.print();
                                            }}>
                                            <i className="uil uil-print mr-1"></i> Print
                                        </Button>
                                        <a href="/" className="btn btn-info ml-1">
                                            Submit
                                        </a>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}
