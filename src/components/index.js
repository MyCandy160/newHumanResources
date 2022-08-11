import ToolBar from "@/components/ToolBar";
import UploadExcel from "@/components/UploadExcel";
import ImageUpload from "./ImageUpload";
import Lang from "@/components/lang";
import TagsView from "./TagsView/index.vue";

export default {
  install(Vue) {
    Vue.component("ToolBar", ToolBar);
    Vue.component("UploadExcel", UploadExcel);
    Vue.component("ImageUpload", ImageUpload); // 注册导入上传组件
    Vue.component("Lang", Lang);
    Vue.component("TagsView", TagsView);
  },
};
