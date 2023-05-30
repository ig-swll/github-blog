import { useForm } from 'react-hook-form'
import { FormContainer, Input } from './styles'

export function SearchForm() {
  const { handleSubmit, register, reset } = useForm()

  async function searchPosts(form: any) {
    const { title } = form
    // const posts = await getPosts(title)
    console.log(title)
    reset()
  }

  return (
    <FormContainer onSubmit={handleSubmit(searchPosts)}>
      <div>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </div>
      <Input
        type="search"
        placeholder="Buscar conteúdo"
        {...register('title')}
      />
    </FormContainer>
  )
}
