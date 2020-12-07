
<template>
    <base-card class="container" v-for="resource in resourceList" :key="resource.id">
        <section>
            <h2>{{ resource.title }}</h2>
            <p>{{ resource.description }}</p>
            <a :href="resource.link">View Resource</a>
        </section>
        <base-button @click="deleteResource(resource.id)">Delete</base-button>
    </base-card>
</template>

<script>
export default {
    props: ["resource-list"],
    emits: ["data-modified"],
    methods: {
        deleteResource(id) {
            this.$emit("data-modified", {
                id,
                action: "remove",
            });
        }
    }
}
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: space-between;
        align-items:flex-start;
    }

    button {
        margin-top:1rem;
    }

    a {
        color: darkgoldenrod;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }


</style>
