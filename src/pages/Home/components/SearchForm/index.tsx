import { useForm } from 'react-hook-form'
import { FormContainer, Input } from './styles'
import { useContext } from 'react'
import { PostsContext } from '../../../../contexts/PostsContext'

export function SearchForm() {
  const { fetchPosts, posts } = useContext(PostsContext)
  const { handleSubmit, register, reset } = useForm()

  async function searchPosts(form: any) {
    const { title } = form

    fetchPosts(title)
    reset()
  }

  return (
    <FormContainer onSubmit={handleSubmit(searchPosts)}>
      <div>
        <h3>Publicações</h3>
        <span>{posts.length} publicações</span>
      </div>
      <Input
        type="search"
        placeholder="Buscar conteúdo"
        {...register('title')}
      />
    </FormContainer>
  )
}
