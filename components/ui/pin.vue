<script lang="ts" setup>
    const props = defineProps<{
        color: string
    }>()
    // interface IColor {
    //     red: string
    //     blue: string
    // }
    // const colors: IColor = {
    //     red: '#ca2250',
    //     blue: '#5b4481',
    // }
    // console.log(colors['red'])
</script>

<template>
    <div class="pin" :class="{red: color === 'red', blue: color === 'blue'}">
        <div class="pin-icon"></div>
        <div class="pin-title">
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
