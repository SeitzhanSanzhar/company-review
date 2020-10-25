import React from "react";
import { Link } from 'react-router-dom';
import CompanyData from "../../../models/Company";
import './CompanyDetail.css';
import getCompanyData from '../../../data/CompanyJson';
import InterviewsPageCompany from "../../interviews/interviews-page-company/InterviewsPageCompany";
interface IProps  extends React.Props<any>{
  companyData: CompanyData;
}

interface IState {
  companyDatas: CompanyData[]
}

class CompanyDetail extends React.Component<IProps, IState>{

  constructor(props: IProps) {
    super(props);
    this.state = {
      companyDatas: getCompanyData()
    }
  }

  render () {
    // @ts-ignore
    const cdId = this.props.match.params.id;
    const companyInfo = this.state.companyDatas.filter((company) => {
      return company.id === Number(cdId);
    })[0];
    const linkToCompanyInterviews = `interviews_company/${companyInfo.name}`;
    return (
      <div>
        <div className="company-detail">
          <div className='company-image'>
            <img src ={companyInfo.image}
              height='50px' width='50px' alt=""/>
            <div className="rat"><p className="text-muted">Rating: {companyInfo.rating}</p></div>
          </div>
          <div className="company-info text-body text-left">
            {companyInfo.text}
          </div>
        </div>
        <Link to={`/interviews_company/${companyInfo.name}`} component={InterviewsPageCompany}/>
      </div>
    );
  }
}

export default CompanyDetail;
