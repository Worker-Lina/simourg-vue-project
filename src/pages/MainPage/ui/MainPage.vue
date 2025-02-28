<script setup lang='ts'>
    import { ProductFilters } from '../../../features/ProductFilters';
    import { ProductCreate, ProductList } from '../../../entities/Product';
</script>

<template>
    <div>
        <ProductCreate/>
        <ProductFilters/>
        <ProductList />
    </div>
</template>

<style scoped>

</style>