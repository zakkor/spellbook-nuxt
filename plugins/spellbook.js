import Vue from 'vue'
import Components from '@grimoire/spellbook/src/components'

// Register components
for (const [name, component] of Object.entries(Components)) {
  Vue.component(name, component)
}
