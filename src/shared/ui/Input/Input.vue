<script setup lang="ts">
    import { computed } from "vue";

    const props = defineProps<{ modelValue: string | number }>();
    const emit = defineEmits(["update:modelValue"]);

    const inputType = computed(() => (typeof props.modelValue === "number" ? "number" : "text"));
</script>

<template>
    <input
        :value="modelValue"
        class="input" 
        :type="inputType"
        @input="emit('update:modelValue', inputType === 'number' ? Number(($event.target as HTMLInputElement).value) : ($event.target as HTMLInputElement).value)"
    />
</template>

<style scoped>
.input {
    height: 40px;
    outline: none;
    border: none;
    padding: 0 20px;
    border-radius: 10px;
}
</style>
