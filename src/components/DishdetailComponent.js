import React,{Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
//import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

class DishdetailComponent extends Component{
    constructor(props) {
        super(props);
      }
    
      renderComments(comments) {
        if (comments != null) {
          return comments.map((comment) => {
            return (
              <li>
                <div>
                  <p>{comment.comment}</p>
                  <p>
                    -- {comment.author},{" "}
                    {new Intl.DateTimeFormat("en-US", {year: "numeric", month: "short", day: "2-digit", }).format(new Date(Date.parse(comment.date)))}
                  </p>
                </div>
              </li>
            );
          });
        } else return <div></div>;
      }
    
      renderDish(dish) {
        if (dish != null)
          return (
            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          );
        else return <div></div>;
      }
    
      render() {
        if (this.props.dish != null) {
            var result = this.renderComments(this.props.dish.comments);
    
          return (
            <div className="row">
              <div className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.dish)}
              </div>
    
              <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul class="list-unstyled">{result}</ul>
              </div>
            </div>
          );
        } else return <div></div>;
      }
}

export default DishdetailComponent;