<template>
  <v-card :title="this.title" :class="width + ' ' + height" class="pr-3 pl-3 boderless">
    <div v-if="this.selected.length > 0 && (deleteYn || updateYn)" class="mb-3">
      <v-btn class="mr-1" color="error" v-if="deleteYn" @click="deleteMethod"
        >삭제</v-btn
      >
      <v-btn
        class="mr-1"
        color="primary"
        v-if="this.selected.length == 1 && updateYn"
        @click="updateMethod"
        >수정</v-btn
      >
    </div>
    <v-data-table
       class="elevation-1 row-pointer"
       v-model="selected"
       loading-text="Loading... Please wait"
       item-key="id"
       hide-default-footer
      :item-class="myClass"
      :headers="headers"
      :items="items"
      :show-select="selectYn"
      :single-select="singleSelect"
      :loading="loading"
      :sort-by="null"
      no-data-text="값이 없습니다."
      @click:row="handleClick"
      @page-count="pageCount = $event"
      @input="itemSelected($event)"
      @toggle-select-all="selectAll"
      :items-per-page="pages.size"
      :page.sync="pages.number"
    >
      <template
        v-for="info in customSlotInfo"
        v-slot:[info.slotName]="{ item }"
      >
        <slot :name="`${info.name}`" v-bind:item="item"></slot>
      </template>
      <template v-slot:[`item.createdAt`]="{ item }">
        {{ formatDate(item.createdAt) }}
      </template>
      <template v-slot:[`item.updatedAt`]="{ item }">
        {{ formatDate(item.updatedAt) }}
      </template>
    </v-data-table>
    <v-row class="mt-10">
      <v-col md="8">
        <v-pagination
          class="pull-left"
          v-model="pages.number"
          :length="pages.totalPages"
          :total-visible="totalVisible"
          @input="handlePageChange"
          next-icon="mdi-menu-right"
          prev-icon="mdi-menu-left"
        ></v-pagination>
      </v-col>
      <v-col md="4">
        <p class="mt-2 pull-right">총{{ pages.totalElements }}개의 결과</p>
        <v-select
          class="mr-2 pull-right width-50"
          v-model="pages.size"
          :items="pageSizes"
          item-value="value"
          item-text="text"
          @change="handlePageSizeChange"
          dense
        ></v-select>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import moment from "moment";
export default {
  props: {
    width: {
      type: String,
      default: "",
    },
    height: {
      type: String,
      default: "",
    },
    selectYn: {
      type: [Boolean, String],
      default: false,
    },
    updateYn: {
      type: [Boolean, String],
      default: true,
    },
    deleteYn: {
      type: [Boolean, String],
      default: true,
    },
    headers: {
      type: Array,
      default: () => [],
    },
    customSlotInfo: {
      type: Array,
    },
    items: {
      type: [Array, Object],
      default: () => [],
    },
    pages: {
      type: [Array, Object],
      default: () => [],
    },
    singleSelect: {
      type: [Boolean, String],
      default: false,
    },
    selection: {
      type: Array,
      default: () => [],
    },
    dateYn: {
      type: [Boolean, String],
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    loading: {
      type: [Boolean, String],
      default: true,
    },
  },
  data() {
    return {
      selected: [],
      totalVisible: 10,
      pageCount: 0,
      pageSize: 1,
      pageSizes: [
        { text: "1", value: 1 },
        { text: "2", value: 2 },
        { text: "10", value: 10 },
        { text: "20", value: 20 },
      ],
      selectedRow: [],
    };
  },
  methods: {
    handleClick(value, row) {
      this.highgtClickedRow(value, row.index);
      this.$emit("rowClick", value, row.index);
    },

    highgtClickedRow: function(value, index) {
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].clickYn = false;

        if (index == i) {
          this.items[i].clickYn = true;
        }
      }
      let tr = event.target.parentNode;
      const trp = tr.parentNode;
      for (let i = 0; i < this.items.length; i++) {
        trp.childNodes[i].classList.remove("click_active");
        trp.childNodes[i].classList.remove("v-data-table__selected");
        if (i == index) {
          trp.childNodes[i].classList.remove("non_active");
          trp.childNodes[i].classList.add("click_active");
        }
      }
    },

    handlePageChange(value) {
      this.page = value;
      this.$emit("paging", { size: this.pages.size, page: value - 1 });
    },

    handlePageSizeChange(size) {
      this.pages.size = size;
      this.$emit("paging", { size: this.pages.size, page: 0 });
    },

    formatDate(value) {
      return moment(value).format("YYYY/MM/DD");
    },

    myClass: function(item) {
      return item.clickYn == true ? "click_active" : "non_active";
    },

    itemSelected(event) {
      this.$emit("rowSelect",event);
    },

    selectAll(event) {
      this.$emit("rowSelect");
    },

    updateMethod() {
      this.$emit("updateMethod", this.selected);
    },

    deleteMethod() {
      this.$emit("deleteMethod", this.selected);
    },
  },

  created() {
    for (var i = 0; i < this.items.length; i++) {
      if (!this.items[i].clickYn) {
        this.items[i].clickYn = false;
      }
    }

    if (this.dateYn) {
      this.headers.push({ text: "생성일", value: "createdAt" });
      this.headers.push({ text: "생성자", value: "createUserId" });
      this.headers.push({ text: "수정일자", value: "updatedAt" });
      this.headers.push({ text: "수정인", value: "updateUserId" });
    }
  },
  mounted() {
    return {
      selected: [],
    };
  },
  watch:{
    items:function(newVal,oldVal){
      this.selected = [];
    }
  }
};
</script>

<style scoped>
.v-pagination__item--active {
  color: blue !important;
}
.boderless {
  border: none !important;
}

</style>
