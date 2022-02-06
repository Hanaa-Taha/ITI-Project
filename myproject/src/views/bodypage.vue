<template>
  <div>
    <div class="row cl-12">
      
      <linkscom/>
    </div>
    <hr>
    <div class="row cl-12">
      
      <bodycom/>
    </div>

  </div>
</template>

<script>
import linkscom from './linkscom.vue'
import Bodycom from './bodycom.vue'
export default {
  components: {linkscom, Bodycom },

}
</script>

<style>

</style>