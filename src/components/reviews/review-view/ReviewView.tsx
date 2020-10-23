import React, {ReactElement, useContext, useState} from "react";
import { Review } from "../../../models/Review";
import ReviewAdd from "../review-add/ReviewAdd";
import ReviewItem from "../review-item/ReviewItem";
import ReviewContext from "../../../utils/ReviewContext";
import {useRouteMatch} from "react-router";

type Props = {

}

export default function ReviewView({}: Props): ReactElement {
    const [number, setNumber] = useState(6);
    const [a, setA] = useState(0);
    const reviews = useContext<Review[]>(ReviewContext);
    const match = useRouteMatch<{id: string}>();
    return(
        <div>
            {match.params.id}
            <ReviewItem review={reviews.filter(r => r.id === Number(match.params.id))[0]} changeReviewLikes={changeReviewLikes} isView={true}/>;
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
