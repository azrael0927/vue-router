<template>
  <button type="button" @click="getRoute">getRoute</button>
  <button type="button" @click="push">Push</button>
  <button type="button" @click="replace">Replace</button>
  <button type="button" @click="go">Go</button>
  <hr>
  <button type="button" @click="addRoute">新增路由</button>
</template>

<script>
export default {
  methods: {
    getRoute () {
      // 路由屬性
      console.log(this.$route)
      // 路由方法
      console.log(this.$router)
    },
    push () { // 有歷史紀錄
      // this.$router.push('/newpage/dynamicRouter/be2adc7a83c467d7')
      this.$router.push({
        name: 'About'
      })
    },
    replace () { // 沒有歷史紀錄
      this.$router.replace({
        name: 'About'
      })
    },
    go () { // 使用數值 負數上一頁 正數下一頁
      this.$router.go(-1)
    },
    addRoute () {
      this.$router.addRoute({
        path: '/newabout',
        name: 'newAbout',
        component: () => import('./About.vue')
      })
    }
  }
}
</script>
