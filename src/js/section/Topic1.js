/**
 * ------------------------------------------------------------------------
 * Topic1
 * ------------------------------------------------------------------------
 */
class Topic1 {

  constructor() {
    // console.log('Topic1')
    $('.topic1 .topic-radio label').click(() => {
      goto('Topic2')
    })
  }

  show() {
    // console.log('Rule show')
    
    const tl = new TimelineMax({
      onComplete: () => {
        $('.topic1').addClass('active')
        // console.log('Rule show Complete')
      }
    })
    let dealy = 0
    TweenMax.to('.topic1', 0.5, {autoAlpha: 1, delay: dealy})
  }

  hide() {
    // console.log('Rule hide')
    $('.topic1').removeClass('active')
    let delay = 0
    TweenMax.to('.topic1', 0.5, {
      autoAlpha: 0, delay: delay, onComplete: () => {
        // TweenMax.set('#section-rule .title-dec', { alpha: 0, y: 30 })
        // TweenMax.set('#section-rule .content-box', { alpha: 0, y: 30 })
        // TweenMax.set('#section-rule .rule-btn', { alpha: 0, y: 30 })
      }
    })
  }
}