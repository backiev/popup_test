<script lang="ts" setup>
    import type {RuntimeConfig} from 'nuxt/schema'
    import type {INewsResponse, IBreadCrumbs, INewsNext, INewsResult} from '~/types'
    definePageMeta({
        layout: 'default',
    })
    const route = useRoute()
    const config: RuntimeConfig = useRuntimeConfig()
    const {data, status, error, refresh} = await useFetch<INewsResponse>(`${config.public.api_news}/${route.params.id}`)
    const news = data.value?.data.result
    const nextNews = news?.next
    const newsPins = news?.tags
    const breadCrumbs: IBreadCrumbs[] = [
        {
            id: 0,
            title: 'Главная',
            active: false,
        },
        {
            id: 1,
            title: 'Новости',
            active: false,
        },
        {
            id: 2,
            title: news?.title ? news.title : '',
            active: true,
        },
    ]
</script>

<template>
    <Popup :status="status">
        <div class="news">
            <Breadcrumbs :breadCrumbs="breadCrumbs" />
            <div class="news-pins">
                <UiPin v-for="pin in newsPins" :color="pin.values[0].color">
                    {{ pin.values[0].name }}
                </UiPin>
            </div>
            <div class="title news-title">{{ news?.title }}</div>
        </div>
        <div class="news-next" v-if="nextNews">
            <div class="title">Следующая статья</div>
            <NewsBlock :next-news="nextNews" />
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
