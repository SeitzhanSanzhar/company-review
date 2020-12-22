import { CompanyAction, DispatchType } from "../models/Company";
import * as actionTypes from "./action_types";

export function filterCompany(search_val: string) {
  const action: CompanyAction = {
    type: actionTypes.FILTER_COMPANY,
    search_val
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: CompanyAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}