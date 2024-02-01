import axios from 'axios';

type DataRequest = {
  data: object
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  token?: string
}

const baseURL = import.meta.env.VITE_ENDPOINTSERVER || 'http://localhost:3333'; // URL base da API

const routerLoginUser = '/login'; // Rota utilizada para login de usuários

const requestServer = async ({
  data,
  url = '/',
  method = 'GET',
  token,
}: DataRequest) => {
  const response = await axios({
    method,
    url: `${baseURL}${url}`,
    data,
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  });
  
  return response;
}

export {
  requestServer,
  routerLoginUser,
}