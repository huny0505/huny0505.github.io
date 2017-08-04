<template>
    <div>
        <div class="teacher">
            <p><span>讲师管理</span>&nbsp;/&nbsp;讲师列表</p>
        </div>
        <div class="panel">
            <form class="form-horizontal">
                <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">姓名</label>
                    <div class="col-sm-4">
                        <input class="form-control bg_style input-sm" id="inputEmail3" placeholder="姓名">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
                    <div class="col-sm-4">
                        <input type="password" class="form-control bg_style input-sm" id="inputPassword3" placeholder="密码">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputPassword3" class="col-sm-2 control-label">入职时间</label>
                    <div class="col-sm-4">
                        <input class="form-control input-sm" id="inputPassword3">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputPassword3" class="col-sm-2 control-label">类型</label>
                    <div class="col-sm-2">
                        <select class="form-control input-sm">
                                <option>讲师</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputPassword3" class="col-sm-2 control-label">性别</label>
                    <div class="checkbox">
                        <label>
                                <input type="radio">&nbsp;男&nbsp;&nbsp;
                                <input type="radio">&nbsp;女
                        </label>
                    </div>
                </div>
                 <div class="form-group">
                     <button type="button" class="btn btn-success btn-sm save">保存</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    .teacher {
        background: #fff;
        margin: 20px;
        padding: 8px 10px;
        border-radius: 5px;
        overflow: hidden;
    }

    .teacher p {
        margin: 0;
    }

    .teacher p span {
        color: #337ab7;
    }
    /*添加教师信息*/

    .panel {
        background: #fff;
        margin: 20px;
        border-radius: 5px;
        padding: 50px 0 0 270px;
    }

    label {
        font-weight: 400;
    }

    .bg_style {
        background-color: rgb(250, 255, 189);
        color: #000;
    }

    .radio {
        padding: 0;
    }

    .ra_la {
        margin: 0;
    }
    .save {
        margin-left: 270px;
    }
    select.input-sm {
        width: 80px;
    }
</style>