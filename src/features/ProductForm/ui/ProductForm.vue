<script setup lang="ts">
    import Input from "../../../shared/ui/Input/Input.vue";
    import { useProductStore } from "../../../entities/Product/model/store/productStore";
    import { ref } from "vue";
    import { Select } from "../../../shared/ui/Select";
    import { Button } from "../../../shared/ui/Button";
    import { categories } from "../../../entities/Product";

    const emit = defineEmits(["close"]);

    const store = useProductStore();

    const newProduct = ref({
        name: "",
        price: 0,
        description: "",
        category: "",
        image: ""
    });

    const addProduct = () => {
        if (!newProduct.value.name || !newProduct.value.price || !newProduct.value.category) {
            alert("Заполните все обязательные поля!");
            return;
        }

        store.addProduct({
            id: Date.now(),
            ...newProduct.value
        });

        newProduct.value = { name: "", price: 0, description: "", category: "", image: "" };

        emit("close");
    };
</script>

<template>
    <form @submit.prevent class="form">
        <h2 class="title">Добавить продукт</h2>
        <Input v-model="newProduct.name" type="text" placeholder="Название" required />
        <Input v-model="newProduct.price" type="number" placeholder="Цена" required />
        <Input v-model="newProduct.description" type="text" placeholder="Описание" />
        <Input v-model="newProduct.image" type="text" placeholder="Ссылка на изображение" />
        
        <Select 
            v-model="newProduct.category"
            required
            :options="categories"
            title="Категория"
        />
        
        <Button @click="addProduct">Добавить</Button>
    </form>
</template>

<style scoped>
    .form{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .title{
        color: var(--main-color);
        font-weight: 700;
    }
</style>
