$(function () {
  // 대상을 변수에 저장
  const $faqQ = $('.faq-wrap > ul > li'); /* 변수를 불러와야 색이 진해진다. */
  const $faqA = $('.answer');
  const duration = 300;

  // 질문을 클릭했을 때
  $faqQ.on('click', function () {
    // 모두에 들어간 on 클래스 제거하고
    $faqQ.removeClass('on');
    // 선택한 놈만 on 클래스 부여
    $(this).addClass('on');

    // 선택된 놈의 답변을 찾아서 내리자. 동작 상황도 변수로 만들수 있다.
    const selectItem = $(this).find($faqA).stop().slideDown(duration);

    //  선택되지 않은(slide down되지 않은) 답변을 올리자
    $faqA.not(selectItem).stop().slideUp(duration);
  });
});
