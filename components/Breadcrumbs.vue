<script lang="ts" setup>
    import type {IBreadCrumbs} from '../types'
    const props = defineProps<{
        breadCrumbs: IBreadCrumbs[]
    }>()
</script>

<template>
    <div class="breadcrumbs">
        <div v-for="item in breadCrumbs" class="breadcrumbs-item">
            <UiLink :active="item.active">{{ item.title }}</UiLink>
        </div>
    </div>
</template>

<style lang="scss">
    .breadcrumbs {
        display: flex;
        flex-direction: row;
        gap: 30px;
        max-width: calc(100% - 3rem);
        overflow: hidden;
        &-item {
            font-size: 1rem;
            text-transform: uppercase;
            position: relative;
            display: flex;
            align-items: center;
            word-wrap: none;
            flex-shrink: 0;
            &:not(:first-child)::before {
                content: '';
                width: 0.3rem;
                height: 0.3rem;
                background-color: $color-black;
                border-radius: 50%;
                display: inline-flex;
                position: absolute;
                left: -1rem;
            }
        }
    }
</style>
