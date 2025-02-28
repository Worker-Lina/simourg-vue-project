<script setup lang="ts">
    import { onMounted, TransitionGroup } from "vue";
    import { useProductStore } from "../../model/store/productStore";
    import ProductCard from "../ProductCard/ProductCard.vue";

    const store = useProductStore();

    onMounted(() => {
        store.fetchProducts();
    });
</script>

<template>
        <div class="product-list">
            <TransitionGroup name="product-list-transition">
                <ProductCard
                    v-for="product in store.filteredProducts"
                    :key="product.id"
                    :product="product"
                    :onRemove="store.removeProduct"
                />
            </TransitionGroup>
        </div>
</template>

<style scoped>
    .product-list{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 20px;
    }
    .product-list-transition-item{
        display: inline-block;
        margin-right: 10px;
    }
    .product-list-transition-enter-active,
    .product-list-transition-leave-active{
        transition: all .4s ease;
    }
    .product-list-transition-enter-from,
    .product-list-transition-leave-to{
        opacity: 0;
        transform: translateX(130px);
    }
    .product-list-transition-move{
        transition: transform .4s ease;
    }
    @media(max-width: 1024px){
        .product-list{
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
    @media(max-width: 776px){
        .product-list{
            grid-template-columns: 1fr 1fr;
        }
    }
    @media(max-width: 556px){
        .product-list{
            grid-template-columns: 1fr;
        }
    }
</style>