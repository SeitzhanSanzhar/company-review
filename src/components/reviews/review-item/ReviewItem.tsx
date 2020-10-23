import React, {ReactElement, useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Review } from "../../../models/Review";

type ReviewProps = {
    review: Review;
    changeReviewLikes: (review: Review, likes: number) => void;
}
export default function ReviewItem({review, changeReviewLikes}: ReviewProps): ReactElement {
    const [likes, setlikes] = useState(review.likes);

    useEffect(() => {
        changeReviewLikes(review, likes)
    });

    return(
        <Card className='text-left m-5'>
            <Card.Header as="h5">{review.companyName}</Card.Header>
            <Card.Body>
                <Card.Title>{review.author}</Card.Title>
                <Card.Text>
                    {review.review}
                </Card.Text>
                <p className="text-success">Likes: {review.likes}</p>
                <Button variant="primary">View Post</Button>
                <Button variant="success" onClick={() => setlikes(likes + 1)}>Like</Button>
                <Button variant="danger" onClick={() => setlikes(likes - 1)}>Dislike</Button>
            </Card.Body>
        </Card>
    );

}
