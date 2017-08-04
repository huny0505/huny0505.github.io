<template>
    <div>
        <div class="login">
            <div class="login_wrap">
                <div class="avatar">
                    <img src="../../statics/imgs/default.png">
                </div>
                <form class="form-inline" id="forms">
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-addon"><span class=" glyphicon glyphicon-user"></span></div>
                            <input type="text" class="form-control input-lg inputs" id="exampleInputAmount" placeholder="前端学院">
                        </div>
                    </div><br>
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-addon"><span class=" glyphicon glyphicon-eye-close"></span></div>
                            <input type="text" class="form-control input-lg" id="exampleInputAmount" placeholder="密码">
                        </div>
                    </div><br>
                    <button type="submit" class="btn btn-primary btn-lg">登录</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped lang="less">
    .login {
        position: fixed;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #2f4050;
    }

    .login_wrap {
        width: 500px;
        height: 340px;
        padding-top: 85px;
        margin: 180px auto;
        background-color: #FFF;
        position: relative;
    }

    .avatar {
        position: absolute;
        left: 50%;
        top: -60px;
        width: 140px;
        height: 140px;
        border: 10px solid #FFF;
        margin-left: -70px;
        border-radius: 50%;
        box-shadow: 0 1px 5px #CCC;
        background-color: pink;
        overflow: hidden;
    }

    .avatar img {
        width: 100%;
    }
    #forms {
        text-align: center;
    }
    #forms .form-group {
        margin: 10px;
    }
    #forms input {
        color: #666;
        background: rgb(250, 255, 189);
    }
    .btn-lg {
        margin-top: 10px;
        padding: 10px 125px;
    }
</style>