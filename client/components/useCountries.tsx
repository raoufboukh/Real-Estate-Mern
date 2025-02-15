import countries from "world-countries";

const formattedCountries = countries.map((country) => ({
    value: country.name.common,
    label: `${country.flag}  ${country.name.common}`,
    latlng: country.latlng,
    region: country.region
}));

const useCountries = () => {
    return formattedCountries;
}

export default useCountries;