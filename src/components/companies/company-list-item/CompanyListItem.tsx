import React, {useContext} from 'react';
import CompanyData  from "../../../models/Company";
import {Link, Redirect, Route} from "react-router-dom";
import {CompanyContext} from "../../../contexts/CompanyContext";
import CompanyDetail from "../company-detail/CompanyDetail";

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
            <div className="card-link">
              <Link to='/company_detail'>Details</Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CompanyListItem;
