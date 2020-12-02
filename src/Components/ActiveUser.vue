
<template>
    <section class="activeUser">
        <h2>Name: {{ name }}</h2>
        <h3>Age: {{ age }}</h3>
    </section>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        }
    }
}
</script>

<style>
    .activeUser {
        margin-bottom: 1rem;
    }
    
    .activeUser h2, .activeUser h3 {
        font-size: 1.5em;
        margin: 0px;
    }

</style>
