import axios from 'axios';

export default class PixabayAPI {
  constructor() { 
    this.searchQuery = '';
    this.currentPage = 1;
    this.perPage = 40;
  }
  
  async fetchHits() {
    try {
      const response = await axios('https://pixabay.com/api/', {
        params: {
          key: '35942774-c248ff19570495ecc1d8f115d',
          q: this.searchQuery,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
          page: this.currentPage,
          per_page: this.perPage,
        }
      });
    
      this.incrementPage();
      return response.data;
    }
    catch (error) {
      console.log(error);
    }
  }
  
  incrementPage() {
    this.currentPage += 1;
  }

  resetPage() {
    this.currentPage = 1;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}