// services/doctorService.js
import api from './api';

export const getDoctorById = async (id) => {
    try {
        const response = await api.get(`/Doctors/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching doctor data:', error);
        throw error;
    }
};

export const updateDoctorById = async (id, doctorData) => {
    try {
        await api.put(`/Doctors/${id}`, doctorData);
    } catch (error) {
        console.error('Error updating doctor:', error);
        throw error;
    }
};
