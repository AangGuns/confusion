import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

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

    function RenderComments({ commentary }) {
        const rate = commentary.comments.map((comment) => {
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
            </div>
        );
         
    }
    const DishDetail = (props) => {
        if (props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments commentary={props.dish} />
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