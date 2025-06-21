let score = 0;

const elem_score = document.getElementById('elem_score');
const container_plus = document.querySelector('div[data-operation="plus"]');
const container_minus = document.querySelector('div[data-operation="minus"]');

const btn_score_plus = container_plus.querySelector('.btn_score');
const point_plus = container_plus.querySelector('.point');

const btn_score_minus = container_minus.querySelector('.btn_score');
const point_minus = container_minus.querySelector('.point');

//animation_score_1(btn_score_plus, point_plus, elem_score, 'plus');
//animation_score_1(btn_score_minus, point_minus, elem_score, 'minus');

animation_score_2(btn_score_plus, point_plus, elem_score, 'plus');

function setCoordinates(point, elem_score){
    elem_score.innerHTML = score;
    const elem_x = elem_score.getBoundingClientRect().x;
    const point_x = point.getBoundingClientRect().x;
    const elem_y = elem_score.getBoundingClientRect().y;
    const point_y = point.getBoundingClientRect().y;

    const width = point.offsetWidth;
    const height = point.offsetHeight;

    point.style.setProperty('--score-coordinate-x', elem_x - point_x + height + 'px');
    point.style.setProperty('--score-coordinate-y', elem_y - point_y + width + 'px');
    
}

function animation_score_1(btn, point, elem_score, operation){    
    setCoordinates(point, elem_score);
    onScoreClick(btn, point, elem_score, operation);
}
function animation_score_2(btn, point, elem_score, operation){    
    setCoordinates(point, elem_score);
    onScore2Click(btn, point, elem_score, operation);
}

function onScoreClick(btn_score, point, elem_score, operation){
    btn_score.addEventListener('click', function (){
        point.classList.add('pointToScoreAnimate');
        elem_score.classList.add('scoreAnimate');        
        btn_score.setAttribute('disabled', 'disabled');
        setTimeout(() => {
            if (operation === 'plus'){
                score = score + 1;
            }else if (operation === 'minus' && score > 0){
                score = score - 1;
            }
            elem_score.innerHTML = score;
        }, 1200);
        setTimeout(() => {
            point.classList.remove('pointToScoreAnimate');
            elem_score.classList.remove('scoreAnimate');
            btn_score.removeAttribute('disabled');
        }, 1400);
    })
}


function onScore2Click(btn_score, point, elem_score, operation){
    btn_score.addEventListener('click', function (){
        //point.classList.add('pointToScoreAnimate');
        elem_score.classList.add('scoreAnimate');  
        btn_score.setAttribute('disabled', 'disabled');
        setTimeout(() => {
            if (operation === 'plus'){
                score = score + 1;
            }else if (operation === 'minus' && score > 0){
                score = score - 1;
            }
            elem_score.innerHTML = score;
        }, 1200);
        setTimeout(() => {
            //point.classList.remove('pointToScoreAnimate');
            elem_score.classList.remove('scoreAnimate');
            btn_score.removeAttribute('disabled');
        }, 1400);
    })
}