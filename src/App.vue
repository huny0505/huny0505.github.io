<template>
    <div>
        <!--右边栏-->
        <div class="aside">
            <div class="user">
                <img src="../statics/imgs/default.png" alt="">
            </div>
            <ul class="classify">
                <li><router-link to='/home'><span class="glyphicon glyphicon-dashboard"></span>仪表盘</router-link></li>
                <li><router-link to='/teacher/teacherlist'><span class="glyphicon glyphicon-education"></span>讲师管理</router-link></li>
                <li><router-link to='/category/categorylist'><span class="glyphicon glyphicon-list-alt"></span>分类管理</router-link></li>
                <li @click='isShow'>
                    <a href="javascript:;"><span class="glyphicon glyphicon-th"></span>课程管理<i>></i></a>
                </li>
            </ul>
            <ul class="class_add classify">
                <li><router-link to='/course/coursecreate'>课程添加</router-link></li>
                <li><router-link to='/course/courselist'>课程列表 </router-link></li>
            </ul>
        </div>
        <!--导航条-->
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <a class="navbar-brand" href="#"><span class="glyphicon glyphicon-menu-hamburger green"></span></a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#"><span class="glyphicon glyphicon-user"></span>个人中心</a></li>
                        <li><a href="#"><span class="glyphicon glyphicon-log-out"></span>退出</a></li>
                        <li><a href="#"><span class="glyphicon glyphicon-tasks"></span></a></li>
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-fluid -->
        </nav>
        <!--路由占位-->
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        //渲染结束
        mounted() {
            this.addStyle()
        },
        methods: {
            addStyle() {
                console.log(2);
                $('.classify a').click(function () {
                    $('.classify a').removeClass('active')
                    $(this).addClass('active');
                })
            },
            isShow() {
                $('.class_add').slideToggle(300);
            },
        }


    }
</script>
<style scoped>
    /*侧边栏*/

    .aside {
        width: 180px;
        height: 760px;
        background: #2f4050;
        position: fixed;
        left: 0;
        top: 0;
    }

    .user {
        width: 80px;
        height: 80px;
        padding-top: 25px;
        margin: 0 auto 80px;
    }

    .user img {
        border: 3px solid rgba(255, 255, 255, 0.3);
        width: 100%;
        border-radius: 50%;
    }

    .classify {
        width: 100%;
        /*text-align: center;*/
    }

    .classify li {
        width: 100%;
        height: 35px;
        margin-bottom: 10px;
    }

    .classify li a {
        display: block;
        width: 100%;
        height: 100%;
        line-height: 35px;
        color: #a9b0c2;
    }

    .classify li a:hover {
        color: #fff;
        background: #a9b0c2;
        text-decoration: none;
    }

    .classify li .active {
        color: #fff;
        background: #a9b0c2;
        text-decoration: none;
    }

    .classify li a span {
        padding-left: 25px;
        padding-right: 10px;
    }

    .classify li a i {
        padding-left: 35px;
        font: 16px 'simsum';
    }

    .class_add li a {
        padding-left: 48px;
    }
    /*导航*/

    .green {
        padding: 5px;
        color: #fff;
        background: #5cb85c;
        border-radius: 3px;
    }

    .navbar-default .navbar-nav>li>a {
        color: #337ab7;
    }
    .navbar-default {
        background: #fff;
    }
    .navbar {
        border-radius: 0;
    }
</style>