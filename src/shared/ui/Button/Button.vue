<script setup lang='ts'>

</script>

<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
    .button{
        outline: none;
        border: none;
        height: 40px;
        background: var(--main-color);
        color: #fff;
        padding: 0 20px;
        border-radius: 10px;
        cursor: pointer;
        transition: .3s;
        &:hover{
            background: #104334;
        }
    }
</style>