import React, {ReactElement, useCallback, useContext, useEffect, useState} from "react";
import ReviewContext from "../../../contexts/ReviewContext";
import { Review } from "../../../models/Review";
import ReviewAdd from "../review-add/ReviewAdd";
import ReviewItem from "../review-item/ReviewItem";
import './ReviewList.css';
import axios from "../../../api/axios";

type ReviewProps = {
}

export default function ReviewList({}: ReviewProps): ReactElement {
    const [number, setNumber] = useState(0);
    const [reviews, setReviews] = useState<any[]>([]);


    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get("/reviews");
                console.log(result);
                setReviews(result["data"]);
                setNumber(result["data"].length);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [number]);

    const changeReviewLikes = useCallback((review: Review, likes: number, isLiked: boolean) => {

        console.log(likes);
        review.likes = likes;
        review.isLiked = isLiked;
        axios.put(`/reviews/${review.id}`, review)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const addReview = useCallback((review: Review) => {
        review.id = number;
        console.log(review);
        axios.post("/reviews", review)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
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
