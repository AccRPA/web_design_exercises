let score = 0;

const elem_score_container = document.getElementsByClassName('elem_score_container')[0];
const container_plus = document.querySelector('div[data-operation="plus"]');
const container_minus = document.querySelector('div[data-operation="minus"]');

const btn_score_plus = container_plus.querySelector('.btn_score');
const point_plus = container_plus.querySelector('.point');

const btn_score_minus = container_minus.querySelector('.btn_score');
const point_minus = container_minus.querySelector('.point');

document.getElementsByClassName('elem_score')[0].innerHTML = score;
animation_score_1(btn_score_plus, point_plus, 'plus');
animation_score_1(btn_score_minus, point_minus, 'minus');

function animation_score_1(btn, point, operation){
    onScoreClick(btn, point, operation);
}

function onScoreClick(btn_score, point, operation){
    btn_score.addEventListener('click', function (){
        const score_new = document.createElement('div');
        point.classList.add('pointToScoreAnimate');
        btn_score.setAttribute('disabled', 'disabled');
        setTimeout(() => {
            if (operation === 'plus'){
                score = score + 1;
                score_new.className = "elem_score";
                score_new.innerHTML = score;
                elem_score_container.appendChild(score_new);
                elem_score_container.classList.add('score_animation_up');   
            }else if (operation === 'minus' && score > 0){
                score = score - 1;
                score_new.className = "elem_score";
                score_new.innerHTML = score;
                elem_score_container.prepend(score_new);
                elem_score_container.classList.add('score_animation_down');  
            }
        }, 500);
        setTimeout(() => {
            point.classList.remove('pointToScoreAnimate');
            const firstChild = elem_score_container.children[0];
            const lastChild = elem_score_container.children[elem_score_container.children.length - 1];
            if (elem_score_container.children.length > 1){
                if (operation === 'plus'){
                    elem_score_container.removeChild(firstChild);  
                }else{
                    elem_score_container.removeChild(lastChild);  
                }           
            }
            elem_score_container.classList.remove('score_animation_up');
            elem_score_container.classList.remove('score_animation_down');
            btn_score.removeAttribute('disabled');
        }, 500 + 500);
    })
}