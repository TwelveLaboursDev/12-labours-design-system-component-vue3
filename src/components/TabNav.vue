<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
        v-for="tab in tabs"
        :label="tab.label"
        :name="tab.name"
        :key="tab.name"
      >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
export default {
  name: "TabNav",

  data() {
    return {
      activeName: "",
    };
  },

  props: {
    tabs: Array<{ label: String, name: String }>,
    activeTab: String,
  },

  watch: {
    activeTab: function() {
      this.activeName = this.activeTab;
    },
  },

  methods: {
    handleClick(tab) {
      this.$emit("tabClick", tab.props.name);
    },
  },

  created() {
    this.activeName = this.activeTab;
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/_variables.scss";

:deep(.el-tabs__nav.is-top) {
  .el-tabs__item {
    color: $text-color;
    line-height: 1rem;
    font-size: 1.15rem;
    height: 3.25rem;
    &.is-active {
      color: $app-primary-color;
      font-weight: bold;
    }
  }
}
:deep(.el-tabs__active-bar) {
  height: 0.3rem;
  background-color: $app-primary-color;
}
:deep(.el-tabs) {
  .el-tabs__nav-prev {
    font-size: large;
  }
  .el-tabs__nav-next {
    font-size: large;
  }
}
</style>
