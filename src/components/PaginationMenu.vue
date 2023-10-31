<template>
  <el-dropdown
    trigger="click"
    placement="bottom-start"
    @command="$emit('update-page-size', $event)"
    @visible-change="isMenuOpen = $event"
  >
    <button class="filter-dropdown el-dropdown-link">
      <span class="el-dropdown-text-link">
        {{ pageSize }}
      </span>
      <el-icon :class="[isMenuOpen ? 'iconRotate el-icon--right' : 'el-icon--right']">
        <arrow-down />
      </el-icon>
    </button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="option in pageSizeOptions"
          :key="option"
          class="icon-item"
          :command="option"
        >
          <span :class="pageSize === option || (pageSize === 100 && option === 'View All') ? 'selected' : ''">
            {{ option }}
          </span>
          <el-icon :size="15">
            <Select
              v-if="pageSize === option || (pageSize === 100 && option === 'View All')"
            />
          </el-icon>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
export default {
  name: 'PaginationMenu',

  props: {
    paginationItemLabel: {
      type: String,
      default: 'Items'
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizeOptions: {
      type: Array,
      default: [10, 20, 50, 'View All']
    },
  },

  data: function() {
    return {
      isMenuOpen: false
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/_variables.scss';

.filter-dropdown {
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  border: solid 1px $mediumGrey;
  background-color: transparent;
  font-size: 0.875rem;
  font-weight: bold;
  color:$blue;
  margin-left: 0.31rem;
}

.icon-arrow {
  color: $mediumGrey;
}

.iconRotate {
  transform: rotate(180deg);
}

.el-icon--right {
  margin-left: 8px;
}

.el-dropdown-menu__item i {
  margin-left: 8px;
} 

.el-dropdown-link {
  cursor: pointer;
  outline: none;
}

.el-dropdown-text-link {
  margin-right: -0.38rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
}

.selected {
  font-weight: 700;
  color: $app-primary-color;
}
</style>
