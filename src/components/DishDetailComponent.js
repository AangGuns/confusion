import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Col, 
        Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody,
        Form, FormGroup, FormFeedback, Input, Label, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            rateSelect: '',
            comment: '',
            isNavOpen: false,
            isModalOpen: false,
            touched: {
                username: false,
                rateSelect: false,
                comment: false
            }
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(values) {
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true}
        });
    }

    validate(username) {
        const errors = {
            username: ''
        };

        if (this.state.touched.username && username.length < 3) {
            errors.username = 'Must be greater than 2 characters';
        } else if (this.state.touched.username && username.length > 15) {
            errors.username = 'Must be 15 characters or less';
        }

        return errors;
    }

    render() {
        const errors = this.validate(this.state.username);
        return (
            <div>
                <Button outline onClick={this.toggleModal} color="secondary">
                    <i className="fa fa-pencil mr-1"></i>Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                    <Label htmlFor="rateSelect">Rating</Label>
                                    <Input type="select" id=".rateSelect" name="rateSelect" 
                                         value={this.state.rateSelect}
                                         onChange={this.handleInputChange} >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                            </FormGroup>
                            <FormGroup>
                                    <Label htmlFor="username">Your Name</Label>
                                    <Input type="text" id="username" name="username" 
                                        placeholder="Your Name"
                                        value={this.state.username}
                                        invalid={errors.username !== ''}
                                        onBlur={this.handleBlur('username')}
                                        onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.username}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                    <Label htmlFor="comment">Comment</Label>
                                    <Input type="textarea" id="comment" name="comment" 
                                        rows="6" 
                                        value={this.state.comment}
                                        onBlur={this.handleBlur('username')}
                                        onChange={this.handleInputChange} />
                            </FormGroup>
                            <FormGroup>
                                    <Button type="submit" value="submit" color="primary">Submit</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

function RenderDish({dish}) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" object src={dish.image} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments( comments ) {
    const rate = comments.comments.map((comment) => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {
                                                                            year: 'numeric', 
                                                                            month: 'short', 
                                                                            day:'2-digit' })
                                                                            .format(new Date(Date.parse(comment.date)))}
                </p>
            </li> 
            );
        });

    return (
        <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {rate}
            </ul>
            <CommentForm />
        </div>
    );
        
}

const DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div></div>
            </div>
        );
    }
}


export default DishDetail;