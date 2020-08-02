import React from 'react';
import { Row, Col } from 'reactstrap';

import PageTitle from '../../components/PageTitle';


const ReportIssue = () => {
    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Pages', path: '/pages/starter' },
                            { label: 'Starter', path: '/pages/starter', active: true },
                        ]}
                        title={'Report Issue'}
                    />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default ReportIssue;
