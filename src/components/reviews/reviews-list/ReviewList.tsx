import React, {ReactElement, useContext, useState} from "react";
import { Review } from "../../../models/Review";
import ReviewAdd from "../review-add/ReviewAdd";
import ReviewItem from "../review-item/ReviewItem";
import './ReviewList.css';
import ReviewContext from "../../../utils/ReviewContext";

type ReviewProps = {
}

export default function ReviewList({}: ReviewProps): ReactElement {
    const [number, setNumber] = useState(6);
    const [a, setA] = useState(0);
    const reviews = useContext<Review[]>(ReviewContext);
    return(
        <div className="grid-container">
            <div className="grid-item fill">
                <ReviewAdd addReview={addReview}/>
            </div>
            <div className="grid-item">
                {reviews.map((review) =>   <ReviewItem review={review} changeReviewLikes={changeReviewLikes}/>)}
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
