<script setup lang="ts">
import { ref } from 'vue'

let breadcrumb = [
  {
    to: {
      name: "index",
    },
    label: "HOME",
  },
  {
    to: {
      name: "index",
    },
    label: "HOMBig titleE HOMBig titleE HOMBig titleE",
  },
]
let pageTitle = "News"
let tabs = [
  {
    label: "Upcoming",
    name: "upcoming",
  },
  {
    label: "Past",
    name: "past",
  },
]
let currentTab = "upcoming"
let currentPage = ref(1)
let totalCount = ref(50)
let pageSize = ref(5)
let cards_list = [
  {
    type: "Thumbnail",
    url: "imageUrl1",
    filename: "filename1",
    id: "id1",
  },
  {
    type: "Scaffold",
    url: "imageUrl2",
    filename: "filename2",
    id: "id2",
  },
  {
    type: "Flatmap",
    imaurlgeUrl: "",
    filename: "Pig",
    id: "Pig",
  },
  {
    type: "Plot",
    url: "imageUrl4",
    filename: "filename4",
    id: "id4",
  },
]
let all_models = new Set(['Thumbnail', 'Scaffold', 'Flatmap', 'Plot'])

function changeTab(val) {
  currentTab = val;
  // this.$router.push({
  //   path: this.$route.path,
  //   query: { datasetTab: val },
  // });
}
function onPaginationChange(page) {
  currentPage.value = page;
}
function updatePageSize(limit) {
  pageSize.value = limit === "View All" ? 100 : limit;
  currentPage.value = 1;
}
function viewContent(type, url, uuid) {
  console.log(type, url, uuid);
  // if (type === "Thumbnail") {
  //   window.open(url);
  // } else if (type === "Scaffold" || type === "Plot") {
  //   const route = this.$router.resolve({
  //     name: `data-maps-${type.toLowerCase()}-id`,
  //     params: { id: uuid },
  //     query: { access: this.$route.query.access },
  //   });
  //   window.open(route.href);
  // }
}
</script>

<template>
  <breadcrumb-trail :breadcrumb="breadcrumb" :title="pageTitle" linkComponent="router-link" />

  <div style="padding: 2em;">
    <tab-nav :tabs="tabs" :active-tab="currentTab" v-on:tabClick="changeTab" />
  </div>

  <div class="paginations">
    <pagination-menu 
      :page-size="pageSize"
      @update-page-size="updatePageSize"
    />
    <pagination :selected="currentPage" :total-count="totalCount" :page-size="pageSize" @select-page="onPaginationChange" />
  </div>

  <carousel-card :cards="cards_list" :all_models="all_models" @cardInfo="viewContent" />
</template>

<style lang="scss">
.paginations {
  display: flex;
  align-items: center;
}
</style>
