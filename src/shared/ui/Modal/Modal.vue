<script setup lang="ts">
    import { defineProps, defineEmits } from "vue";

    defineProps<{ isOpen: boolean }>();
    const emit = defineEmits(["close"]);
</script>

<template>
    <div v-if="isOpen" class="modal-overlay" @click.self="emit('close')">
        <div class="modal-content">
            <button class="modal-close" @click="emit('close')">✖</button>
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: 10px;
}

.modal-content {
    background: var(--accent-color);
    padding: 20px;
    border-radius: 8px;
    max-width: 600px;
    position: relative;
    min-width: 300px;
    width: 100%;
}

.modal-close {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: none;
    font-size: 20px;
    cursor: pointer;
}
</style>