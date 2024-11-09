<script lang="ts" setup>
    import type {INewsNext} from '~/types'

    const props = defineProps<{
        nextNews: INewsNext
    }>()
    const newsPins = props.nextNews?.tags
</script>

<template>
    <NuxtLink :to="{name: 'news-id', params: {id: nextNews.code}}" class="block-wrapper">
        <div class="block">
            <div class="block-img">
                <div class="block-img-date">
                    <span>{{ nextNews.date.split('-').join('.') }}</span>
                </div>
                <div class="block-img-bg" :style="{backgroundImage: `url(${nextNews.picture})`}"></div>
                <!-- <img class="block-img-bg" :src="nextNews.picture" alt="picture next nuws" /> -->
            </div>
            <div class="block-content">
                <div class="block-title title">{{ nextNews.title }}</div>
                <div class="block-pins">
                    <UiPin
                        v-for="pin in newsPins"
                        :color="pin.values[0].color"
                        :icon="pin.values[0].src ? pin.values[0].src : ''">
                        {{ pin.values[0].name }}
                    </UiPin>
                </div>
            </div>
        </div>
        <div class="block-arrow">
            <img src="~/assets/images/pink-arrow-r.svg" alt="" />
        </div>
    </NuxtLink>
</template>

<style lang="scss" scoped>
    .block {
        display: flex;
        // position: relative;
        mask-image: url('~/assets/images/bg-news.png');
        mask-position: right;
        mask-size: 100% 100%;
        background-color: $color-light;
        height: 100%;
        min-height: 10rem;
        gap: 20px;
        transition: color $default-time ease-in-out;
        z-index: 0;
        &-wrapper {
            position: relative;
            color: $color-black;
            text-decoration: none;
            width: 100%;
        }
        &-content {
            padding: 1rem 0;
            .block-title {
                font-weight: bolder;
                font-size: 1rem;
            }
        }
        &-img {
            position: relative;
            width: 18rem;
            // height: 100%;
            border-radius: 1rem;
            overflow: hidden;
            &-bg {
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                height: 100%;
                // max-width: 20rem;
                width: 100%;
                transition: transform $default-time ease-in-out;
            }
            &-date {
                position: absolute;
                top: 1rem;
                left: 1rem;
                color: $color-white;
                padding: 0.25rem 0.75rem;
                border-radius: 1rem;
                background-color: rgba($color: $color-pin-blue, $alpha: 0.75);
                z-index: 2;
            }
        }
        &-content {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .block-title {
                max-width: 85%;
            }
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

        @media only screen and (max-width: $md) {
            flex-direction: column;
            max-height: 20rem;
            gap: 5px;
            mask-image: none;
            background-color: $color-light;
            border-radius: 1rem;
            &-img {
                // position: relative;
                width: 100%;
                // min-height: 10rem;
                &-bg {
                    height: 10rem;
                }
            }
            &-content {
                gap: 10px;
                padding: 1rem;
                .block-title {
                    max-width: 100%;
                }
            }
            &-arrow {
                top: unset;
                bottom: 0;
                right: 0;
                box-shadow: none;
            }
        }
    }
    .block-wrapper {
        &:hover {
            color: $color-red;
            .block-img-bg {
                transform: scale(1.1);
            }
        }
    }
</style>
