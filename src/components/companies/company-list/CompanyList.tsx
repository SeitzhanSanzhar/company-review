import React from 'react';
import CardDeck from "react-bootstrap/CardDeck";
import CompanyData  from "../../../models/Company";
import CompanyListItem from "../company-list-item/CompanyListItem";
import './CompanyList.css';
import Company from "../../../models/Company";
import {type} from "os";
import CompanyDetail from "../company-detail/CompanyDetail";



interface IProps {}
type IState = {
  rowSize: number,
  searchValue: string,
  company_data: CompanyData[]
  selectedCompany: CompanyData
}

class CompanyList extends React.Component<IProps, IState> {

  getCompanyData() {
    const text = 'Lorem Ipsum is simply dummy text of the printing and\n' +
      '          typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an\n' +
      '          unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only\n' +
      '          five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was\n' +
      '          popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more\n' +
      '          recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    return [{'id': 1, 'name': 'Apple', 'rating': 5.0, 'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/600px-Apple-logo.png', 'text': text},
      {'id': 2, 'name': 'Google', 'rating': 5.0, 'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png', 'text': text},
      {'id': 3, 'name': 'Stripe', 'rating': 4.5, 'image': 'https://b.stripecdn.com/site-srv/assets/img/v3/jobs_v2/thumbnails/stripe-c7f91cf715df9fb9d2198e47de6fc3016a82795e.jpg', 'text': text},
      {'id': 4, 'name': 'Stripe', 'rating': 4.5, 'image': 'https://b.stripecdn.com/site-srv/assets/img/v3/jobs_v2/thumbnails/stripe-c7f91cf715df9fb9d2198e47de6fc3016a82795e.jpg', 'text': text},
      {'id': 5, 'name': 'Stripe', 'rating': 4.5, 'image': 'https://b.stripecdn.com/site-srv/assets/img/v3/jobs_v2/thumbnails/stripe-c7f91cf715df9fb9d2198e47de6fc3016a82795e.jpg', 'text': text},
      {'id': 6,'name': 'Stripe', 'rating': 4.5, 'image': 'https://b.stripecdn.com/site-srv/assets/img/v3/jobs_v2/thumbnails/stripe-c7f91cf715df9fb9d2198e47de6fc3016a82795e.jpg', 'text': text},
    ]
  }

  constructor(props: IProps) {
    super(props);
    this.state = {
      rowSize: 2,
      searchValue: '',
      company_data: this.getCompanyData(),
      selectedCompany: this.getCompanyData()[0]
    };
    this.handleChangeSearchValue = this.handleChangeSearchValue.bind(this);
    this.setSelectedCompanyHandler = this.setSelectedCompanyHandler.bind(this);
  }

  handleChangeSearchValue(e: React.ChangeEvent<HTMLInputElement>) {
    if (e && e.target) {
      this.setState({searchValue: e.target.value});
    }
  }

  setSelectedCompanyHandler(_selectedCompany: CompanyData) {
    this.setState({
      selectedCompany: _selectedCompany
    } as IState);
  }

  render() {
    let cardDecksOf3: Array<Array<CompanyData>> = [], currentDeck: CompanyData[] = [];
    this.state.company_data.forEach((cd) => {
      console.log(currentDeck.length);
      currentDeck.push(cd);
      if (currentDeck.length >= this.state.rowSize) {
        cardDecksOf3.push(currentDeck);
        currentDeck = [];
      }
    })
    if (currentDeck.length != 0)
      cardDecksOf3.push(currentDeck);
    return (
      <div>
        <div className='jumbotron'>
          <div className="container">
            <h5 className="display-4">Company Reviews from Real Employees</h5>
            <h5 className="display-6">Discover how employees rate and review their company!</h5>
          </div>
        </div>
        <b><h4>Popular companies</h4></b>
        <div className='container'>
          <CardDeck className='row'>
            {cardDecksOf3.map((item, index) => {
              return (
                <CardDeck>
                  {item.map(cd => <CompanyListItem company_data={cd}/>)}
                </CardDeck>
              )
            })}
          </CardDeck>
        </div>
      </div>
    )
  }
}



export default CompanyList;
