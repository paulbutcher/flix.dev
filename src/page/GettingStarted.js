import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardText, Col, Container, Row} from "reactstrap";
import InstallGif from '../gif/install.gif'
import NextStepsGif from '../gif/next-steps.gif'

class GettingStarted extends Component {
    render() {
        return (
            <Container>
                <h1>Getting Started</h1>

                <p>
                    Flix runs on any platform that supports the Java Virtual Machine.
                    Installation is as easy as downloading and running the flix jar.
                </p>

                <Row className="mb-lg-5">
                    <Col md="12">
                        <h2>Installation Details</h2>
                    </Col>

                    <Col md="6">
                        <ol>
                            <li>
                                Ensure that you have Java 1.8 or later installed.
                                You can check your Java version with
                                the command <code>java -version</code>.
                                You should see something like <code>openjdk version "1.8.0_102"</code>.
                            </li>
                            <li>
                                Download <a href="https://github.com/flix/flix/releases">flix.jar</a> from the GitHub
                                releases page.
                            </li>
                            <li>Run the command <code>java -jar flix.jar --version</code> to verify that you have the
                                expected version of Flix.
                            </li>
                            <li>
                                Run the command <code>java -jar flix.jar</code> to start Flix in interactive mode.
                            </li>
                            <li>
                                Enter any expression to have it evaluated, e.g. <code>21 + 42</code>.
                            </li>
                        </ol>
                    </Col>

                    <Col md="6">
                        <Card>
                            <CardImg top src={InstallGif}/>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col md="12">
                        <h2>Next Steps</h2>
                    </Col>

                    <Col md="6">
                        <Card>
                            <CardImg top src={NextStepsGif}/>
                        </Card>
                    </Col>

                    <Col md="6">

                        <ol>
                            <li>
                                Open the file <code>test.flix</code>.
                            </li>
                            <li>
                                Enter the following content:
                                <Card>
                                    <CardBody>
                                        <CardText>
                                            <code>
                                                def main(): Str = "Hello World"
                                            </code>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </li>
                            <li>
                                Run the command <code>java -jar flix.jar test.flix --interactive</code> to start Flix in
                                interactive mode with the file loaded.
                            </li>
                            <li>
                                Type <code>main()</code> into the command prompt to run the main function.
                            </li>
                            <li>
                                Type <code>:w</code> to watch the file for changes.
                                You can now edit <code>test.flix</code> as much as you want.
                                Every time you save, flix will automatically reload the file, and print any errors.
                            </li>
                        </ol>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default GettingStarted;
