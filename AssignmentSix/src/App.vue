
<template>
    <h1>Welcome user!</h1>
    <active-user :name="name" :age="age" />
    <user-data @input-change="changeData" />
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
        changeData(data) {
            
            this.name = data.name;
            this.age = data.age;
        }
    }
}
</script>

<style>
    #app {
        max-width: 40rem;
        margin: 0 auto;
        text-align: center;
        font-family: 'Jost', sans-serif;
    }

    section {
        
        background-color:aliceblue;
        padding: 2rem;
        box-shadow: 0px 0px 6px 3px rgba(0, 0, 0,0.3);
        display: flex;
        justify-content: space-around;
    }
    
    h1 {
        background-color: darkblue;
        padding: 1rem;
        color: white;
    }

</style>
