import axios from 'axios';

const KEY = 'AIzaSyCeIF54DpopxJOlE8ewV9IMveen2nPR9eU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});