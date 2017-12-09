window.addEventListener('DOMContentLoaded', init)

function init() {

  function Aside(asideId, parentId) {

    this.asideLeft = asideId.getBoundingClientRect().left;
    this.asideWidth = asideId.getBoundingClientRect().width;

    this._event = () => {
      window.addEventListener('scroll', () => {
        // если положение верха родительского блока ниже верхнего края экрана
        if(parentId.getBoundingClientRect().top > 0) {
          // asideId.style.transform = `translateY(0)`;
          asideId.style.position = 'static';
        }
        // если положение верха родительского блока выше верхнего края экрана
        else if(parentId.getBoundingClientRect().top <= 0 && -parentId.getBoundingClientRect().top <= (parentId.getBoundingClientRect().height - asideId.getBoundingClientRect().height)) {
          // asideId.style.transform = `translateY(${-parentId.getBoundingClientRect().top}px)`;
          asideId.style.position = "fixed";
          asideId.style.top = "0";
          asideId.style.left = this.asideLeft + 'px';
          asideId.style.width = this.asideWidth + 'px';
        }
        // если перемещающийся блок достиг низа родителя
        else {
          // asideId.style.transform = `translateY(${parentId.getBoundingClientRect().height - asideId.getBoundingClientRect().height}px)`;
          asideId.style.position = 'relative';
          asideId.style.top = `${parentId.getBoundingClientRect().height - asideId.getBoundingClientRect().height}px`;
          asideId.style.left = '0';
        }
      })
    }

    this._init = () => {
      this._event()
    }

    this._init()
  }

  const asideId = document.querySelector('#aside__wrap'); // ID перемещающегося блока
  const maincontentId = document.querySelector('#maincontent'); // ID родителя перемещающегося блока

  const aside = new Aside(asideId, maincontentId); // первый параметр - ID перемещающегося блока, второй параметр - ID родителя перемещающегося блока
}
