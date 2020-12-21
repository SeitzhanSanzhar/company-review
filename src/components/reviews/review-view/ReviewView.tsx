import React, {ReactElement, useCallback, useContext, useEffect, useState} from "react";
import { Card } from "react-bootstrap";
import { useRouteMatch } from "react-router";
import ReviewContext from "../../../contexts/ReviewContext";
import { Review } from "../../../models/Review";
import ReviewItem from "../review-item/ReviewItem";
import './ReviewView.css';
import axios from "../../../api/axios";
type Props = {

}

export default function ReviewView({}: Props): ReactElement {
    // const reviews = useContext<Review[]>(ReviewContext);
    const match = useRouteMatch<{id: string}>();
    const [review, setReview] = useState({} as Review);
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`/reviews/${match.params.id}`);
                const data: Review = result["data"];
                setReview(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

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
    return(
        <div>
            {String(review.likes)}
            <ReviewItem review={review} changeReviewLikes={changeReviewLikes} isView={true}/>
            <div>
                {review.comments && review.comments.map(comment => (
                    <React.Fragment>
                        <Card className='item'>
                        <Card.Header>author</Card.Header>
                        <Card.Body>comment</Card.Body>
                        </Card>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );

}
