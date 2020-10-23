import React, { FormEvent, ReactElement } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Review } from "../../../models/Review";

type Props = {
    addReview: (review: Review) => void
};

export default function ReviewAdd({addReview}: Props): ReactElement {
    const companyref = React.useRef<HTMLInputElement>(null);
    const reviewref = React.useRef<HTMLTextAreaElement>(null);

    function handleSubmit(event: FormEvent<HTMLElement>):void {
        console.log('qwerqwerqwerqe');
        if (companyref.current && reviewref.current && companyref.current.value && reviewref.current.value) {
            const review: Review = {id:0,companyName: companyref.current.value, review: reviewref.current.value, likes: 0, author: 'todo'};
            companyref.current.value = '';
            reviewref.current.value = '';
            addReview(review);
        }
    }
    return(
        // eslint-disable-next-line react/jsx-no-undef
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Company</Form.Label>
                <Form.Control type="text" placeholder="Company" ref={companyref}/>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Review</Form.Label>
                <Form.Control as="textarea" rows={10} placeholder="Review" ref={reviewref}/>
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>
                Send Review
            </Button>
        </Form>
    );
}
