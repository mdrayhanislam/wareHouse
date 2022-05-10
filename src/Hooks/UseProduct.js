import { useEffect, useState } from "react";

const useProduct = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://lit-spire-37049.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return [services, setServices]
}

export default useProduct;