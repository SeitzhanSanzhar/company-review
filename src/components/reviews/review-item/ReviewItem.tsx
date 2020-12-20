import React, { ReactElement, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Review } from "../../../models/Review";
import './ReviewItem.css';
import {Simulate} from "react-dom/test-utils";

type ReviewProps = {
    review: Review;
    changeReviewLikes: (review: Review, likes: number) => void;
    isView?: boolean;
}
export default function ReviewItem({review, changeReviewLikes, isView}: ReviewProps): ReactElement {
    const [likes, setLikes] = useState(review.likes);
    useEffect(() => {
        changeReviewLikes(review, likes);
    }, [likes]);

    return(
        <Card className='text-left m-2'>
            <Card.Header as="h5">{review.companyName}</Card.Header>
            <Card.Body>
                <Card.Title>{review.author}</Card.Title>
                <Card.Text>
                    {review.review}
                </Card.Text>
                <p className="text-success">Likes: {likes}</p>
                {!isView &&
                <Link to={`/reviews/${review.id}`}><Button className="view-post" variant="primary m-2">View Post</Button></Link>
                }
                <Button className="like" variant="success m-2" onClick={() => setLikes(likes + 1)}>Like</Button>
                {/*<Button className="dislike" variant="danger m-2" onClick={() => setLikes(likes - 1)}>Dislike</Button>*/}
                {isView &&
                <Link to='/reviews'><Button className="view-post" variant="primary m-2">Back</Button></Link>
                }
            </Card.Body>
            <div></div>
        </Card>
    );

}
