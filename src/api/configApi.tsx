import axios from 'axios'

export const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key: 'fdefebc6b770360c262e8aaaa66319d4',
        language: 'es-ES'
    }
})