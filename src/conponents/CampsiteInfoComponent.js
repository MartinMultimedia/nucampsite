import React, { Component } from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText} from "reactstrap"
class CampsiteInfoComponent extends Component {
    constructor(props) {
        super(props)
       

    }
    renderCampsite(campsite){
        return ( 
        <div className = "col-md-5 m-1"> 
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
            </Card>
        </div>

        )

    }
    renderComments(comments){
        if(comments){
            return(
                <div className = "col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => 
                        <div key= {comment.id}>
                            {comment.text}{comment.author}
                            {new Intl.DateTimeFormat('en-US', 
                            { year: 'numeric', 
                            month: 'short', 
                            day: '2-digit'})
                            .format(new Date
                            (Date.parse(comment.date)))}
                        </div>)}

                </div>
            )
        }
        return <div></div>
    }
    render(){
            if (this.props.campsite !== null) {
            return (
            <div class= 'row'>
                {this.renderCampsite(this.props.campsite)}
                {this.renderComments(this.props.campsite.comments)}
            </div>
            )
            }else{
                return <div></div>;
            }
        }
    }





export default CampsiteInfoComponent;