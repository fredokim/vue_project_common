<template>
  <div>
    <label v-if="label" :class="required ? 'required' : ' '" >{{ label }}</label>
    <vue-tags
      :active="activeTags"
      :all="allTags"
      :tagCreationEnabled="true"
      :element-count-for-start-arrow-scrolling="3"
      :tab-index="1"
      :colorsEnabled="false"
      :placeholder="placeholder"
      :tagColorDefault="'green'"
      :disabled="disabled"
      @on-tag-added="onTagAdded"
      @on-tag-created="createMethod"
      @on-tag-removed="onTagRemoved"
      @on-tag-list-closed="closeMethod"
    />
  </div>
</template>

<script>
import VueTags from "@/view/common/components/VueTags";
export default {
  components: {
    VueTags,
  },
  props: {
      label:{
          type:String,
          default:""
        },
        allTags:{
            type:Array,
            default:()=>[]
        },
        activeTags:{
            type:Array,
            default:()=>{},
        },
        placeholder:{
            type:String,
            default:"선택",
        },
        required:{
            type:[Boolean,String],
            default:"",
        },
        disabled:{
            type:[Boolean,String],
            default:false,
        }
  },
  data() {
    return {};
  },
  methods: {
      onTagAdded(value){
        this.activeTags.push(value);
      },
      onTagRemoved(value){
        var index = this.activeTags.indexOf(value)
        this.activeTags.splice(index,1);
      },
      closeMethod(){
          this.$emit('closed',this.activeTags)
      },
      createMethod(value){
          this.$emit('create',value)
      }
  },
};
</script>

<style></style>
