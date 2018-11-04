$(function(){
    function getAllHero() {
        $.ajax({
            url:'http://127.0.0.1:5000/getAllHero',
            type:'get',
            success:function(res){
                let html = template('heroList',res)
                $('.tbody').html(html)
            }
       })
    }
    // 页面加载渲染英雄列表
    getAllHero()
    var id =null;
    // 删除英雄
    $('.tbody').on('click','.del',function(){
        id = $(this).data('id')
        deleteHero(id)
    })
    function deleteHero(id){
        $.ajax({
            url:'http://127.0.0.1:5000/deletehero/' + id,
            type:'get',
            success:function(){
                getAllHero()
            }
        })
            
    }
    // 编辑英雄弹出层
    $('.tbody').on('click','.edit',function(){
        $('.ui.modal').modal('show')
        id = $(this).data('id')
        getHero()
    })
    function getHero(){
        $.ajax({
            url:'http://127.0.0.1:5000/getHero/' + id,
            type:'get',
            success:function(res){
                var html = template('getHero',res) 
                $('.ui.modal').html(html)
            }
        })
    }
    // 修改提交
    $('.ui.modal').on('click','.button',function(){
         var id = $(this).data('id')
         var isdel = $('#numbers').val()
         var name = $('[name=name]').val()
         var gender = $('[name=gender]').val()
         var say = $('[name=say]').val()   
        if(isdel == '2'){
            alert('请选择英雄状态')
            return
        }
        $('.ui.modal').modal('hide') 
        function updateHero(){
            $.ajax({
                url:'http://127.0.0.1:5000/updateHero/' + id,
                type:'post',
                data:{
                    name:name,
                    gender:gender,
                    say:say,
                    isdel:isdel
                },
                success:function(){
                    getAllHero()
                }
            })
        }
        updateHero()
    })   
})
