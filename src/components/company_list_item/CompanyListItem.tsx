import React from 'react';
import {CompanyData} from "../../models/CompanyData";
import Card from 'react-bootstrap/Card'

interface IProps {
  company_data: CompanyData;
}

interface IState {

}

class CompanyListItem extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <>
        <Card>
          <Card.Body className="text-left mb-3">
            <Card.Title>{this.props.company_data.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Rating: {this.props.company_data.rating}</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Card.Link href="#">Company interviews</Card.Link>
            <Card.Link href="#">Salaries</Card.Link>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default CompanyListItem;
