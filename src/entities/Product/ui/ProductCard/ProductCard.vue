<script setup lang='ts'>
    import { defineProps } from "vue";
    import type { Product } from "../../model/types/product";
    import placeholder from '../../../../shared/assets/images/default.webp'

    const props = defineProps<{
        product: Product;
        onRemove: (id: number) => void;
    }>();
</script>

<template>
    <div class="product">
        <button @click="onRemove(product.id)" class="product-delete-button">Удалить</button>
        <h2 class="product-title">{{ product.name }}</h2>
        <img 
            class="product-image"
            :src="product.image || placeholder"
            :alt="product.name"
            @error="(event) => {
                const target = event.target as HTMLImageElement;
                target.src = placeholder;
            }"
        >
        <div class="product-category">{{ product.category }}</div>
        <p class="product-description">{{ product.description }}</p>
        <h3 class="product-price">{{ $formatNumber(product.price) }} тг</h3>
    </div>
</template>

<style lang="scss" scoped>
    .product{
        background: var(--accent-color);
        padding: 30px 20px 20px;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        position: relative;

        &-title{
            font-size: 22px;
            font-weight: 700;
            color: var(--main-color);
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            display: -webkit-box;
        }

        &-category{
            background: #fff;
            padding: 4px 8px;
            border-radius: 8px;
            width: fit-content;
            color: var(--main-color);
            font-weight: 600;
        }

        &-description{
            -webkit-line-clamp: 3;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            display: -webkit-box;
        }

        &-price{
            font-size: 32px;
            font-weight: 700;
            color: var(--main-color);
            margin-left: auto;
            margin-top: auto;
        }

        &-image{
            height: 130px;
            width: 100%;
            object-fit: contain;
        }
        &-delete-button{
            position: absolute;
            top: 4px;
            right: 4px;
            background: var(--main-color);
            border: none;
            outline: none;
            color: #fff;
            border-radius: 8px;
            height: 28px;
            padding: 0 10px;
            cursor: pointer;
            font-size: 14px;
        }
    }
    .flex{
        display: flex;
        justify-content: space-between;
    }
</style>