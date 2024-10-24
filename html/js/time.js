(function($){
    $.fn.timeline = function(){
        let selectors = {
            id: $(this),
            item:$(this).find(".item"),
            active:"active",
            img:'.img'
        };

        selectors.item.eq(0).addClass(selectors.active);
        selectors.id.css(
            "background-image",
            "url(" + selectors.item.first().find(selectors.img).attr('src')+")"
        );


        let itemlength =selectors.item.length;


        $(window).scroll(function(){
            let max,min;
            let pos =$(this).scrollTop();
            //获取当前时间轴项目的最大和最小高度
            selectors.item.each(function(i){
                min = $(this).offset().top;
                max = $(this).height() + $(this).offset().top;
                let that1 = $(this);

                
                if(i == itemlength - 2  && pos > min + $(this).height() / 2 -100){
                    selectors.item.removeClass(selectors.active);
                    selectors.id.css(
                        "background-image",
                        "url(" + selectors.item.last().find(selectors.img).attr('src')+")"
                    );
                    selectors.item.last().addClass(selectors.active);
                }
                else if(pos <= max - 140 && pos>=min - 200){
                    selectors.id.css(
                        "background-image",
                        "url(" +
                        $(that1)
                            .find(selectors.img)
                            .attr("src") +
                        ")"
                    );
                    selectors.item.removeClass(selectors.active);
                    $(this).addClass(selectors.active);
                }
            })
        })
    }
})(jQuery)
$("#time").timeline();