import React from 'react';
import CompanyListItem from "../company_list_item/CompanyListItem";
import './CompanyList.css';
import CardDeck from "react-bootstrap/CardDeck";
import {CompanyData} from "../../models/CompanyData";

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
      <>
        <CardDeck className='card-wrapper'>
          {cardDecksOf3.map((item, index) => {
            return (
              <CardDeck>
                {item.map(cd => <CompanyListItem company_data={cd} />)}
              </CardDeck>
            )
          })}
        </CardDeck>
      </>
    );
  }
}



export default CompanyList;
