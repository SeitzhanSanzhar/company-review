import React, {ReactElement} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ReviewItem from "../review_item/ReviewItem";
import {Review} from "../../models/Review";
import {CardGroup} from "react-bootstrap";
import ReviewAdd from "../review_add/ReviewAdd";
import './ReviewList.css'

type ReviewProps = {
}

const reviews: Review[] = [
    {
        companyName: "DAR",
        author: "Adilkhan",
        review: "not good bad work life balance low salary don't know why they write in Scala",
        id: 1
    },
    {
        companyName: "Kaspi",
        author: "Adlet",
        review: "blah blah blah blah blah blah blah blah blah blah blah blah ",
        id: 2
    },
    {
        companyName: "Amazon",
        author: "Sanzhar",
        review: "not good bad work life balance low salary bad managers wanting to PEP you",
        id: 3
    },
    {
        companyName: "DAR",
        author: "Adilkhan",
        review: "not good bad work life balance low salary don't know why they write in Scala",
        id: 4
    },
    {
        companyName: "ORION",
        author: "review by SANZHIK",
        review: "ne prihodite suda",
        id: 5
    }
];

export default function ReviewList({}: ReviewProps): ReactElement {
    return(
        <div className="grid-container">
            <div className="grid-item fill">
                <ReviewAdd/>
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
}
