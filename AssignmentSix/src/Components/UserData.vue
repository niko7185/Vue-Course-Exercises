
<template>
    <section class="dataInput">
        <div>
            <h3>Input name</h3>
            <input type="text" v-model="name" @input="sendInput" />
        </div>
        <div>
            <h3>Input age</h3>
            <input type="number" v-model="age" @input="sendInput" />
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            age: 0,
        };
    },
    methods: {
        sendInput() {
            
            this.$emit("input-change", {
                name: this.validName,
                age: this.validAge,
            });
        }
    },
    computed: {
        validName() {
            
            if (!this.name) {
                return "none"
            }
            
            return this.name;
        },
        validAge(){
            if (!this.age) {
                return 0;
            }
            
            return parseInt(this.age);
        }
    },
    emits: {
        "input-change": function(data) {
            if (data && data.age && data.name) {
                return true;
            }
            console.log("User data not found");

            return false;

        }
    }
}
</script>

<style>

</style>
