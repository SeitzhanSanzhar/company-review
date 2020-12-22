import React from 'react';
import { CardDeck } from "react-bootstrap";
import companies from '../../../data/CompanyData';
import WithLoggerHOC from '../../../hoc/withLoggerHOC';
import CompanyData from "../../../models/Company";
import CompanyListItem from "../company-list-item/CompanyListItem";
import ErrorBoundary from '../error_boundary';
import './CompanyList.css';

interface IProps {}
type IState = {
  rowSize: number,
  searchValue: string,
  company_data: CompanyData[]
  // selectedCompany: CompanyData
}

class CompanyList extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      rowSize: 2,
      searchValue: '',
      company_data: companies,
      // selectedCompany: getCompanyData()[0]
    };
    this.handleChangeSearchValue = this.handleChangeSearchValue.bind(this);
    // this.setSelectedCompanyHandler = this.setSelectedCompanyHandler.bind(this);
  }

  handleChangeSearchValue(e: React.ChangeEvent<HTMLInputElement>) {
    if (e && e.target) {
      this.setState({searchValue: e.target.value});
    }
  }

  // setSelectedCompanyHandler(_selectedCompany: CompanyData) {
  //   this.setState({
  //     selectedCompany: _selectedCompany
  //   } as IState);
  // }

  render() {
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
    this.state.company_data.forEach((cd) => {
      currentDeck.push(cd);
      if (currentDeck.length >= this.state.rowSize) {
        cardDecksOf3.push(currentDeck);
        currentDeck = [];
      }
    })
    if (currentDeck.length !== 0)
      cardDecksOf3.push(currentDeck);
    return (
      <ErrorBoundary>
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
      </ErrorBoundary>
    )
  }
}



export default CompanyList;
