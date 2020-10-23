import React, {ReactElement} from "react";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

type Props = {
};

export default function ReviewAdd({}: Props): ReactElement {
    return(
        // eslint-disable-next-line react/jsx-no-undef
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Company</Form.Label>
                <Form.Control type="text" placeholder="Company" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Review</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Send Review
            </Button>
        </Form>
    );
}
