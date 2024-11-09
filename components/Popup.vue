<script lang="ts" setup>
    const props = defineProps<{
        status: string
    }>()
</script>

<template>
    <div class="popup-wrapper">
        <div class="popup">
            <div class="popup-close">
                <img src="~/assets/images/white-cross.svg" alt="Кнопка закрытия" />
            </div>
            <div class="popup-container">
                <slot v-if="status === 'success'" />
                <div v-if="status === 'error'">404 not found</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .popup-wrapper {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        &::before {
            content: '';
            background-color: $color-black;
            opacity: 0.4;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 5;
        }
    }

    .popup {
        position: absolute;
        top: 50px;
        left: 0;
        margin: 0 20px;
        width: calc(100% - 42px);
        height: calc(100% - 52px);
        background-color: $color-white;
        border-radius: 0.75rem 0.75rem 0 0;
        z-index: 10;
        overflow: hidden;
        padding-top: 32px;
        &-container {
            max-width: 800px;
            width: calc(100% - 40px);
            margin: 0 auto;
            padding: 0 20px;
        }
        &-close {
            position: absolute;
            top: 0;
            right: 0;
            width: 4rem;
            height: 3rem;
            background-image: url('~/assets/images/close-bg.png');
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 0.4rem 1rem;
            cursor: pointer;
            & > img {
                height: 2rem;
                width: 2rem;
            }
        }
        @media only screen and (max-width: $md) {
            margin: 0 5px;
            width: calc(100% - 10px);
        }
    }
</style>
