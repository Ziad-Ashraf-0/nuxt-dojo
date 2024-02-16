<template>
    <div>



        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque animi tempora culpa, blanditiis voluptatibus
            numquam illo facilis ipsam ex nam.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit reiciendis vitae, vel, doloribus repellendus
            corporis consequatur nam pariatur, sint mollitia quae! Omnis, eveniet.</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
const { data } = await useFetch('/api/currency/GBP')
</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}

p {
    margin: 20px 0;
}
</style>