$(function () {
    $('#scenario-form').on('submit', function (event) {
        event.preventDefault();
        const scenario = $('#scenario option:selected').text();
        const priority = $('#priority option:selected').text();
        $('.match-count').text('3 个候选 · 已按场景排序');
        $('.result-heading p').text('SCENE MATCH · ' + scenario.toUpperCase());
        $('.recommendation-card').first().find('.match-summary').text('根据“' + scenario + '”与“' + priority + '”优先级，AD7606 当前匹配度最高。推荐理由已按应用约束重新排序。');
        $('.recommendation-card').each(function (index) {
            $(this).css('animation', 'selectionReveal .42s ease-out ' + (index * 80) + 'ms both');
        });
    });

    $('.details-button').on('click', function () {
        const detail = $(this).closest('.recommendation-card').find('.card-detail');
        const open = detail.toggleClass('is-open').hasClass('is-open');
        $(this).text(open ? '收起验证项' : '查看场景卖点');
    });
});
