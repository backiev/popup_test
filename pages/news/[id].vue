<script lang="ts" setup>
    import {breadCrumbs} from '~/data/breadcrumbs'
    definePageMeta({
        layout: 'default',
    })
    const route = useRoute()
</script>

<template>
    <Popup>
        <div class="news">
            <Breadcrumbs :breadCrumbs="breadCrumbs" />
            <div class="news-pins">
                <UiPin color="red">акции</UiPin>
                <UiPin color="blue">акция</UiPin>
            </div>
            <div class="title news-title">Квартира недели в Квартале «Медовый»</div>
        </div>
        <div class="news-next">
            <div class="title">Следующая статья</div>
            <NewsBlock />
        </div>
    </Popup>
</template>

<style lang="scss" scoped>
    .news {
        display: flex;
        flex-direction: column;
        &-title {
            margin-top: 1rem;
            font-size: 2.5rem;
            line-height: 3rem;
            font-weight: bolder;
        }
        &-pins {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 1rem;
        }
        &-next {
            margin-top: 2rem;
            display: flex;
            flex-direction: column;
            gap: 10px;
            .title {
                font-size: 1.5rem;
                font-weight: 500;
            }
        }
    }
</style>
