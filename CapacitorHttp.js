import { CapacitorHttp } from '@capacitor/core';

const response = await CapacitorHttp.get({
  url: 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/',
  headers: {
    'x-rapidapi-key': 'key',
    'x-rapidapi-host': 'planets-info-by-newbapi.p.rapidapi.com'
  }
});
