<template>
  <div class="row mt-3">
    <div class="col-4">
      <div class="list-group">
        <router-link to="/newpage/a" class="list-group-item list-group-item-action">元件A</router-link>
        <router-link to="/newpage/b" class="list-group-item list-group-item-action">元件B</router-link>
        <router-link to="/newpage/namedview/c2a" class="list-group-item list-group-item-action">C to A</router-link>
        <router-link to="/newpage/namedview/a2b" class="list-group-item list-group-item-action">A to B</router-link>
        <router-link to="/newpage/dynamicRouter/be2adc7a83c467d7" class="list-group-item list-group-item-action">動態路由 $route</router-link>
        <router-link to="/newpage/dynamicRouterByProps/be2adc7a83c467d7" class="list-group-item list-group-item-action">動態路由 props</router-link>
        <router-link to="/newpage/routerNavigation" class="list-group-item list-group-item-action">路由導覽</router-link>
      </div>
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>
