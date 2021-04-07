<template>
  <div>
    <el-dialog v-bind="$attrs" v-on="$listeners" @open="onOpen" @close="onClose" title="Dialog Titile">
      <el-row :gutter="20">
        <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="96px">
          <el-col :span="9">
            <el-form-item label="单行文本" prop="mobile">
              <el-input v-model="formData.mobile" placeholder="请输入手机号" :maxlength="11" show-word-limit
                clearable prefix-icon='el-icon-mobile' suffix-icon='el-icon-phone-outline'
                :style="{width: '100%'}"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="单行文本" prop="field101">
              <el-date-picker type="datetimerange" v-model="formData.field101" format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss" :style="{width: '100%'}" start-placeholder="开始日期"
                end-placeholder="结束日期" range-separator="至" clearable></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="计数器" prop="field108">
              <el-input-number v-model="formData.field108" placeholder="计数器" :step='1'></el-input-number>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>
      <div slot="footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="handelConfirm">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  components: {},
  props: [],
  data() {
    return {
      formData: {
        mobile: undefined,
        field101: null,
        field108: 3,
      },
      rules: {
        mobile: [{
          required: true,
          message: '请输入手机号',
          trigger: 'blur'
        }],
        field101: [{
          required: true,
          message: '单行文本不能为空',
          trigger: 'change'
        }, {
          pattern: /^1(3|4|5|7|8|9)\d{9}$/,
          message: '手机号格式错误',
          trigger: 'change'
        }],
        field108: [{
          required: true,
          message: '计数器',
          trigger: 'blur'
        }],
      },
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    onOpen() {},
    onClose() {
      this.$refs['elForm'].resetFields()
    },
    close() {
      this.$emit('update:visible', false)
    },
    handelConfirm() {
      this.$refs['elForm'].validate(valid => {
        if (!valid) return
        this.close()
      })
    },
  }
}

</script>
<style>
</style>
