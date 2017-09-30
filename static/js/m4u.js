/**
 * Created by jsbfec on 16/9/28.
 * modal
 */

var M4u = function (ele, opt) {
    this.$ele = $(ele);
    this.defaults = {};
    this.options = $.extend({}, this.defaults, opt);
};
M4u.prototype.show = function () {
    var $this = this.$ele;
    $this.show();
    $('.m4u-bg').show();
    $('.m4u-dialog').show();
    setTimeout(function () {
        //$this.addClass('in');
        $('.m4u-bg').addClass('in');
        $('.m4u-dialog').addClass('in');
    }, 50);
};
M4u.prototype.hide = function () {
    var $this = this.$ele;
    $('.m4u-bg').removeClass('in');
    $('.m4u-dialog').addClass('out').removeClass('in');
    setTimeout(function () {
        $this.hide();
        $('.m4u-bg').hide();
        $('.m4u-dialog').hide().removeClass('out');
    }, 350);
};
//兼容模块,似乎此例中commonJs和amd/cmd都可以
//commonJs规范
if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = M4u;

} else if (typeof define === 'function' && (define.amd || define.cmd)) {
    //amd cmd 规范
    define(function () {
        return M4u;
    });
} else {
    window.M4u = M4u;
}
