import axios from 'axios';

const API_URL = 'https://reqres.in/api';
const API_KEY = 'reqres-free-v1';

interface LoginResponse {
    token: string;
}

export const authService = {
    login: async (email: string, password: string): Promise<LoginResponse> => {
        try {
            const response = await axios.post(`${API_URL}/login`, {
                email,
                password
            }, {
                headers: {
                    'x-api-key': API_KEY
                }
            });

            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(error.response?.data?.error || 'Login failed');
            }
            throw new Error('An unexpected error occurred');
        }
    }
};
