import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

    // render menu item with card property 
    function RenderMenuItem({ dish, onClick }) {
        return(
            <Card onClick={() => onClick(dish.id)}>
                <CardImg width="100%" object src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        );
    }

    const Menu = (props) => {
        //  using dishes through parent props (MainComponent.js)  // map dishes JSON into list
        const menu = props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                {/* onclick parsing info into RenderMenuItem */}
                    <RenderMenuItem dish={dish} onClick={props.onClick} />
                </div>
            );
        });
        console.log('Menu component render is invoked');
            
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }

export default Menu;