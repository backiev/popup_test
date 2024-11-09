<script lang="ts" setup>
    const props = defineProps<{
        color: string
        icon: string
    }>()
    console.log(props.icon)
</script>

<template>
    <div class="pin" :class="{red: color === 'red', blue: color === 'blue'}">
        <div class="pin-icon"></div>
        <div class="pin-title">
            <!-- <span v-if="icon">
                <img :src="icon" alt="иконка" />
            </span> -->
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .pin {
        display: flex;
        align-items: center;
        border-radius: 1rem;
        padding: 0.1em 0.6em;
        border: 1px solid $color-black;
        color: $color-black;
        &-title {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        &.blue {
            border: 1px solid $color-pin-blue;
            color: $color-pin-blue;
        }
        &.red {
            border: 1px solid $color-pin-red;
            color: $color-pin-red;
        }
    }
</style>
