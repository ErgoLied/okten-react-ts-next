import axios, {AxiosError} from "axios";
import {IAuthDataModel} from "../models/IAuthDataModel";
import {ITokenObtainPair} from "../models/ITokenObtainPair";
import {retriveLSData} from "./helpers/helpers";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {useNavigate} from "react-router-dom";

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2'
})

// intercept requests and implement access token to headers
axiosInstance.interceptors.request.use(request => {
    if (localStorage.getItem('tokenPair') && request.url !== '/auth' && request.url !== '/auth/refresh') {
        const tokenObtainPair = retriveLSData<ITokenObtainPair>('tokenPair');
        request.headers.set('Authorization', 'Bearer ' + tokenObtainPair.access);
    }

    return request;
})

const authService = {
    authentication: async (authData: IAuthDataModel): Promise<boolean> => {
        let response;
        try {
            response = await axiosInstance.post<ITokenObtainPair>('/auth', authData);
            localStorage.setItem('tokenPair', JSON.stringify(response.data));
        } catch (e) {
            console.error('auth error: ', e);
        }
        return !!(response?.data.access && response?.data.refresh);
    },

    refresh: async (refreshToken: string): Promise<boolean> => {
        let response;
        try {
            response = await axiosInstance.post<ITokenObtainPair>('/auth/refresh', {refresh: refreshToken});
            localStorage.setItem('tokenPair', JSON.stringify(response.data));
        } catch (e) {
            console.error('token refresh error: ', e);
        }

        return !!(response?.data.access && response?.data.refresh);
    }
}


const carService = {

    getAllCars: async (): Promise<ICarPaginatedModel | undefined> => {
        try {
            const response = await axiosInstance.get<ICarPaginatedModel>('/cars');
            return response.data;
        } catch (e) {
            const axiosErr = e as AxiosError;
            if (axiosErr?.response?.status === 401) {
                const tokenPair = retriveLSData<ITokenObtainPair>('tokenPair');
                if (tokenPair?.refresh) {
                    const success = await authService.refresh(tokenPair.refresh);
                    if (success) {
                        return await carService.getAllCars();
                    }
                }
            }
            console.error('Plz log in ', e);
            window.location.href = '/';
        }
    }

}

export {
    authService,
    carService
}