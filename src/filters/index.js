import * as filters from './filter'
import Vue from 'vue'
Object.keys(filters).forEach(item => {
    Vue.filter(item, filters[item])
})