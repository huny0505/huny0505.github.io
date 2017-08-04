<template>
    <div>
        <div class="teacher">
            <a>课程管理&nbsp;</a>/&nbsp;课程分类
        </div>
        <div class="panel">
            <form class="form-horizontal">
                <div class="form-group">
                    <label for="inputPassword3" class="col-sm-2 control-label">名称</label>
                    <div class="col-sm-4">
                        <input class="form-control input-sm" id="inputPassword3" placeholder="填写分类名称">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputPassword3" class="col-sm-2 control-label">级别</label>
                    <div class="col-sm-2">
                        <select class="form-control input-sm" id="sels">
                                <option>讲师</option>
                        </select>
                    </div>
                </div>
                 <div class="form-group">
                    <label for="inputPassword3" class="col-sm-2 control-label">排序</label>
                    <div class="col-sm-2">
                        <input class="form-control input-sm" id="inputPassword3" value="10">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputPassword3" class="col-sm-2 control-label">是否显示</label>
                    <div class="checkbox">
                        <label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox">&nbsp;男&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="checkbox">&nbsp;女
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
     .panel {
        background: #fff;
        margin: 20px;
        border-radius: 5px;
        padding: 50px 0 0 270px;
    }

    label {
        font-weight: 400;
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
        width: 100px;
    }
</style>