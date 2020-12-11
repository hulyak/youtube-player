import axios from 'axios';

const KEY = "AIzaSyAnVunezmYE5kfZBrlfP4fbD8nXKNQCOFs"

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});