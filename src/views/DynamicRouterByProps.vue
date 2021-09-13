<template>
  <div></div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['id'],
  created () {
    // const seed = 'be2adc7a83c467d7'
    console.log(this.id)
    const seed = this.id
    axios.get(`https://randomuser.me/api/?seed=${seed}`).then(res => {
      console.log(res)
    })
  }
}
</script>
