/**
 * @module socket-io
 * @description Provide io (load if it does not exist).
 */

modules.define(
    'socket-io',
    ['loader_type_js', 'socket-io__config'],
    function(provide, loader, cfg){

        /* global io */

        function doProvide(preserveGlobal){
            console.log('preserveGlobal', preserveGlobal);
            /**
             * @exports
             * @type Function
             */
            io.sails.autoConnect = false;
            provide(preserveGlobal? io : io);
        }

        if (typeof io !== 'undefined') {
            doProvide(true);
        } else {
            loader(cfg.url, doProvide);
        }
    });
