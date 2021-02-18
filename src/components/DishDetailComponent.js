import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends React.Component {
    renderDish(dish) {
        if (dish != null) {
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
        } else {
            return <div></div>
        }
    }

    renderComments(commentary) {
        if (commentary != null) {
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
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
        );
    }
}

export default DishDetail;