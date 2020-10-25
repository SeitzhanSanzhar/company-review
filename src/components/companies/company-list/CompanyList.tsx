import React from 'react';
import CardDeck from "react-bootstrap/CardDeck";
import CompanyData  from "../../../models/Company";
import CompanyListItem from "../company-list-item/CompanyListItem";
import './CompanyList.css';
import Company from "../../../models/Company";
import {type} from "os";
import CompanyDetail from "../company-detail/CompanyDetail";
import getCompanyData from '../../../data/CompanyJson';
import WithLoggerHOC from '../../../hoc/withLoggerHOC';

interface IProps {}
type IState = {
  rowSize: number,
  searchValue: string,
  company_data: CompanyData[]
  selectedCompany: CompanyData
}
interface IWithLoggerHOC {
  logger: () => void;
}

class CompanyList extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      rowSize: 2,
      searchValue: '',
      company_data: getCompanyData(),
      selectedCompany: getCompanyData()[0]
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
    const WrappedClass = WithLoggerHOC(CompanyListItem);
    this.state.company_data.forEach((cd) => {
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
                  {/*{item.map(cd => <CompanyListItem company_data={cd}/>)}*/}
                  {item.map(cd => <WrappedClass companyData={cd} logger = {() => {console.log('got into logger')}}/>)}
                  {/*{item.map(cd => <WithLoggerHOC companyData={cd}>}*/}
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
