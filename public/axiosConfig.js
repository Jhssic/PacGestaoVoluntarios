import axios from'axios';

// Cria uma instância do Axios com configurações personalizadas
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001', // URL base para todas as requisições
  timeout: 10000, // Tempo máximo de espera em milissegundos
  headers: {
    'Content-Type': 'application/json',
    // Adicione outros cabeçalhos aqui, se necessário
  }
});

/*// Adiciona um interceptador de requisição
axiosInstance.interceptors.request.use(
  config => {
    // Modifique a configuração da requisição antes de enviá-la
    // Por exemplo, adicionar token de autenticação
    const token = 'your-auth-token'; // substitua pelo seu token de autenticação
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // Faça algo com o erro da requisição
    return Promise.reject(error);
  }
);
*/

// Adiciona um interceptador de resposta
axiosInstance.interceptors.response.use(
  response => {
    // Qualquer status code que dentro do intervalo de 2xx causa esta função ser acionada
    // Faça algo com os dados da resposta
    return response;
  },
  error => {
    // Qualquer status code que fora do intervalo de 2xx causa esta função ser acionada
    // Faça algo com o erro da resposta
    return Promise.reject(error);
  }
);

export default axiosInstance;
