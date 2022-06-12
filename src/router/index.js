/**
 * 路由配置文件
 */
import { createRouter,createWebHashHistory } from "vue-router";
import home from "../views/home.vue";
import login from "../views/login.vue";
import register from "../views/register.vue";


//二级页面 硬导入
// import movie from "../views/movie.vue";
// import hall from "../views/hall.vue";
// import plan from "../views/plan.vue";
// import my from "../views/my.vue";

//创建路由对象，并制定配置信息
const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:"/",
            redirect:{
                name:"movie"
            }
        },
        {
            path: "/home",
            component: home,
            name: "home",
            children:[
                {
                    //path: "/home/movie", 一级路径加斜线，二级路径直接写
                    path:"movie",
                    component: ()=>import("../views/movie.vue"), //动态导入
                    name: "movie",
                },
                {
                    path:"hall",
                    component: ()=>import("../views/hall.vue"),
                    name: "hall",
                },{
                    path:"plan",
                    component: ()=>import("../views/plan.vue"),
                    name: "plan",
                },
                {
                    path:"my",
                    component: ()=>import("../views/my.vue"),
                    name: "my",
                }
            ]
        },
        {
            path: "/login",
            component: login,
            name: "login"
        },
        {
            path: "/register",
            component: register,
            name: "register"
        },
        {
            path: "/movieDetail",
            component: ()=>import("../views/movieDetail.vue"),
            name: "movieDetail"
        }
    ],
});




export default router;