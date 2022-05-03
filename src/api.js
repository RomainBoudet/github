import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const githubApi = createApi ({
  reducerPath: 'api', // valeur dispo sous state.api
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/search' }),
  endpoints: builder => ({
    getAllRepos: builder.query({ query: () => '/repositories?q=react&sort=star&order=desc&page=1&per_page=12' }) // par défault en GET, si on veut du POST : remplacer la string par : {url: '/posts', method: 'POST', body: newPost}
  })
}) 

export const { useGetAllReposQuery } = githubApi;

// je peux maintenant utiliser ce hook dans mes composant pour appeler mon API quand je le souhaite !
