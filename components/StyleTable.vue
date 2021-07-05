<template>
	<b-card :title="this.title" :class="width +' '+ height" class="ml-4">
		<div v-if="this.selected.length >0 && (deleteYn || updateYn) " class="mb-3">
			<v-btn class="mr-1" color="error" v-if="deleteYn" @click="deleteMethod">삭제</v-btn>
			<v-btn
				class="mr-1"
				color="primary"
				v-if="this.selected.length == 1 && updateYn"
				@click="updateMethod"
			>수정</v-btn>
		</div>
		<v-data-table
			class="elevation-1 row-pointer"
			:headers="headers"
			:items="items"
			item-key="id"
			v-model="selected"
			:show-select="selectYn"
			:single-select="singleSelect"
			:loading="loading"
			loading-text="Loading... Please wait"
			:sort-by="null"
			hide-default-footer
			@click:row="handleClick"
			@page-count="pageCount = $event"
			@item-selected="itemSelected"
			:items-per-page="pages.size"
			:page.sync="pages.number"
			:item-class="myClass"
		>
			<template v-for="info in customSlotInfo" v-slot:[info.slotName]="{ item }">
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
				<p class="mt-2 pull-right">총{{pages.totalElements}}개의 결과</p>
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
	</b-card>
</template>

<script>
import moment from 'moment'
import ButtonGroup from '../../pages/vue-bootstrap/ButtonGroup.vue';
export default {
	components: { ButtonGroup },
  props: {
    width: {
      type: String,
      default: ""
    },
    height:{
      type: String,
      default: ""
    },
    selectYn: {
      type: [Boolean, String],
      default: false,
    },
    updateYn: {
      type: [Boolean, String],
      default: true,
    },
    deleteYn:{
      type: [Boolean, String],
      default: true,
    },
    headers: {
      type: Array,
        default: () => []
    },
    customSlotInfo:{
        type: Array,
    },
    items:{
     type:Array,
      default:() => [],
    },
    pages:{
     type:[Array, Object],
      default:() => [],
    },
    singleSelect: {
      type: [Boolean, String],
      default: false,
    },
    selection:{
        type: Array,
       default: () => []
    },
    dateYn: {
      type: [Boolean, String],
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    loading:{
      type:[Boolean,String],
      default:true
    },
  },
  data() {
    return {
      selected: [],
      totalVisible: 10,
      pageCount : 0,
      pageSize:1,
      pageSizes: [
        { text: "1", value: 1 },
        { text: "2", value: 2 },
        { text: "20", value: 20 },
      ],
    };
  },
  methods: {
    handleClick (value,row)  {
      this.highgtClickedRow(value, row.index);
      this.$emit("rowClick", value , row.index);
    },
  
    highgtClickedRow: function (value, index){
        for(let i=0; i< this.items.length; i++){
          this.items[i].clickYn = false;
          
          if(index == i){
            this.items[i].clickYn = true;
          }
       }
        let tr = event.target.parentNode;
        const trp = tr.parentNode;
        for(let i=0; i< this.items.length; i++ ){
            trp.childNodes[i].classList.remove('click_active');
            trp.childNodes[i].classList.remove('v-data-table__selected');
            if(i == index){
              trp.childNodes[i].classList.remove('non_active');
              trp.childNodes[i].classList.add('click_active');
            }
          }
    },
   
    handlePageChange(value) {
      this.page = value
      this.$emit('paging',{size: this.pages.size, page: value -1 });
    },

    handlePageSizeChange(size) {
      this.pages.size = size;
      this.$emit('paging',{size : this.pages.size, page: 0});
    },

    formatDate(value) {
      return moment(value).format("YYYY/MM/DD")
    },
    
    myClass :function (item) {
      return item.clickYn == true ? 'click_active' : 'non_active';
     },

    itemSelected(newValue){
      this.$emit("rowSelect", newValue);
    },

    updateMethod(){
      this.$emit('updateMethod', this.selected);
    },

    deleteMethod(){
      this.$emit('deleteMethod',this.selected)
    }
  },

  created(){
    for(var i =0 ; i< this.items.length; i++){
      if(!this.items[i].clickYn){
        this.items[i].clickYn = false;
      }
    }
  
    if(this.dateYn){
        this.headers.push({ text: "생성일", value: "createdAt" })
        this.headers.push({ text: "생성자", value: "createUserId" })
        this.headers.push({ text: "수정일자", value: "updatedAt" })
        this.headers.push({ text: "수정인", value: "updateUserId" })
    }
  },
  mounted(){
    return {
      selected: [],
    };
  },
 
};
</script>

<style scoped>
	.v-pagination__item--active {
		color: blue !important;
	}
	.card {
		border: none !important;
	}
	.card-body {
		padding: 0 !important;
	}
</style>
