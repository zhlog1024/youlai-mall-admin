<template>
  <div>
    <el-upload
      :headers="headers"
      :action="uploadAction"
      list-type="picture-card"
      :file-list="fileList"
      :before-upload="beforeUpload"
      :on-remove="handleRemove"
      :on-success="handleUploadSuccess"
      :on-preview="handlePreview"
      :limit="maxCount"
      :on-exceed="handleExceed"
      :auto-upload="true"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>
<script>
  import {getToken} from '@/utils/auth'
  import {del} from '@/api/admin/file'

  export default {
    name: 'MultiUpload',
    props: {
      //图片属性数组
      value: Array,
      //最大上传图片数量
      maxCount: {
        type: Number,
        default: 5
      }
    },
    data() {
      return {
        headers: {authorization:  getToken()},
        uploadAction: process.env.VUE_APP_BASE_API + '/hft-admin-server/api/v1/files',
        dialogVisible: false,
        dialogImageUrl: null,
      };
    },
    computed: {
      fileList() {
        let fileList = [];
        if (this.value) {
          for (let i = 0; i < this.value.length; i++) {
            fileList.push({url: this.value[i]});
          }
        }
        return fileList;
      }
    },
    methods: {
      emitInput(fileList) {
        let value = [];
        for (let i = 0; i < fileList.length; i++) {
          value.push(fileList[i].url);
        }
        this.$emit('input', value)
      },
      handleRemove(file, fileList) {
        del(file.url)
        this.emitInput(fileList);
      },
      handlePreview(file) {
        this.dialogVisible = true;
        this.dialogImageUrl = file.url;
      },
      beforeUpload(file) {

      },
      handleUploadSuccess(response, file) {
        let url = response.data
        this.fileList.push({url: url})
        this.emitInput(this.fileList)
      },
      handleExceed(files, fileList) {
        this.$message({
          message: '最多只能上传' + this.maxCount + '张图片',
          type: 'warning',
          duration: 1000
        });
      },
    }
  }
</script>
<style>

</style>


