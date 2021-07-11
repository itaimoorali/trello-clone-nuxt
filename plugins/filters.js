import Vue from 'vue'
import DateFormat from 'date-fns/format'

Vue.filter('formatDate', ( value ) => {
    if (!value) return ''
    return DateFormat(new Date(value), 'EEEE, MMMM do yyyy')
})