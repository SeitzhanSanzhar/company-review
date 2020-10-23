import React from "react";
import { Link } from 'react-router-dom';
import CompanyData from "../../../models/Company";
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
    const text = 'Lorem Ipsum is simply dummy text of the printing and\n' +
      '          typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an\n' +
      '          unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only\n' +
      '          five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was\n' +
      '          popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more\n' +
      '          recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    this.state = {
      companyDatas: [{'id': 1, 'name': 'Apple', 'rating': 5.0, 'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/600px-Apple-logo.png', 'text': text},
        {'id': 2, 'name': 'Google', 'rating': 5.0, 'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png', 'text': text},
        {'id': 3, 'name': 'Stripe', 'rating': 4.5, 'image': 'https://b.stripecdn.com/site-srv/assets/img/v3/jobs_v2/thumbnails/stripe-c7f91cf715df9fb9d2198e47de6fc3016a82795e.jpg', 'text': text},
        {'id': 4, 'name': 'Stripe', 'rating': 4.5, 'image': 'https://b.stripecdn.com/site-srv/assets/img/v3/jobs_v2/thumbnails/stripe-c7f91cf715df9fb9d2198e47de6fc3016a82795e.jpg', 'text': text},
        {'id': 5, 'name': 'Stripe', 'rating': 4.5, 'image': 'https://b.stripecdn.com/site-srv/assets/img/v3/jobs_v2/thumbnails/stripe-c7f91cf715df9fb9d2198e47de6fc3016a82795e.jpg', 'text': text},
        {'id': 6,'name': 'Stripe', 'rating': 4.5, 'image': 'https://b.stripecdn.com/site-srv/assets/img/v3/jobs_v2/thumbnails/stripe-c7f91cf715df9fb9d2198e47de6fc3016a82795e.jpg', 'text': text},
      ]
    }
  }

  render () {
    // @ts-ignore
    const cdId = this.props.match.params.id;
    const companyInfo = this.state.companyDatas.filter((company) => {
      return company.id == cdId;
    })[0];
    return (
      <div className="company-detail">
        <div className='company-image'>
          <img src ={companyInfo.image}
            height='50px' width='50px' alt=""/>
          <div className="rat"><p className="text-muted">Rating: {companyInfo.rating}</p></div>
        </div>
        <div className="company-info text-body text-left">
          {companyInfo.text}
        </div>
        <Link to='/reviews'/>
      </div>
    );
  }
}

export default CompanyDetail;