import axios from 'axios';
import React from "react";
import companies from '../../../data/CompanyData';
import CompanyData from "../../../models/Company";
import InterviewsPageCompany from "../../interviews/interviews-page-company/InterviewsPageCompany";
import './CompanyDetail.css';


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
      companyDatas: companies
    }
    axios.get('https://drive.google.com/file/d/1l8SVNCd92-MsfuJaRGdbsD7nExRBofd2/view?usp=sharing')
      .then((res) => {
        this.state = {
          companyDatas: res.data
        }
        console.log('here');
      })
  }

  render () {
    // @ts-ignore
    const cdId = this.props.match.params.id;
    const companyInfo = this.state.companyDatas.filter((company) => {
      return company.id === Number(cdId);
    })[0];
    const linkToCompanyInterviews = `interviews_company/Google`;
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
        <InterviewsPageCompany companyName={companyInfo.name}/>
      </div>
    );
  }
}

export default CompanyDetail;
