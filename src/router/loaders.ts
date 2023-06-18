/* eslint-disable camelcase */
import { LoaderFunctionArgs } from 'react-router-dom'
import { api } from '../services/api'

export interface IssueResponse {
  html_url: string
  title: string
  created_at: string
  body: string
  user: {
    login: string
  }
  comments: number
}

interface UserRsponse {
  avatar_url: string
  bio: string
  company: string
  followers: number
  html_url: string
  login: string
  name: string
}

export const homeLoader = async () => {
  const response = await api.get<UserRsponse>(`/users/sethwololo`, {
    params: {
      Accept: 'application/vnd.github+json',
    },
  })

  const { data } = response

  return {
    avatarUrl: data.avatar_url,
    bio: data.bio,
    company: data.company,
    followers: data.followers,
    profileUrl: data.html_url,
    login: data.login,
    name: data.name,
  }
}

export const postLoader = async ({ params }: LoaderFunctionArgs) => {
  const response = await api.get<IssueResponse>(
    `/repos/ig-swll/github-blog/issues/${params.id}`,
    {
      params: {
        Accept: 'application/vnd.github+json',
      },
    },
  )

  const { body, user, comments, created_at, html_url, title } = response.data

  return {
    body,
    title,
    issueUrl: html_url,
    createdAt: new Date(created_at),
    author: user.login,
    comments,
  }
}
