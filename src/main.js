//导入vue核心包
import Vue from 'vue';

//根组件和其他组件
import App from './App.vue';
import home from './compoents/Home.vue';
import categorylist from './compoents/category/categorylist.vue';
import teacherlist from './compoents/teacher/teacherlist.vue'
import coursecreate from './compoents/course/coursecreate.vue';
import courselist from './compoents/course/courselist.vue';
import manage from './compoents/teacher/manage.vue';
import login from './compoents/login.vue';
import addcategory from './compoents/category/addcategory.vue';
//路由
import router from 'vue-router';
Vue.use(router);

//将vue-resource在vue中绑定，自动在vue对象实例上注入一个$http对象就可以使用ajax方法了
import vueResource from 'vue-resource';
Vue.use(vueResource);

//导入jquery
import $ from 'jquery';


//导入初始化的css
import '../statics/css/base.css';


//导入mint-ui 和  css
import mintui from 'mint-ui';
import 'mint-ui/lib/style.min.css';
Vue.use(mintui);

//导入bootstrap css
import '../statics/bootstrap/dist/css/bootstrap.min.css';

//导入全局的rem适配
import '../statics/js/rem.js';



//全局的css
import '../statics/css/site.css';

//实例化路由对象
var routers = new router({
    routes: [
        // {
        //     path: '/',
        //     redirect: '/home'
        // },
        {
            path: '/home',
            component: home
        },
        {
            path: '/teacher/teacherlist',
            component: teacherlist
        },
        {
            path: '/category/categorylist',
            component: categorylist
        },
        {
            path: '/course/coursecreate',
            component: coursecreate
        },
        {
            path: '/course/courselist',
            component: courselist
        },
        {
            path: '/teacher/manage',
            component: manage
        },
        {
            path:'/category/addcategory',
            component:addcategory
        }
    ]
})


//实例化vue对象
new Vue({
    el: '#app',
    router: routers,
    // render: c => c(login)
    render:c=>c(App),
})