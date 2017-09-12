<template>
    <f7-page>
        <f7-navbar title="Media" back-link="Back" sliding></f7-navbar>
        <f7-block-title>超过72小时未回答，按照原路径全额退款。</f7-block-title>
        <f7-block inner>
            <p>{{media.title}}</p>
            <p>{{media.author}} <f7-link back>back</f7-link>.</p>
            <p>Mauris posuere sit amet metus id venenatis. Ut ante dolor, tempor nec commodo rutrum, varius at sem. Nullam ac nisi non neque ornare pretium. Nulla mauris mauris, consequat et elementum sit amet, egestas sed orci. In hac habitasse platea dictumst.</p>
            <p>Fusce eros lectus, accumsan eget mi vel, iaculis tincidunt felis. Nulla tincidunt pharetra sagittis. Fusce in felis eros. Nulla sit amet aliquam lorem, et gravida ipsum. Mauris consectetur nisl non sollicitudin tristique. Praesent vitae metus ac quam rhoncus mattis vel et nisi. Aenean aliquet, felis quis dignissim iaculis, lectus quam tincidunt ligula, et venenatis turpis risus sed lorem. Morbi eu metus elit. Ut vel diam dolor.</p>
        </f7-block>
    </f7-page>
</template>
<script type="text/ecmascript-6">
    const url = '/static/media.json';
    export default {
        data(){
            return{
                media:'',
            }
        },
        props: ["mediaId"],
        created(){
            let _this = this;
            _this.$http.get(url,{id:_this.mediaId}).then((resp) => {
                console.log('http get');
                _this.media = resp.body.media;
            }, ()=> {
                console.log('error');
            });
        }
    };
</script>

<style lang="scss">

</style>
