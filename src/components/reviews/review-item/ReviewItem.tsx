import React, {ReactElement, useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Review } from "../../../models/Review";
import {Link} from "react-router-dom";

type ReviewProps = {
    review: Review;
    changeReviewLikes: (review: Review, likes: number) => void;
    isView?: boolean;
}
export default function ReviewItem({review, changeReviewLikes, isView}: ReviewProps): ReactElement {
    const [likes, setlikes] = useState(review.likes);

    useEffect(() => {
        changeReviewLikes(review, likes)
    });

    return(
        <Card className='text-left m-2'>
            <Card.Header as="h5">{review.companyName}</Card.Header>
            <Card.Body>
                <Card.Title>{review.author}</Card.Title>
                <Card.Text>
                    {review.review}
                </Card.Text>
                <p className="text-success">Likes: {review.likes}</p>
                {!isView &&
                <Link to={`/reviews/${review.id}`}><Button variant="primary m-2">View Post</Button></Link>
                }
                <Button variant="success m-2" onClick={() => setlikes(likes + 1)}>Like</Button>
                <Button variant="danger m-2" onClick={() => setlikes(likes - 1)}>Dislike</Button>
                {isView &&
                <Link to={`/reviews`}><Button variant="primary m-2">Back</Button></Link>
                }
            </Card.Body>
        </Card>
    );

}
