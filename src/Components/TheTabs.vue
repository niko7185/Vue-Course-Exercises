
<template>
    <base-card>
        <base-button @click="changeTab(1)" :is-active="tabIndex == 1">Stored Resources</base-button>
        <base-button @click="changeTab(2)" :is-active="tabIndex == 2">Add Resources</base-button>
    </base-card>
</template>

<script>
export default {
    props: {
        tabIndex: {
            type: Number,
            default: 0,
        }
    },
    inject: ["changeTab"],
    
}
</script>

<style scoped>
    button {
        padding: 12px;
        background: transparent;
        border: none;
        color: #4b0082;
        cursor: pointer;
    }

    button:hover {
        background-color: rgba(74, 0, 128, 0.2);
    }

    .active {
        background-color: indigo;
        color: white;
    }

</style>
