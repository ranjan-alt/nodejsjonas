import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RapidApi() {
    // Create a state variable to store the API response data
    const [cocktails, setCocktails] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Define the API request configuration
        const options = {
            method: 'GET',
            url: 'https://the-cocktail-db.p.rapidapi.com/search.php',
            params: { s: 'vodka' },
            headers: {
                'X-RapidAPI-Key': 'dd221bb2c7mshaf333f0227cfca6p175860jsn2444264fbad8',
                'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
            },
        };

        // Make the API request
        axios
            .request(options)
            .then((response) => {
                console.log(response, "ranjan")
                // Set the API response data to the state variable
                setCocktails(response.data.drinks);
            })
            .catch((error) => {
                // Handle errors
                setError(error);
            });
    }, []);

    // Render the data
    return (
        <div>
            {error ? (
                <p>Error: {error.message}</p>
            ) : (
                <ul>
                    {cocktails.map((cocktail) => (
                        <li key={cocktail.idDrink}>{cocktail.strDrink}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default RapidApi;
