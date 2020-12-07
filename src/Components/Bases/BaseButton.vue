
<template>
    <button :class="{active: isActive}">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        isActive: {
            type: Boolean,
            default: false,
        }
    }
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

    .active:hover {
        background-color: rgb(48, 0, 82);
    }

</style>
