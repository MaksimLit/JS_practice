function _createModal (options) {
    const modal = document.createElement( 'div');
    modal.classList.add('mlmodal');
    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal__overlay">
        <div class="modal__window">
            <div class="modal__header">
                <span class="modal__title">Modal title</span>
                <span class="modal__close">&times;</span>
            </div>
            <div class="modal__body">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="modal__footer">
                <button>Хорошо</button>
                <button>Отмена</button>
            </div>
        </div>
    </div>
    `)
    document.body.appendChild(modal);
    return modal;
};

$.modal = function (options) {
    const   ANIMATION_SPEED = 200;
    const $modal = _createModal(options);
    let clossing = false;

    return {
        open() {
            !clossing && $modal.classList.add('open');
        },

        close() {
            clossing = true;
            $modal.classList.remove('open'); 
            $modal.classList.add('hide');
            setTimeout (() => {
                $modal.classList.remove('hide');
                clossing = false;
            }, ANIMATION_SPEED);           
        },

        destroy() {

        }
    }
};