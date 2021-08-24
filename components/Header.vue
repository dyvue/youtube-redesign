<template>
    <div class="p-6">
      <div class="flex justify-between items-center">
        <div class="flex jusitfy-between items-center gap-6">
          <nuxt-link :to="{'name': 'index'}">
            <icon-menu/>
          </nuxt-link>
          <nuxt-link :to="{'name': 'index'}">
            <youtube/>
          </nuxt-link>
          <div>
            <form>
              <input type="text" class="py-2 px-4 w-96 rounded-full">
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Youtube from '@/components/brands/Youtube.vue'
import IconMenu from '@/components/icons/Menu.vue'
export default {
  components: { Youtube, IconMenu },
}
</script>

<style>

</style>