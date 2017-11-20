<template>
    <div id="user">
        <f7-page>
            <f7-navbar title="User" back-link="Back" sliding></f7-navbar>
            <f7-block-title>超过72小时未回答，按照原路径全额退款。</f7-block-title>
            <f7-block inner v-if="user">
                <p>{{user.name}}</p>
                <p>{{user.description}}</p>
                <p>Mauris posuere sit amet metus id venenatis. Ut ante dolor, tempor nec commodo rutrum, varius
                    at sem. Nullam ac nisi non neque ornare pretium. Nulla mauris mauris, consequat et elementum
                    sit amet, egestas sed orci. In hac habitasse platea dictumst.</p>
                <p>Fusce eros lectus, accumsan eget mi vel, iaculis tincidunt felis. Nulla tincidunt pharetra
                    sagittis. Fusce in felis eros. Nulla sit amet aliquam lorem, et gravida ipsum. Mauris
                    consectetur nisl non sollicitudin tristique. Praesent vitae metus ac quam rhoncus mattis vel
                    et nisi. Aenean aliquet, felis quis dignissim iaculis, lectus quam tincidunt ligula, et
                    venenatis turpis risus sed lorem. Morbi eu metus elit. Ut vel diam dolor.</p>
            </f7-block>
        </f7-page>
    </div>
</template>
<script type="text/ecmascript-6">
    const url = '/static/user.json';
    export default {
        data(){
            return {
                user: '',
            }
        },
        props: ["userId"],
        created(){
            let _this = this;
            _this.$http.get(url, {id: _this.userId}).then((resp) => {
                console.log('http get');
                console.log(resp);
                _this.user = resp.body.user;
            }, ()=> {
                console.log('error');
            });
        }
    };
</script>

<style lang="scss">

</style>
