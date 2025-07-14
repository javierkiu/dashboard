import { useEffect, useState } from 'react';
import type { OpenMeteoResponse } from '../types/DashboardTypes';

interface DataFetcherOutput {
    data: OpenMeteoResponse | null;
    loading: boolean;
    error: string | null;
}

export default function DataFetcher(city: string): DataFetcherOutput {

    const [data, setData] = useState<OpenMeteoResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Coordenadas por ciudad
        const cities: Record<string, { lat: number, lon: number }> = {
            guayaquil: { lat: -2.170998, lon: -79.922359 },
            quito: { lat: -0.180653, lon: -78.467834 },
            manta: { lat: -0.967653, lon: -80.708910 },
            cuenca: { lat: -2.900128, lon: -79.005896 }
        };
        const { lat, lon } = cities[city] || cities.guayaquil;
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,wind_speed_10m&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&timezone=America%2FChicago`
        // const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&timezone=America%2FChicago`;

        const fetchData = async () => {

            try {

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
                }

                const result: OpenMeteoResponse = await response.json();
                console.log("datos: ", result)
                setData(result);

            } catch (err: any) {

                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Ocurrió un error desconocido al obtener los datos.");
                }

            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [city]); // Se ejecuta cada vez que cambia la ciudad

    return { data, loading, error };
}