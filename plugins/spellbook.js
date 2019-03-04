import Vue from 'vue'
import Components from '@grimoire/spellbook/src/components'

// import '@grimoire/spellbook/src/styles/spellbook.styl'

// Register components
for (const [name, component] of Object.entries(Components)) {
  Vue.component(name, component)
}
