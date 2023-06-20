import type { AxiosInstance } from 'axios';
import http from '@/plugins/http';

export const signinService = async (email: string, password: string): Promise<any> => {
    const response = await http.post<AxiosInstance>('/auth/signin', {
        email,
        password
    });

    return response.data;
}