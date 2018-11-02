<template>
  <div id="app">
    <button @click="add('HelloWorld')">Add HelloWorld</button>
    <button @click="add('TextComponent')">Add TextComponent</button>
    <button @click="add('NewComponent')">Add NewComponent</button>
    <draggable
      v-model="items"
      @change="itemsChange">
      <transition-group ref="transition">
          <li
            @click.native="itemsClick(index)"
            :is="item.component"
            v-for="(item, index) in items"
            :key="index"></li>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TextComponent from './components/TextComponent.vue'
import NewComponent from './components/NewComponent.vue'
import draggable from 'vuedraggable'

export default {
  name: 'app',
  components: {
    HelloWorld,
    TextComponent,
    draggable,
    NewComponent
  },
  data() {
    return  {
      items: []
    }
  },
  methods: {
    add(component) {
      this.items.push({
        'component': component
      })
    },

    itemsChange() {
      console.log(this.items);
    },

    itemsClick(index) {
      console.log(this.$refs.transition.children[index]);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
