<template>
  <section class="page create-menu">
    <create-or-edit :isEdit="false"></create-or-edit>
  </section>
</template>
<script>
import CreateOrEdit from './components/CreateOrEdit.vue'
export default {
  name: 'CreateMenu',
  components: {
    CreateOrEdit
  }
}
</script>
