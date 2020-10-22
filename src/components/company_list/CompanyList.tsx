import React from 'react';
import CardDeck from "react-bootstrap/CardDeck";
import FormControl from "react-bootstrap/FormControl";

import { CompanyData } from "../../models/CompanyData";
import CompanyListItem from "../company_list_item/CompanyListItem";

import './CompanyList.css';

interface IProps {}
type IState = {
  row_size: number,
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
      row_size: 3,
      company_data: this.getCompanyData()
    };
  }

  render() {
    let cardDecksOf3: Array<Array<CompanyData>> = [], currentDeck: CompanyData[] = [];
    this.state.company_data.forEach((cd) => {
      console.log(currentDeck.length);
      currentDeck.push(cd);
      if (currentDeck.length >= this.state.row_size) {
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
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </div>
        </div>
        <p className='text-left'>Popular companies</p>
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
