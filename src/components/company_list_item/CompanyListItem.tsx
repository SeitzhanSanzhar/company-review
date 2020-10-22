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
        <div className="card text-left m-3">
          <div className="card-body">
            <div className="card-title">{this.props.company_data.name}</div>
            <div className="card-subtitle text-muted">Rating: {this.props.company_data.rating}</div>
            <div className="card-text">Some quick example text to build on the card title and make up the bulk of
              the card's content.</div>
            <div className="card-link"><a href="#">Company interviews</a> <a href="#">Salaries</a></div>
          </div>
        </div>
      </>
    );
  }
}

export default CompanyListItem;
