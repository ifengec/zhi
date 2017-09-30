<template>
    <div class="m4u m4u-all m4u-ly" ref="luyinModal">
        <div class="m4u-bg m4u-fade"></div>
        <div class="m4u-dialog m4u-fade">
            <div class="m4u-head clearfix">
                <div class="m4u-title">
                </div>
            </div>
            <div class="m4u-body">
                <div class="m4u-txt-box text-center">
                    <div class="ly-txt1">
                        <p>{{lyTxt1.t1}}</p>
                        <p>{{lyTxt1.t2}}</p>
                    </div>
                    <div class="timeBox"><span class="minute">0</span>:<span class="second">00</span></div>
                    <div class="ly-txt2">
                        <p>录音中...轻按下方按钮结束录音</p>
                    </div>
                    <div class="ly-txt3">
                        <p>发送前，轻按下方按钮试听录音</p>
                    </div>
                    <div class="ly-txt4">
                        <p>试听中...轻按下方按钮停止播放</p>
                    </div>
                </div>
                <div class="btn-luyin-box text-center clearfix">
                    <div class="col-33"><a class="btn-relu btn-ci-action">重录</a></div>
                    <div class="col-33"><a class="btn-luyin"><i class="icon-ly"></i></a><a class="btn-lying"><i
                            class="icon-lying"></i></a></div>
                    <div class="col-33"><a class="btn-fasong btn-ci-action">确认发送</a></div>
                </div>
            </div>
            <div class="m4u-footer">
                <div class="close-hd-box text-center">
                    <a class="m4u-close icon-shell"><i class="icon-close-x"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data(){
            return{
                lyTxt1:{
                    t1:'录音最长时间为60秒',
                    t2:'请点击下方录音键开始录音'
                }
            }
        }
    };
</script>

<style lang="scss">

</style>
