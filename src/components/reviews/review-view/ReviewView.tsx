import React, { ReactElement, useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { useRouteMatch } from "react-router";
import ReviewContext from "../../../contexts/ReviewContext";
import { Review } from "../../../models/Review";
import ReviewItem from "../review-item/ReviewItem";
import './ReviewView.css';
type Props = {

}

export default function ReviewView({}: Props): ReactElement {
    const reviews = useContext<Review[]>(ReviewContext);
    const match = useRouteMatch<{id: string}>();
    const thisReview = reviews.filter(r => r.id === Number(match.params.id))[0];
    return(
        <div>
            <ReviewItem review={thisReview} changeReviewLikes={changeReviewLikes} isView={true}/>
            <div>
                {thisReview.comments && thisReview.comments.map(comment =>
                <div><Card className='item'>
                <Card.Header>author</Card.Header>
                <Card.Body>
                    {comment}
                </Card.Body>
                </Card>
                </div>
                )}
            </div>
        </div>
    );
    function changeReviewLikes(review: Review, likes: number) {
        review.likes = likes;
    }

}
