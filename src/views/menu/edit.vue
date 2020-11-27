<template>
  <section class="page edit-menu">
    <create-or-edit :isEdit="true"></create-or-edit>
  </section>
</template>
<script>
import CreateOrEdit from './components/CreateOrEdit.vue'
export default {
  name: 'EditMenu',
  components: {
    CreateOrEdit
  }
}
</script>
