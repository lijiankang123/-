import Vue from "vue"
import format from "date-fns/format"
// 添加自定义过滤器
Vue.filter("currency-format",function(val){
  return val.toFixed(2);
})

// 添加日期过滤器
Vue.filter("date-format",function(value,formatStr="YYYY-MM-DD HH:mm:ss"){
  return format(value,formatStr);
})
