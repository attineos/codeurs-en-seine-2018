import React from 'react'
import {
  URL_ABOUT_US_PAGE,
  URL_END_PAGE,
  URL_LIVE_CODING_PAGE,
  URL_QUESTION_PAGE,
  URL_TITLE_PAGE,
  URL_USEFUL_LINKS_PAGE,
  URL_WAITING_PAGE,
} from './index'
import {
  AboutUsPage,
  LiveCodingPage,
  QuestionPage,
  SummaryPage,
  TitlePage,
  UsefulLinks,
} from '../pages'

export const ROUTES = [
  {
    path: URL_WAITING_PAGE,
    component: <SummaryPage bc="darkBlue" />,
  },
  {
    path: URL_TITLE_PAGE,
    component: <TitlePage />,
  },
  {
    path: URL_ABOUT_US_PAGE,
    component: <AboutUsPage />,
  },
  {
    path: URL_LIVE_CODING_PAGE,
    component: <LiveCodingPage />,
  },
  {
    path: URL_USEFUL_LINKS_PAGE,
    component: <UsefulLinks />,
  },
  {
    path: URL_QUESTION_PAGE,
    component: <QuestionPage />,
  },
  {
    path: URL_END_PAGE,
    component: <SummaryPage bc="black" />,
  },
]
