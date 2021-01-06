import Vue from 'vue'
const ComponentsContext = require.context('./', true, /index.vue/)
ComponentsContext.keys().length && ComponentsContext.keys().forEach(component => {
    const ComponentConfig = ComponentsContext(component)
    const ComponentModule = ComponentConfig.default || ComponentConfig
    Vue.component(ComponentModule.name, ComponentModule)
});