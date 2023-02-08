<template>
  <div>
    <div v-for="customer in customers" :key="customer.id">
        <h2>{{ customer.name }} </h2>
        {{ customer.id }}
    </div>
    </div>
</template>

<script>

import getCustomers from "../services/getCustomers.js";

export default {

   setup() {

    const { customers, err, load } = getCustomers()

    load()

    console.log("customers", customers)

    return { customers, err }

   }


}

</script>

<style>

</style>