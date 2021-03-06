const URL_ABOUT_US_PAGE = '/about-us'
const URL_END_PAGE = '/end'
const URL_QUESTION_PAGE = '/question'
const URL_LIVE_CODING_PAGE = '/live-coding'
const URL_USEFUL_LINKS_PAGE = '/links'
const URL_TITLE_PAGE = '/title'
const URL_WAITING_PAGE = '/starter'

const NAVIGATION = {
  [URL_WAITING_PAGE]: {
    next: URL_TITLE_PAGE,
  },
  [URL_TITLE_PAGE]: {
    prev: URL_WAITING_PAGE,
    next: URL_ABOUT_US_PAGE,
  },
  [URL_ABOUT_US_PAGE]: {
    prev: URL_TITLE_PAGE,
    next: URL_LIVE_CODING_PAGE,
  },
  [URL_LIVE_CODING_PAGE]: {
    prev: URL_ABOUT_US_PAGE,
    next: URL_USEFUL_LINKS_PAGE,
  },
  [URL_USEFUL_LINKS_PAGE]: {
    prev: URL_LIVE_CODING_PAGE,
    next: URL_QUESTION_PAGE,
  },
  [URL_QUESTION_PAGE]: {
    prev: URL_USEFUL_LINKS_PAGE,
    next: URL_END_PAGE,
  },
  [URL_END_PAGE]: {
    prev: URL_QUESTION_PAGE,
  },
}

export {
  NAVIGATION,
  URL_ABOUT_US_PAGE,
  URL_END_PAGE,
  URL_QUESTION_PAGE,
  URL_LIVE_CODING_PAGE,
  URL_USEFUL_LINKS_PAGE,
  URL_TITLE_PAGE,
  URL_WAITING_PAGE,
}
