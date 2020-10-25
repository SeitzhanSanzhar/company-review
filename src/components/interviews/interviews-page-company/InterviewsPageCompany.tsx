import React from 'react';
import interviews from '../../../data/InterviewJson';
import { useRouteMatch } from 'react-router-dom';
import InterviewsList from '../interviews-list/InterviewsList';

export default function InterviewsPageCompany()  {
  const match = useRouteMatch<{companyName: string}>();
  const companyInterviews = interviews.filter((companyInterivew) => {
    return companyInterivew.companyName == match.params.companyName;
  })
  return (<InterviewsList interviews={companyInterviews}/>);
}