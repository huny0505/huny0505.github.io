<template>
    <div>
        <!--讲师列表-->
        <div class="teacher">
            <a>讲师管理&nbsp;</a>/&nbsp;讲师列表
        </div>
        <div class="teacher">
            <router-link to='/teacher/manage'>
            <button type="button" class="btn btn-success btn-sm f_right">添加讲师</button>
            </router-link>
        </div>
        <!--搜索-->
        <div class="panel">
            <div class="search">
                <input type="" class="inputs">
                <button type="button" class="btn btn-success btn-sm" id="btn_search">搜索</button>
    
            </div>
            <!--表格-->
            <table id="table" class="table table-hover table-bordered  table-striped">
                <thead id="thead">
                    <tr>
                        <th>编号</th>
                        <th>姓名</th>
                        <th>昵称</th>
                        <th>性别</th>
                        <th>手机号码</th>
                        <th>出生日期</th>
                        <th>邮箱</th>
                        <th>入职日期</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody id="tbody">
                    <tr>
                        <td>1</td>
                        <td>建华兄</td>
                        <td>洋葱</td>
                        <td>boy</td>
                        <td>12345679555</td>
                        <td>2014-01-01</td>
                        <td>1233752479@77.com </td>
                        <td>2017-08-20</td>
                        <td>
                            <button type="button" class="btn btn-info btn-xs">查看</button>
                            <button type="button" class="btn btn-info btn-xs">编辑</button>
                            <button type="button" class="btn btn-warning btn-xs">启用</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>建华兄</td>
                        <td>洋葱</td>
                        <td>boy</td>
                        <td>12345679555</td>
                        <td>2014-01-01</td>
                        <td>1233752479@77.com </td>
                        <td>2017-08-20</td>
                        <td>
                            <button type="button" class="btn btn-info btn-xs">查看</button>
                            <button type="button" class="btn btn-info btn-xs">编辑</button>
                            <button type="button" class="btn btn-warning btn-xs">启用</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
}
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



/*搜索*/

.panel {
    background: #fff;
    margin: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.search {
    padding: 20px;
    overflow: hidden;
}

.inputs {
    padding: 4px;
    float: left;
    border-right: 0;
    border-radius: 5px 0 0 5px;
}

#btn_search {
    border-radius: 0 5px 5px 0;
}



/*表格*/

#table {
    width: 100%;
    border-top: 1px solid #ccc;
}

#thead th {
    text-align: center;
    font-weight: 400;
}
</style>