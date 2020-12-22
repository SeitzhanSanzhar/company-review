import React, { FormEvent, ReactElement } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Review } from "../../../models/Review";
import "./ReviewAdd.css";

type Props = {
    addReview: (review: Review) => void
};

export default function ReviewAdd({addReview}: Props): ReactElement {

    // const authorref = React.useRef<HTMLInputElement>(null);
    const companyref = React.useRef<HTMLInputElement>(null);
    const reviewref = React.useRef<HTMLTextAreaElement>(null);

    function handleSubmit(event: FormEvent<HTMLElement>):void {
        if (companyref.current && reviewref.current &&
            companyref.current.value && reviewref.current.value) {
            const review: Review = {
                id:0,
                companyName: companyref.current.value,
                review: reviewref.current.value,
                likes: 0,
                author: (
                    (localStorage.getItem('logged') != null && localStorage.getItem('logged') !== 'false')
                        ? localStorage.getItem('logged') : 'Anonym'),
                isLiked: false
            };
            companyref.current.value = '';
            reviewref.current.value = '';
            addReview(review);
        }
        if (reviewref.current) {
            if (!reviewref.current.value) {
                reviewref.current.focus();
            }
        }
        if (companyref.current) {
            if (!companyref.current.value) {
                companyref.current.focus();
            }
        }
    }
    return(
        // eslint-disable-next-line react/jsx-no-undef
        <Form>
            {/*<Form.Group>*/}
            {/*    <Form.Label>Author</Form.Label>*/}
            {/*    <Form.Control type="text" placeholder="Author" ref={authorref}/>*/}
            {/*</Form.Group>*/}
            <Form.Group>
                <Form.Label>Company</Form.Label>
                <Form.Control type="text" placeholder="Company" ref={companyref}/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Review</Form.Label>
                <Form.Control as="textarea" rows={10} placeholder="Review" ref={reviewref}/>
            </Form.Group>
            <Button className="send-review" variant="primary" onClick={handleSubmit}>
                Send Review
            </Button>
        </Form>
    );
}
