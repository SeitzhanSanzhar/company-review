import React from 'react';
import interviews from '../../../data/InterviewJson';
import { useRouteMatch } from 'react-router-dom';
import InterviewsList from '../interviews-list/InterviewsList';

interface IProps {
  companyName: string
}

export default function InterviewsPageCompany(props: IProps)  {

  const companyInterviews = interviews.filter((companyInterivew) => {
    return companyInterivew.companyName == props.companyName;
  });
  return (<InterviewsList interviews={companyInterviews}/>);
}