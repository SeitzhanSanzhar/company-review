import React from "react";
import './CompanyDetail.css';
import CompanyData from "../../../models/Company";
import {Link, Route} from "react-router-dom";
import InterviewsList from "../../interviews/interviews-list/InterviewsList";

interface IProps  extends React.Props<any>{
  companyData: CompanyData;
}

interface IState {
}

class CompanyDetail extends React.Component<IProps, IState>{

  render () {
    return (
      <div className="company-detail">
        <div className='company-image'>
          <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png'
            height='50px' width='50px' alt=""/>
          <div className="rat"><p className="text-muted">Rating: 5.0</p></div>
        </div>
        <div className="company-info text-body text-left">Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <Link to='interviews' component={InterviewsList}/>
      </div>
    );
  }
}

export default CompanyDetail;