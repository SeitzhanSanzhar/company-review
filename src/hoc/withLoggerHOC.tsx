import React from 'react';
import CompanyData from '../models/Company'

interface AwaysCoolStateProps {
  areYouCool: boolean;
}

interface IWithLoggerHOC {
  logger: () => void;
  companyData: CompanyData;
}


export default function WithLoggerHOC(ChildComp: React.ComponentType<any|string>) {
  return class Component extends React.Component<IWithLoggerHOC, {}> {
    render() {
      this.props.logger();
      return (
        <>
          <ChildComp  company_data={this.props.companyData}/>
        </>
      );
    }
  };
}
