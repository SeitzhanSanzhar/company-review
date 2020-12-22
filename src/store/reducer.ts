import * as actionTypes from "./action_types"
import {CompanyAction, CompanyState} from "../models/Company";

const initialState: CompanyState = {
  companies: [
    {"id": 1, "name": "Apple", "rating": 6, "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/600px-Apple-logo.png", "text": "asdf"},
    {"id": 2, "name": "Google", "rating": 5.0, "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png", "text": "asdf"},
    {"id": 3, "name": "Stripe", "rating": 4.5, "image": "https://b.stripecdn.com/site-srv/assets/img/v3/jobs_v2/thumbnails/stripe-c7f91cf715df9fb9d2198e47de6fc3016a82795e.jpg", "text": "asdf"},
    {"id": 4, "name": "Stripe", "rating": 4.5, "image": "https://b.stripecdn.com/site-srv/assets/img/v3/jobs_v2/thumbnails/stripe-c7f91cf715df9fb9d2198e47de6fc3016a82795e.jpg", "text": "asdf"},
    {"id": 5, "name": "Stripe", "rating": 4.5, "image": "https://b.stripecdn.com/site-srv/assets/img/v3/jobs_v2/thumbnails/stripe-c7f91cf715df9fb9d2198e47de6fc3016a82795e.jpg", "text": "asdf"},
    {"id": 6,"name": "Stripe", "rating": 4.5, "image": "https://b.stripecdn.com/site-srv/assets/img/v3/jobs_v2/thumbnails/stripe-c7f91cf715df9fb9d2198e47de6fc3016a82795e.jpg", "text": "asdf"}
  ],
  search_val: ""
}

const reducer = (
  state: CompanyState = initialState,
  action: CompanyAction
): CompanyState => {
  switch (action.type) {
    case actionTypes.FILTER_COMPANY:
      let new_companies = state.companies.filter((company) => {return company.name.indexOf(action.search_val) !== -1});
      return {
        ...state,
        companies: new_companies
      }
  }
  return state
}

export default reducer;