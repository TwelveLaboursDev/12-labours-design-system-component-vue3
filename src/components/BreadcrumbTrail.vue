<template>
  <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
    <el-breadcrumb-item v-for="item in breadcrumb" :key="item.label">
      <template
        v-if="linkComponent === 'nuxt-link' || linkComponent === 'router-link'"
      >
        <component :is="linkComponent" :to="item.to" class="hover-bold">
          {{ item.label.toUpperCase() }}
        </component>
      </template>
      <template v-else>
        <component :is="linkComponent" :href="item.to" class="hover-bold">
          {{ item.label.toUpperCase() }}
        </component>
      </template>
    </el-breadcrumb-item>
    <el-breadcrumb-item>
      <a class="page-title">
        {{ formatTitle(title).toUpperCase() }}
      </a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts">
export default {
  name: "BreadcrumbTrail",

  props: {
    breadcrumb: Array<{ to: Array<{ name: String }>, label: String }>,
    title: String,
    linkComponent: {
      type: String,
      default: "nuxt-link",
    },
  },

  methods: {
    /**
     * Formats breadcrumb length
     * 32 characters max
     * Truncation should occur at the end of a
     * word and not part way through a word.
     * @param {String} breadcrumb
     */
    formatTitle: function(title) {
      const truncated = title.replace(/^(.{32}[^\s]*).*/, "$1");
      return truncated.length === title.length ? title : `${truncated}...`;
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/_variables.scss";

.breadcrumb {
  height: fit-content;
  min-width: 15rem;
  background: $grey;
  display: flex;
  flex-wrap: wrap;
  padding: 0.75rem 3rem 0.75rem 3rem;
  a, .hover-bold {
    text-decoration: none !important;
    color: $cochlear !important;
    font-weight: normal;
    cursor: pointer;
  }
}
.hover-bold {
  &:hover {
    text-shadow: -0.02rem 0 0 currentColor, 0.02rem 0 0 currentColor;
  }
}
.page-title {
  font-weight: bold !important;
}
</style>
