<template>
  <div class="row mt-3">
    <div class="col-4">
      <div class="list-group">
        <router-link to="/newpage/a" class="list-group-item list-group-item-action">元件A</router-link>
        <router-link to="/newpage/b" class="list-group-item list-group-item-action">元件B</router-link>
      </div>
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>
