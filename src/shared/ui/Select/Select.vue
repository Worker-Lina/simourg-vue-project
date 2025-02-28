<script setup lang='ts'>
    import { defineProps, defineEmits } from "vue";

    const props = defineProps<{
        modelValue: string;
        title: string;
        options: { value: string; name: string }[];
    }>();

    const emit = defineEmits(["update:modelValue"]);

    const updateSort = (event: Event) => {
        const target = event.target as HTMLSelectElement;
        emit("update:modelValue", target.value);
    };
</script>

<template>
    <select 
        :value="modelValue" 
        @change="updateSort" 
        class="select"
    >
        <option disabled value="">{{ title }}</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
            {{ option.name }}
        </option>
    </select>
</template>

<style scoped>
    .select{
        height: 40px;
        padding: 0 20px;
        border: none;
        outline: none;
        border-radius: 10px;
    }
</style>