window.addEventListener('DOMContentLoaded', init)

function init() {

  function Aside(asideId, parentId) {

    this._event = () => {
      window.addEventListener('scroll', () => {
        // если положение верха родительского блока выше верхнего края экрана
        if(parentId.getBoundingClientRect().top <= 0) {
          asideId.style.transform = `translateY(${-parentId.getBoundingClientRect().top}px)`;
        }
        // если положение верха родительского блока ниже верхнего края экрана
        else if(parentId.getBoundingClientRect().top > 0) {
          asideId.style.transform = `translateY(0)`;
        }
        // если перемещающийся блок достиг низа родителя
        if(parentId.getBoundingClientRect().bottom <= asideId.getBoundingClientRect().bottom) {
          asideId.style.transform = `translateY(${parentId.getBoundingClientRect().height - asideId.getBoundingClientRect().height}px)`;
        }
      })
    }

    this._init = () => {
      this._event()
    }

    this._init()
  }

  const asideId = document.querySelector('#aside'); // ID перемещающегося блока
  const maincontentId = document.querySelector('#maincontent'); // ID родителя перемещающегося блока

  const aside = new Aside(asideId, maincontentId); // первый параметр - ID перемещающегося блока, второй параметр - ID родителя перемещающегося блока

}
