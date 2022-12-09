<script setup>
import { ref, computed } from "vue";
import { RouterView, useRoute } from "vue-router";

const route = useRoute();
const drawer = ref(false);
const menuItems = [
  {
    title: "مدیریت بارها",
    value: "loads",
    icon: "mdi-view-dashboard",
    path: "/loads",
  },
  {
    title: "مدیریت کاربران",
    value: "users",
    icon: "mdi-account-multiple",
    path: "/users",
  },
  {
    title: "مدیریت کامنت‌ها",
    value: "comments",
    icon: "mdi-comment-text-multiple",
    path: "/comments",
  },
  {
    title: "مدیریت پرداخت‌ها",
    value: "payments",
    icon: "mdi-credit-card",
    path: "/payments",
  },
];

const appBarTitle = computed(() => {
  const currPath = route.path.toLowerCase();
  const found = menuItems.find((item) => item.path === currPath);
  return found.title;
});
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list nav>
        <v-list-item
          v-for="item in menuItems"
          :key="item.value"
          :title="item.title"
          :value="item.value"
          :prepend-icon="item.icon"
          :to="item.path"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :title="appBarTitle" class="fw-bold">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main scrollable>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped>
:deep(.v-toolbar-title__placeholder) {
  font-family: iranSans !important;
  font-style: normal !important;
  font-weight: bold !important;
  letter-spacing: 0 !important;
}

:deep(.v-list-item-title) {
  font-family: iranSans !important;
  font-style: normal !important;
  font-weight: normal !important;
  letter-spacing: 0 !important;
}
</style>
