import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Product } from "../types/product";
import { api } from "@/shared/api/api";

export const useProductStore = defineStore("product", () => {
    const products = ref<Product[]>([]);
    const searchQuery = ref("");
    const sortBy = ref<keyof Product>("name");
    const sortCategory = ref<string>("");
    const sortOrder = ref<"asc" | "desc">("asc");

    const filteredProducts = computed(() => {
        return products.value
        .filter((product) =>
            searchQuery.value
            ? product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
            : true
        )
        .filter((product) =>
            sortCategory.value ? product.category === sortCategory.value : true
        )
        .sort((a, b) => {
            const factor = sortOrder.value === "asc" ? 1 : -1;
            return a[sortBy.value] > b[sortBy.value] ? factor : -factor;
        });
    });

    async function fetchProducts() {
        try {
            const { data } = await api.get<Product[]>("/products");
            products.value = data;
        } catch (error) {
            console.error("Ошибка загрузки продуктов:", error);
        }
    }

    async function addProduct(product: Product) {
        try {
            const { data } = await api.post<Product>("/products", product);
            products.value.push(data);
        } catch (error) {
            console.error("Ошибка добавления продукта:", error);
        }
    }

    async function removeProduct(productId: number) {
        try {
            await api.delete(`/products/${productId}`);
            products.value = products.value.filter(product => product.id !== productId);
        } catch (error) {
            console.error("Ошибка удаления продукта:", error);
        }
    }

    function resetFilters(){
        searchQuery.value = '';
        sortBy.value = 'name';
        sortCategory.value = '';
        sortOrder.value = 'asc';
    }

    function setSearchQuery(query: string) {
        searchQuery.value = query;
    }

    function setSortBy(field: keyof Product) {
        sortBy.value = field;
    }

    function setSortCategory(field: string) {
        sortCategory.value = field;
    }

    function toggleSortOrder() {
        sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
    }

    return {
        products,
        searchQuery,
        sortBy,
        sortOrder,
        sortCategory,
        filteredProducts,
        setSortCategory,
        fetchProducts,
        setSearchQuery,
        setSortBy,
        toggleSortOrder,
        addProduct,
        removeProduct,
        resetFilters
    };
});
