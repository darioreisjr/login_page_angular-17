import { api } from '../services/api'

export const getPosts = async () => {
    const { data } = await api.get('/posts')
     
    if (data) {
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {

    //TODO: BUSCAR UM POST EM ESPECIFICO.

    
  const post = await getPosts();

  const data = post.filter((post) => post.id === id);

  if (data) {
    return data[0];
  }

  return { title: 'Erro, não foi possivel localizar o seu POST' };
    

}