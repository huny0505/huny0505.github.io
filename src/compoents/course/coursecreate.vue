<template>
    <div>
        <!--讲师列表-->
        <div class="teacher">
            <a>课程管理&nbsp;</a>/&nbsp;课程分类
        </div>
        <div class="teacher">
            <button type="button" class="btn btn-success btn-sm f_right">添加分类</button>
        </div>
        <div class="panel">
            <h5>创建课程
                <small>CREATE A COURSE</small>
            </h5>
            <div class="course">
                <div class="left">
                    <form class="form-horizontal">
                        <div class="form-group form-group-sm">
                            <label class="col-sm-2 control-label" for="formGroupInputSmall">课程标题</label>
                            <div class="col-sm-10">
                                <input class="form-control" type="text" id="formGroupInputSmall" placeholder="请填写课程标题">
                            </div>
                            <button type="button" class="btn btn-success btn-sm f_right addbtn">添加课程</button>
    
                        </div>
                    </form>
                </div>
                <div class="right">
                    <h5>从视频专辑导入课程</h5>
                    <p>已支持优酷、腾讯视频、网易公开课、爱奇艺教育的视频专辑导入。</p>
                </div>
            </div>
        </div>
    
    </div>
</template>
<script>
export default {}
</script>
<style scoped>
/*讲师列表*/

.teacher {
    background: #fff;
    margin: 20px;
    padding: 8px 10px;
    border-radius: 5px;
    overflow: hidden;
}

#btn {
    background: #5cb85c;
    color: #fff;
    float: right;
}


/*搜索*/

.panel {
    background: #fff;
    margin: 20px;
    border-radius: 5px;
    padding: 20px;
}

.panel>h5 {
    padding: 20px;
    border-bottom: 1px solid #eee;
}

.panel small {
    padding-left: 10px;
}

.course {
    display: flex;
}

.left {
    flex: 0.6;
    padding: 20px 20px 100px 0px;
    border-right: 1px solid #eee;
}

.right {
    flex: 0.4;
    padding: 20px;
}

.right p {
    width: 200px;
}

label {
    font-size: 16px;
    color: #666;
}

.addbtn {
    margin-right: 20px;
    margin-top: 20px;
}
</style>