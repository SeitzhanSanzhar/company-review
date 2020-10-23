import React, {ReactElement, useContext, useState} from "react";
import { Review } from "../../../models/Review";
import ReviewAdd from "../review-add/ReviewAdd";
import ReviewItem from "../review-item/ReviewItem";
import ReviewContext from "../../../utils/ReviewContext";
import {useRouteMatch} from "react-router";
import {Card} from "react-bootstrap";
import './ReviewView.css'
type Props = {

}

export default function ReviewView({}: Props): ReactElement {
    const [number, setNumber] = useState(6);
    const [a, setA] = useState(0);
    const reviews = useContext<Review[]>(ReviewContext);
    const match = useRouteMatch<{id: string}>();
    const thisReview = reviews.filter(r => r.id === Number(match.params.id))[0];
    return(
        <div>
            {match.params.id}
            <ReviewItem review={thisReview} changeReviewLikes={changeReviewLikes} isView={true}/>
            <div>
                {thisReview.comments && thisReview.comments.map(comment =>
                <div><Card className='grid-item'>
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

    function addReview(review: Review) {
        review.id = number;
        reviews.push(review);
        setNumber(number + 1);
    }
}
