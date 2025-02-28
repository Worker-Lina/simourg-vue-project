<script setup lang='ts'>
    import { ref } from 'vue';
    import { Modal } from "../../../../shared/ui/Modal";
    import { ProductForm } from "../../../../features/ProductForm";
    import Button from "../../../../shared/ui/Button/Button.vue";
    const isModalOpen = ref(false);
</script>

<template>
    <div class="top">
        <h1>Список товаров</h1>
        <Button @click="isModalOpen = true">Создать</Button>
    </div>
    <Modal :isOpen="isModalOpen" @close="isModalOpen = false">
        <ProductForm @close="isModalOpen = false"/>
    </Modal>
</template>

<style scoped>
    .top{
        display: flex;
        justify-content: space-between;
        margin: 20px 0;

        h1{
            font-weight: 700;
            font-size: 36px;
            color: #fff;
        }
    }
</style>