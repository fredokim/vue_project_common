<template>
  <div class="underline width-100p p-3">
    <v-btn class="ml-2 inline_block" icon v-if="backYn" @click="backMethod">
      <v-icon>arrow_back</v-icon>이전
    </v-btn>
    <h3 class="pl-3 mt-3 inline_block">{{ title }}</h3>
    <v-btn
      class="pull-right linle_block mx-1"
      v-if="cancelYn"
      @click="cancelMethod"
      >취소</v-btn
    >
    <v-btn
      class="pull-right linle_block mx-1"
      color="error"
      v-if="deleteYn"
      :disabled="deletedis"
      @click="deleteMethod"
      >삭제</v-btn
    >
    <v-btn
      class="pull-right linle_block mx-1"
      color="primary"
      v-if="saveYn"
      :disabled="savedis"
      @click="saveMethod"
      >저장</v-btn
    >
    <v-btn
      class="pull-right linle_block mx-1"
      color="primary"
      v-if="updateYn"
      @click="updateMethod"
      :disabled="updatedis"
      >수정</v-btn
    >
    <v-btn
      class="pull-right linle_block mx-1"
      color="primary"
      v-if="createYn"
      @click="createMethod"
      :disabled="createdis"
      >{{ createName }}등록</v-btn
    >
    <v-btn
      class="pull-right linle_block mx-1"
      :color="customColor"
      v-if="customYn"
      @click="customMethod"
      :disabled="customdis"
      >{{ customName }}</v-btn
    >
    <style-select
      class="pull-right linle_block"
      :items="viewSelect"
      v-model="viewValue"
      @changeEvent="changeMethod"
      v-if="slotYn"
      :width="`width-120`"
      :clearable="false"
    ></style-select>
  </div>
</template>

<script>
import StyleSelect from "@/view/common/components/StyleSelect";
export default {
  components: {
    StyleSelect,
  },
  props: {
    backYn: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    createName: {
      type: String,
      default: "",
    },
    createYn: {
      type: Boolean,
      default: false,
    },
    deleteYn: {
      type: Boolean,
      default: false,
    },
    updateYn: {
      type: Boolean,
      default: false,
    },
    saveYn: {
      type: Boolean,
      default: false,
    },
    cancelYn: {
      type: Boolean,
      default: false,
    },
    customYn: {
      type: Boolean,
      default: false,
    },
    createdis: {
      type: Boolean,
      default: false,
    },
    updatedis: {
      type: Boolean,
      default: false,
    },
    deletedis: {
      type: Boolean,
      default: false,
    },
    savedis: {
      type: Boolean,
      default: false,
    },
    customdis: {
      type: Boolean,
      default: false,
    },
    customName: {
      type: String,
    },
    customColor: {
      type: [String],
      default: "waring",
    },
    slotYn: {
      type: Boolean,
      default: false,
    },
    param: {},
  },
  data() {
    return {
      viewSelect: [
        { text: "리스트보기", value: "list" },
        { text: "카드보기", value: "card" },
      ],
      viewValue:{text:'리스트보기',value:'list'},
    };
  },
  methods: {
    createMethod() {
      this.$emit("create");
    },
    deleteMethod() {
      this.$emit("delete");
    },
    updateMethod() {
      this.$emit("update");
    },
    saveMethod() {
      this.$emit("save");
    },
    backMethod() {
      this.$emit("back");
    },
    cancelMethod() {
      this.$emit("cancel");
    },
    customMethod() {
      this.$emit("custom");
    },
    changeMethod(value) {
      this.viewValue = value;
      this.$emit("change", this.viewValue);
    },
  },
};
</script>

<style scoped>
.underline {
  border-bottom: 1px solid #cccccc;
}
</style>
