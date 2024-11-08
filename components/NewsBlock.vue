<script lang="ts" setup></script>

<template>
    <a href="#" class="block-wrapper">
        <div class="block">
            <div class="block-img">
                <img class="block-img-bg" src="~/assets/images/poster.webp" alt="123" />
            </div>
            <div class="block-content">
                <div class="block-title title">Квартира недели в Квартале «Медовый»</div>
                <div class="block-pins">
                    <UiPin color="red">новости</UiPin>
                    <UiPin color="blue">стройка</UiPin>
                </div>
            </div>
        </div>
        <div class="block-arrow">
            <img src="~/assets/images/pink-arrow-r.svg" alt="" />
        </div>
    </a>
</template>

<style lang="scss" scoped>
    .block {
        display: flex;
        // position: relative;
        mask-image: url('~/assets/images/bg-news.png');
        mask-position: right;
        mask-size: 100% 100%;
        background-color: #f3f3f3;
        height: 100%;
        max-height: 10rem;
        gap: 20px;
        transition: color 0.2s ease-in-out;
        z-index: 0;
        &-wrapper {
            position: relative;
            color: black;
            text-decoration: none;
            width: 100%;
        }
        &-content {
            padding: 1rem 0;
        }
        &-img {
            position: relative;
            width: 30%;
            height: 100%;
            border-radius: 1rem;
            overflow: hidden;
            &-bg {
                object-fit: cover;
                height: 100%;
                width: 100%;
                transition: transform 0.2s ease-in-out;
            }
        }
        &-content {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        &-arrow {
            position: absolute;
            top: 0;
            right: 0;
            width: 3.75rem;
            height: 3.75rem;
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: center;
            // border: 1px solid black;
            border-radius: 1rem;
            box-shadow: 0 0.4rem 0.12rem #1e1a230d, 0 0.2rem 0.6rem #5912731a, 0 0.1rem 0.2rem #3e4a5905;
            cursor: pointer;
            & > img {
                width: 50%;
                height: 50%;
            }
        }
        &-pins {
            display: flex;
            gap: 10px;
        }
        &:hover {
            color: $color-red;
            .block-img-bg {
                transform: scale(1.1);
            }
        }
        @media only screen and (max-width: $md) {
            flex-direction: column;
            max-height: 20rem;
            gap: 5px;
            mask-image: none;
            background-color: #f3f3f3;
            border-radius: 1rem;
            &-img {
                position: relative;
                width: 100%;
                min-height: 10rem;
            }
            &-content {
                gap: 10px;
                padding: 1rem;
            }
            &-arrow {
                top: unset;
                bottom: 0;
                right: 0;
                box-shadow: none;
            }
        }
    }
</style>
