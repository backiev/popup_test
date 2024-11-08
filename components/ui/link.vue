<script lang="ts" setup>
    const props = defineProps<{
        href?: string
        active?: boolean
    }>()
</script>

<template>
    <a :href="href ? href : '#'" class="link" :class="{active: active}">
        <slot></slot>
    </a>
</template>

<style lang="scss" scoped>
    .link {
        color: $color-black;
        text-decoration: none;
        &.active {
            color: $color-gray;
            opacity: 0.4;
        }
    }
</style>
