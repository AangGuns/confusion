import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    // render menu item with card property 
    function RenderMenuItem({ dish, onClick }) {
        return(
            <Card>
                {/* back quotes evaluated JS value inside it, and replace that value there.
                    ${dish.id} will replaced according id value (eg. /menu/1)*/}
                <Link to={`/menu/${dish.id}`}>
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        );
    }

    const Menu = (props) => {
        //  using dishes through parent props (MainComponent.js)  // map dishes JSON into list
        const menu = props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                {/* onclick parsing info into RenderMenuItem */}
                    <RenderMenuItem dish={dish} />
                </div>
            );
        });
        console.log('Menu component render is invoked');
            
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }

export default Menu;