
<template>
    <base-card>
        <form @submit.prevent="submitResource">
            <h3>Title</h3>
            <input type="text" name="title" required/>
            <h3>Description</h3>
            <textarea rows="5" name="description" required></textarea>
            <h3>Link</h3>
            <input type="url" name="link" required/>
            <br/>
            <base-button type="submit" :is-active="true">Add Resource</base-button>
        </form>
    </base-card>
</template>

<script>

export default {
    methods: {
        submitResource(e) {
            const form = e.currentTarget;
            const resource = {
                id: Date.now(),
                title: form.title.value,
                description: form.description.value,
                link: form.link.value,
                action: "add",
            };

            this.$emit("data-modified", resource);

            form.reset();
        }
    },
    emits: ["data-modified"]
}
</script>

<style scoped>
    input, textarea {
        display: block;
        width: 100%;
    }
    textarea {
        resize: none;
    }
</style>
