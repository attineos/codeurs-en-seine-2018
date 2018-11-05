const URL_ABOUT_US_PAGE = '/about-us'
const URL_END_PAGE = '/end'
const URL_LIVE_CODING_PAGE = '/live-coding'
const URL_TITLE_PAGE = '/title'
const URL_WAITING_PAGE = '/starter'

const LINK_NEXT_PAGE_NAME_ATTR = 'nextPage'
const LINK_PREVIOUS_PAGE_NAME_ATTR = 'previousPage'

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
    next: URL_END_PAGE,
  },
  [URL_END_PAGE]: {
    prev: URL_LIVE_CODING_PAGE,
  },
}

export {
  LINK_NEXT_PAGE_NAME_ATTR,
  LINK_PREVIOUS_PAGE_NAME_ATTR,
  NAVIGATION,
  URL_ABOUT_US_PAGE,
  URL_END_PAGE,
  URL_LIVE_CODING_PAGE,
  URL_TITLE_PAGE,
  URL_WAITING_PAGE,
}
