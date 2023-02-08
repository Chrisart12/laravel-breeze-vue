import { ref } from "vue";
import axios from "axios"

const getCustomers = () => {

    const customers = ref([]);
    const err = ref(null);

    const load = async () => {

        try {

            // const data = await fetch("/api/customers");
            const data = await axios.get("/api/customers");

            
            // if (!data.ok) {
            //     throw Error("Il n'a pas de données");
            // }

            // const response = await data.json();

            customers.value = data.data.data

            // console.log("data", customers.value);


        } catch (error) {
            err.value = error.message;
            console.log(err.value);
        }
    };

    return { customers, err, load}
};

export default getCustomers
