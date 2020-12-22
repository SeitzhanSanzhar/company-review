import React from 'react';
import { CardDeck } from "react-bootstrap";
import companies from '../../../data/CompanyData';
import WithLoggerHOC from '../../../hoc/withLoggerHOC';
import ICompany, {CompanyState, default as CompanyData} from '../../../models/Company';
import CompanyListItem from "../company-list-item/CompanyListItem";
import './CompanyList.css';
import {shallowEqual, useSelector} from "react-redux";


const CompanyList: React.FC = () => {

  const rowSize = 3;
  const companies:  ICompany[] = useSelector(
    (state: CompanyState) => state.companies,
    shallowEqual
  )

  let cardDecksOf3: Array<Array<CompanyData>> = [], currentDeck: CompanyData[] = [];
  const WrappedClass = WithLoggerHOC(CompanyListItem);

  const Jumbotron = React.memo((props: {}) =>
    <div className='jumbotron'>
      <div className="container">
        <h5 className="display-4">Company Reviews from Real Employees</h5>
        <h5 className="display-6">Discover how employees rate and review their company!</h5>
      </div>
    </div>
  )

  companies.forEach((cd) => {
    currentDeck.push(cd);
    if (cd.rating < 0) throw new Error("Rating can not be negative");
    if (currentDeck.length >= rowSize) {
      cardDecksOf3.push(currentDeck);
      currentDeck = [];
    }
  })

  if (currentDeck.length !== 0)
    cardDecksOf3.push(currentDeck);

  return (
    <React.Fragment>
      <Jumbotron/>
      <b><h4>Popular companies</h4></b>
      <div className='container'>
        <CardDeck className='row'>
          {cardDecksOf3.map((item, index) => {
            return (
              <>
                <CardDeck>
                  {item.map(cd => <WrappedClass companyData={cd} logger = {() => {console.log('got into logger')}}/>)}
                </CardDeck>
              </>
            )
          })}
        </CardDeck>
      </div>
    </React.Fragment>
  )
}
export default CompanyList;