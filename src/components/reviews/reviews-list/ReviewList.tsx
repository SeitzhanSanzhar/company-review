import React, {ReactElement, useCallback, useContext, useState} from "react";
import ReviewContext from "../../../contexts/ReviewContext";
import { Review } from "../../../models/Review";
import ReviewAdd from "../review-add/ReviewAdd";
import ReviewItem from "../review-item/ReviewItem";
import './ReviewList.css';

type ReviewProps = {
}

export default function ReviewList({}: ReviewProps): ReactElement {
    const [number, setNumber] = useState(6);
    const [a, setA] = useState(0);
    const reviews = useContext<Review[]>(ReviewContext);

    const changeReviewLikes = useCallback((review: Review, likes: number, isLiked: boolean) => {
        console.log(likes);
        review.likes = likes;
        review.isLiked = isLiked;
    }, []);

    const addReview = useCallback((review: Review) => {
        review.id = number;
        reviews.push(review);
        setNumber(number + 1);
    }, []);

    return(
        <div className="grid-container">
            <div className="grid-item fill">
                <ReviewAdd addReview={addReview}/>
            </div>
            <div className="grid-item-scroll">
                <React.Fragment>
                {reviews.map((review) => <ReviewItem review={review} changeReviewLikes={changeReviewLikes}/>)}
                </React.Fragment>
            </div>
        </div>
    );

}
