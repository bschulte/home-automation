<template>
  <q-page class="flex flex-center">
    <q-list bordered separator class="list">
      <q-item
        class="flex flex-center justify-between list-item"
        v-for="light in lights"
        v-bind:key="light.id"
        clickable
        @click="handleLightClick(light.id)"
      >
        {{light.name}}
        <q-icon name="fal fa-lightbulb fa-2x" :color="light.state.on ? 'yellow-6' : 'grey-6'"/>
      </q-item>
    </q-list>
  </q-page>
</template>


<script>
import { getLights, toggleLight } from '../services/lights';

export default {
  name: 'PageIndex',

  async created() {
    this.getLightsData();
  },

  methods: {
    async getLightsData() {
      const lights = await getLights();

      this.lights = lights;
    },

    async handleLightClick(lightId) {
      console.log('Toggling light:', lightId);
      await toggleLight(
        lightId,
        this.lights.find(light => light.id === lightId).state.on
      );
      await this.getLightsData();
    }
  },

  data() {
    return {
      lights: []
    };
  }
};
</script>


<style scoped lang="stylus">
@import '~quasar-variables';

.list {
  min-width: 400px;
}

.list-item {
  background-color: $grey-7;
  color: #fff;
}
</style>
