/**
 * @fileOverview separator def
 * @author yiminghe@gmail.com
 */
KISSY.add("separator", function (S, Component, SeparatorRender) {

    /**
     * @extends Component.Controller
     * @class
     * separator.
     * xclass: 'separator'.
     * @name Separator
     */
    var Separator = Component.Controller.extend({
    }, {
        ATTRS:/**
         * @lends Separator#
         */
        {

            /**
             * Un-focusable.
             * readonly.
             * @default false.
             */
            focusable:{
                value:false
            },

            disabled:{
                value:true
            },

            handleMouseEvents:{
                value:false
            },

            xrender:{
                value:SeparatorRender
            }
        }
    }, {
        xclass:'separator'
    });

    return Separator;

}, {
    requires:['component', 'separator/separatorRender']
});