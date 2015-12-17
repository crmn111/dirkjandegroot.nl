artoo.scrape('.g.g--f', {
    title: {sel: 'a.bdrn.tct'},
    img: {sel: 'img.badge-img', attr: 'src'},
    title: {sel: '.mbs.tcs.tss'},
    description: {sel: '.mbf.tss'},
    category: function($) {
        return $(this).parents('h2.h3.mbm').html().replace(/\n/g,'').match(/[^:]*/g)[0];
    },
    parts: function ($) {
        return artoo.scrape($(this).find('.bucket.bucket--flag'), {
            title: {sel: 'h4'},
            badge: {sel: 'img.badge-img', attr: 'src'},
            description: {sel: 'p.mbf.tss'}
        });
    }
}, function(data) {


});