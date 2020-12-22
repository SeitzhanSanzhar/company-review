import {IconProps} from "@material-ui/core";

export default interface ICompany {
  id: number,
  name: string,
  rating: number,
  image: string,
  text: string
};

export type CompanyAction = {
  type: string
  search_val: string
}

export type CompanyState = {
  companies: ICompany[],
  search_val: string
}

export type DispatchType = (args: CompanyAction) => CompanyAction;
