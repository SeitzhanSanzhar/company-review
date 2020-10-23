import React, {ReactElement, useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ReviewItem from "../review_item/ReviewItem";
import {Review} from "../../models/Review";
import {CardGroup} from "react-bootstrap";
import ReviewAdd from "../review_add/ReviewAdd";
import './ReviewList.css'
import {func} from "prop-types";

type ReviewProps = {
}

const reviews: Review[] = [
    {
        companyName: "DAR",
        author: "Adilkhan",
        review: "not good bad work life balance low salary don't know why they write in Scala",
        id: 1,
        likes: 0
    },
    {
        companyName: "Kaspi",
        author: "Adlet",
        review: "blah blah blah blah blah blah blah blah blah blah blah blah ",
        id: 2,
        likes: 0
    },
    {
        companyName: "Amazon",
        author: "Sanzhar",
        review: "not good bad work life balance low salary bad managers wanting to PEP you",
        id: 3,
        likes: 0
    },
    {
        companyName: "DAR",
        author: "Adilkhan",
        review: "not good bad work life balance low salary don't know why they write in Scala",
        id: 4,
        likes: 0
    },
    {
        companyName: "ORION",
        author: "review by SANZHIK",
        review: "ne prihodite suda",
        id: 5,
        likes: 0
    }
];

export default function ReviewList({}: ReviewProps): ReactElement {
    const [number, setNumber] = useState(6);
    return(
        <div className="grid-container">
            <div className="grid-item fill">
                <ReviewAdd addReview={addReview}/>
            </div>
            <div className="grid-item">

                <ReviewItem review={reviews[0]}/>
                <ReviewItem review={reviews[1]}/>
                <ReviewItem review={reviews[2]}/>
                <ReviewItem review={reviews[3]}/>
                <ReviewItem review={reviews[4]}/>

            </div>
        </div>

    );

    function addReview(review: Review) {
        review.id = number;
        reviews.push(review);
        setNumber(number + 1);
    }
}
