import React, {FormEvent, ReactElement} from "react";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {User} from "../../models/User";
import {Review} from "../../models/Review";

type Props = {
    addReview: (review: Review) => void
};

export default function ReviewAdd({addReview}: Props): ReactElement {
    const companyref = React.createRef<HTMLInputElement>();
    const reviewref = React.createRef<HTMLTextAreaElement>();

    function handleSubmit(event: FormEvent<HTMLElement>):void {
        if (companyref.current && reviewref.current && companyref.current.textContent && reviewref.current.textContent) {
            const review: Review = {id:0,companyName: companyref.current.textContent, review: reviewref.current.textContent, likes: 0, author: 'todo'};
            addReview(review);
        }
    }
    return(
        // eslint-disable-next-line react/jsx-no-undef
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Company</Form.Label>
                <Form.Control type="text" placeholder="Company" ref={companyref}/>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Review</Form.Label>
                <Form.Control as="textarea" rows={10} ref={reviewref}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Send Review
            </Button>
        </Form>
    );
}
