import React, { useEffect, useState } from "react";
import axios from 'axios';
import style from './adoptionList.module.css'

interface Forms {
    id: string,
    name: string,
    lastName: string,
    email: string,
    address: string,
    pais: string,
    phone: string,
    economicSituation: string,
    previousPetExperience: string,
    petAllergy: string,
    dailyPetTime: string,
    estado: string,
    petId: string,
}

const AdoptionFormList: React.FC = () => {
    const [forms, setForms] = useState<Forms[]>([]);

    useEffect(() => {
        const fetchAdoptionsForms = async () => {
            try {
                const response = await axios.get<Forms[]>('/forms');
                const formsWithPets = await Promise.all(
                    response.data.map(async (form) => {
                        const petsResponse = await axios.get('/pets');
                        const pets = petsResponse.data;
                        const pet = pets.find((pet: any) => pet.id === form.petId);
                        const petName = pet ? pet.name : 'Nombre no encontrado';
                        return { ...form, petId: petName };
                    })
                );
                setForms(formsWithPets);
            } catch (error) {
                console.error(error);
            }
        }
        fetchAdoptionsForms();
    }, []);

    const handleAceptar = async (id: string) => {
        try {
            await axios.get(`/forms/${id}/aceptar`);
            //actualizar estado a aceptado
            const updatedForms = forms.map((form) => {
                if (form.id === id) {
                    return { ...form, estado: 'aceptado' };
                }
                return form;
            });
            setForms(updatedForms);
            alert('Formulario aceptado correctamente');
        } catch (error) {
            console.error(error);
        }
    }

    const handleRechazar = async (id: string) => {
        try {
            await axios.get(`/forms/${id}/rechazar`)
            //actualizar estado a rechazado
            const updatedForms = forms.map((form) => {
                if (form.id === id) {
                    return { ...form, estado: 'rechazado' };
                }
                return form;
            });
            setForms(updatedForms);
            alert('Formulario rechazado');
        } catch (error) {
            console.error(error);
        }
    }

    const getEstadoColor = (estado: string): string => {
        if (estado === 'pendiente'){
            return style.orange;
        } else if (estado === 'aceptado') {
            return style.green;
        } else if (estado === 'rechazado') {
            return style.red;
        }
        return '';
    }

    return (
        <div className={style.listContain}>
            <h2>Formularios de solicitud de adopción</h2>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Dirección</th>
                        <th>Pais</th>
                        <th>Telefono</th>
                        <th>Situación <br /> Económica</th>
                        <th>Experiencia previa <br /> con mascotas</th>
                        <th>Alergia a <br /> mascotas</th>
                        <th>Tiempo a dedicar <br /> a la mascota</th>
                        <th>Id pet</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {forms.map((form) => (
                        <tr key={form.id}>
                            <td>{form.name} {form.lastName}</td>
                            <td>{form.email}</td>
                            <td>{form.address}</td>
                            <td>{form.pais}</td>
                            <td>{form.phone}</td>
                            <td>{form.economicSituation}</td>
                            <td>{form.previousPetExperience}</td>
                            <td>{form.petAllergy}</td>
                            <td>{form.dailyPetTime}</td>
                            <td>{form.petId}</td>
                            <td className={getEstadoColor(form.estado)} >{form.estado}</td>
                            <td>
                                {form.estado !== 'aceptado' && form.estado !== 'rechazado' && (
                                    <div className={style.butonsForm}>
                                        <button onClick={() => handleAceptar(form.id)}>Aceptar</button>
                                        <button onClick={() => handleRechazar(form.id)}>Rechazar</button>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default AdoptionFormList;