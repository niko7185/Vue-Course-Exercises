
<template>
    <div id="backdrop">
        <dialog open>
            <section id="header">
                <slot name="message-heading"></slot>
            </section>
            <section>
                <slot></slot>
            </section>
            <base-button :is-active="true" @click="confirm">Okay</base-button>
        </dialog>
    </div>
</template>

<script>
export default {
    emits: ["close"],
    methods: {
        confirm() {
            this.$emit("close");
        }
    }
}
</script>

<style scoped>
    #backdrop {
        background-color: rgba(0, 0, 0, 0.7);
        position: fixed;
        height: 100vh;
        width: 100vw;
        top:  0;
    }
    dialog {
        border-radius: 15px;
        min-width: 50vw;
        position: fixed;
        top: 20vh;
        overflow: hidden;
        padding: 0px;
        border-width:  1px;
    }
    
    #header {
        color: white;
        background-color: indigo;
    }

    section {
        padding: 1rem;
    }
    
    dialog button {
        float: right;
        margin: 16px;
        padding: 12px 20px;
    }
    
</style>
