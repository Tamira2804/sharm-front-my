import axios from 'axios';
import {cookies} from "next/headers";

export const getAction = async (url: string, page?: string, limit?: string) => {
    const baseURL = process.env.NEXT_PUBLIC_API_URL;
    const token = cookies().get('token')

    return fetch(`${baseURL}/api/${url}?page=${page}&limit=${limit}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    })
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => data)
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
