const config = {
  // 获取get结果
  apiGetResult: {
    methods: 'get',
    url: 'getheros',
    showLoading: true,
    showAlert: false,
    type: 'formData',
    isQs: false
  },
   // 获取post结果
   apiPostResult: {
    methods: 'post',
    url: 'post',
    showLoading: true,
    showAlert: false,
    type: 'formData',
    isQs: true
  }
}

export default config