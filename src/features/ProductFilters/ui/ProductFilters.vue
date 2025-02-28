<script setup lang='ts'>
    import { computed, ref } from 'vue';
    import { useProductStore } from '../../../entities/Product/model/store/productStore';
    import Input from '../../../shared/ui/Input/Input.vue';
    import Select from '../../../shared/ui/Select/Select.vue';
    import { categories, type Product } from '../../../entities/Product';
    import Button from '../../../shared/ui/Button/Button.vue';

    const store = useProductStore();
    const sortBy = ref(store.sortBy);

    const searchQuery = computed({
        get: () => store.searchQuery,
        set: (value) => store.setSearchQuery(value),
    });

    const updateSort = (value: keyof Product) => {
        store.setSortBy(value);
    };

    const selectedCategory = computed({
        get: () => store.sortCategory,
        set: (value) => store.setSortCategory(value),
    });


    const sortOptions = [
        { value: "name", name: "По названию" },
        { value: "price", name: "По цене" },
    ];

</script>

<template>
    <div class="filters">
        <Input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Поиск по названию..." 
        />

        <Select 
            v-model="sortBy" 
            :options="sortOptions" 
            @update:modelValue="updateSort"
            title="Сортировать по ..."
        />

        <Select 
            v-model="selectedCategory" 
            :options="categories"
            title="Выберите категорию ..."
        />
        <Button @click="store.toggleSortOrder">
            {{ store.sortOrder === "asc" ? "↑" : "↓" }}
        </Button>
        <Button @click="store.resetFilters">
            Сбросить
        </Button>
    </div>
</template>

<style scoped>
    .filters{
        margin: 20px 0;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
    @media(max-width: 556px){
        .filters{
            display: grid;
        }
    }
</style>