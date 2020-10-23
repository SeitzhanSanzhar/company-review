import React, { ReactElement } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Review } from "../../../models/Review";

type ReviewProps = {
    review: Review;
}
export default function ReviewItem({review}: ReviewProps): ReactElement {
    return(
        <Card className='text-left'>
            <Card.Header as="h5">{review.companyName}</Card.Header>
            <Card.Body>
                <Card.Title>{review.author}</Card.Title>
                <Card.Text>
                    {review.review}
                </Card.Text>
                <Button variant="primary">View Post</Button>
            </Card.Body>
        </Card>
    );
}
