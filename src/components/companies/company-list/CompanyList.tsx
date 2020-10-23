import React from 'react';
import CardDeck from "react-bootstrap/CardDeck";
import { Company } from "../../../models/Company";
import CompanyListItem from "../company-list-item/CompanyListItem";
import './CompanyList.css';



interface IProps {}
type IState = {
  rowSize: number,
  searchValue: string,
  company_data: Company[]
}

class CompanyList extends React.Component<IProps, IState> {

  getCompanyData() {
    return [{'name': 'Apple', 'rating': 5.0, 'image': 'somewhere.com'},
      {'name': 'Google', 'rating': 5.0, 'image': 'somewhere.com'},
      {'name': 'Stripe', 'rating': 4.5, 'image': 'stripe.com'},
      {'name': 'Stripe', 'rating': 4.5, 'image': 'stripe.com'},
      {'name': 'Stripe', 'rating': 4.5, 'image': 'stripe.com'},
      {'name': 'Stripe', 'rating': 4.5, 'image': 'stripe.com'},
    ];
  }

  constructor(props: IProps) {
    super(props);
    this.state = {
      rowSize: 2,
      searchValue: '',
      company_data: this.getCompanyData()
    };
    this.handleChangeSearchValue = this.handleChangeSearchValue.bind(this);
  }

  handleChangeSearchValue(e: React.ChangeEvent<HTMLInputElement>) {
    if (e && e.target) {
      this.setState({searchValue: e.target.value});
    }
  }

  render() {
    let cardDecksOf3: Array<Array<Company>> = [], currentDeck: Company[] = [];
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
        <b>Popular companies</b>
        <div className='container'>
          <CardDeck className='row'>
            {cardDecksOf3.map((item, index) => {
              return (
                <CardDeck>
                  {item.map(cd => <CompanyListItem company_data={cd} />)}
                </CardDeck>
              )
            })}
          </CardDeck>
        </div>
      </div>
    );
  }
}



export default CompanyList;
