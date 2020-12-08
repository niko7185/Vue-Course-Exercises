
<template>
    <base-card>
        <form @submit.prevent="submitResource">
            <h3>Title</h3>
            <input type="text" name="title" />
            <h3>Description</h3>
            <textarea rows="5" name="description" ></textarea>
            <h3>Link</h3>
            <input type="url" name="link" />
            <br/>
            <base-button type="submit" :is-active="true">Add Resource</base-button>
        </form>
    </base-card>
    <teleport to="body">
        <message-box v-show="showError" @close="showError = false">
        <template #message-heading>
            <h2>Invalid Input</h2>
        </template>
        <p>Unfortunately, at least one required input was invalid.</p>
        <br/>
        <p v-for="(msg, index) in errorMessages" :key="index"> {{ msg }} </p>
    </message-box>
    </teleport>
</template>

<script>

export default {
    inject: ["addResource"],
    data() {
        return {
            showError: false,
            errorMessages: [],
        }
    },
    methods: {
        submitResource(e) {
            const form = e.currentTarget;

            const title = form.title.value.trim();
            const description = form.description.value.trim();
            const link = form.link.value.trim();
            
            const validation = this.validSubmition(form);
            
            if (!validation.some(v => v.error)) {

                const resource = {
                    id: Date.now(),
                    title,
                    description,
                    link,
                };
                
                this.addResource(resource);

                form.reset();
            } else {
                this.errorMessages = [];

                validation.forEach(v => {
                    
                    if(v.error) {
                        this.errorMessages.push(v.meesage);
                    }
                });

                this.showError = true;
            }
        },
        checkEmpty(input) {
            
            if (!input.value.trim()) {
                return { error: true, meesage: `The ${input.name} has not been given.` };
            }

            return { error: false };
        },
        validSubmition(form) {
            
            const validatedInputs = [form.title, form.description, form.link].map(input => {
                let validation = this.checkEmpty(input);
                
                return validation;
            });
            
            return validatedInputs;
        }
    },
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
    
    h2, p {
        margin: 0px;
    }

</style>
