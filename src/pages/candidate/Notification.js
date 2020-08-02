// @flow
import React from 'react';
import { Row, Col, Card, CardBody, Progress, UncontrolledTooltip, Button } from 'reactstrap';
import classNames from 'classnames';
import { Loader } from 'react-feather';

// single project
const Project = (props) => {
    const project = props.project || {};

    return (
        <Card>
            <CardBody>
                <p
                    className={classNames('text-uppercase', 'font-size-12', 'mb-2', {
                        'text-success': project.state === 'Finished',
                        'text-warning': project.state === 'Ongoing',
                        'text-info': project.state === 'Planned',
                    })}>
                    {project.category}
                </p>

                <h5>
                    <a href="/" className="text-dark">
                        {project.title}
                    </a>
                </h5>

                <p className="text-muted mb-4">
                    {project.shortDesc}...
                    {/* <a href="/" className="font-weight-bold text-muted ml-2">
                        view more
                    </a> */}
                </p>
            </CardBody>

            <CardBody className="border-top">
                <Row className="align-items-center">
                    <Col className="col-sm-auto">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item pr-2">
                                <a href="/" className="text-muted d-inline-block" id={`dueDate-${project.id}`}>
                                    <i className="uil uil-calender mr-1"></i> {project.dueDate}
                                </a>
                                <UncontrolledTooltip placement="top" target={`dueDate-${project.id}`}>
                                    Published date
                                </UncontrolledTooltip>
                            </li>
                            {/* <li className="list-inline-item pr-2">
                                <a href="/" className="text-muted d-inline-block" id={`noTasks-${project.id}`}>
                                    <i className="uil uil-bars mr-1"></i> {project.totalTasks}</a>
                                <UncontrolledTooltip placement="top" target={`noTasks-${project.id}`}>Tasks</UncontrolledTooltip>
                            </li>
                            <li className="list-inline-item">
                                <a href="/" className="text-muted d-inline-block" id={`noComments-${project.id}`}>
                                    <i className="uil uil-comments-alt mr-1"></i> {project.totalComments}
                                </a>
                                <UncontrolledTooltip placement="top" target={`noComments-${project.id}`}>Comments</UncontrolledTooltip>
                            </li> */}
                        </ul>
                    </Col>
                    {/* <Col className="offset-sm-1">
                        {project.progress < 30 && (
                            <Progress value={project.progress} color="warning" className="progress-sm" />
                        )}
                        {project.progress > 30 && project.progress < 100 && (
                            <Progress value={project.progress} color="info" className="progress-sm" />
                        )}
                        {project.progress === 100 && (
                            <Progress value={project.progress} color="success" className="progress-sm" />
                        )}
                    </Col> */}
                </Row>
            </CardBody>
        </Card>
    );
};

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Ubold v3.0 - Redesign',
            state: 'Finished',
            shortDesc: 'With supporting text below as a natural lead-in to additional contenposuere erat a ante',
            totalTasks: 21,
            totalComments: 741,
            totalMembers: 10,
            progress: 100,
            category: 'Web Design',
            dueDate: '15 Dec',
        },
        {
            id: 2,
            title: 'Minton v3.0 - Redesign',
            state: 'Ongoing',
            shortDesc:
                'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
            totalTasks: 81,
            totalComments: 103,
            totalMembers: 6,
            progress: 21,
            category: 'Web Design',
            dueDate: '15 Dec',
        },
        {
            id: 3,
            title: 'Hyper v2.1 - Angular and Django',
            state: 'Ongoing',
            shortDesc: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid',
            totalTasks: 12,
            totalComments: 48,
            totalMembers: 2,
            progress: 66,
            category: 'Web Design',
            dueDate: '20 Dec',
        },
        {
            id: 4,
            title: 'Hyper v2.1 - React, Webpack',
            state: 'Finished',
            shortDesc: "Some quick example text to build on the card title and make up the bulk of the card's content",
            totalTasks: 50,
            totalComments: 1024,
            totalMembers: 5,
            progress: 100,
            category: 'Web Design',
            dueDate: '22 Dec',
        },
        {
            id: 5,
            title: 'Hyper 2.2 - Vue.Js and Laravel',
            state: 'Ongoing',
            shortDesc:
                'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.',
            totalTasks: 3,
            totalComments: 104,
            totalMembers: 3,
            progress: 45,
            category: 'Android',
            dueDate: '17 Dec',
        },
        {
            id: 6,
            title: 'Hyper 2.3 - Rails, NodeJs, Mean',
            state: 'Planned',
            shortDesc:
                'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.',
            totalTasks: 11,
            totalComments: 201,
            totalMembers: 5,
            progress: 55,
            category: 'Web Design',
            dueDate: '20 Dec',
        },
        {
            id: 7,
            title: 'Hyper - Landing page and UI Kit',
            state: 'Planned',
            shortDesc:
                'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.',
            totalTasks: 3,
            totalComments: 104,
            totalMembers: 3,
            progress: 45,
            category: 'Android',
            dueDate: '25 Dec',
        },
        {
            id: 8,
            title: 'Hyper 3.0 - Scoping',
            state: 'Finished',
            shortDesc:
                'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.',
            totalTasks: 3,
            totalComments: 104,
            totalMembers: 3,
            progress: 100,
            category: 'Web Design',
            dueDate: '30 Dec',
        },
    ];

    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={3} xl={6}>
                    <h4 className="mb-1 mt-0">Notifications</h4>
                </Col>
                {/* <Col md={9} xl={6} className="text-md-right">
                    <div className="mt-4 mt-md-0">
                        <button type="button" className="btn btn-danger mr-4 mb-3  mb-sm-0"><i className="uil-plus mr-1"></i> Create Project</button>
                        <div className="btn-group mb-3 mb-sm-0">
                            <button type="button" className="btn btn-primary">All</button>
                        </div>
                        <div className="btn-group ml-1">
                            <button type="button" className="btn btn-white">Ongoing</button>
                            <button type="button" className="btn btn-white">Finished</button>
                        </div>
                        <div className="btn-group ml-2 d-none d-sm-inline-block">
                            <button type="button" className="btn btn-primary btn-sm"><i
                                className="uil uil-apps"></i></button>
                        </div>
                        <div className="btn-group d-none d-sm-inline-block ml-1">
                            <button type="button" className="btn btn-white btn-sm"><i
                                className="uil uil-align-left-justify"></i></button>
                        </div>
                    </div>
                </Col> */}
            </Row>

            <Row>
                {projects.map((project, i) => {
                    return (
                        <Col md={12} key={'proj-' + project.id}>
                            <Project project={project} />
                        </Col>
                    );
                })}
            </Row>
        </React.Fragment>
    );
};

export default Projects;
