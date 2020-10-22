import React from 'react';
import CardDeck from "react-bootstrap/CardDeck";
import FormControl from "react-bootstrap/FormControl";

import { CompanyData } from "../../models/CompanyData";
import CompanyListItem from "../company_list_item/CompanyListItem";

import './CompanyList.css';

interface IProps {}
type IState = {
  rowSize: number,
  searchValue: string,
  company_data: CompanyData[]
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
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdown_coins" data-toggle="dropdown" aria-haspopup="true"
                      aria-expanded="false">
                Coin
              </button>
              <div className="dropdown show">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown link
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
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
