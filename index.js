isReset = false, firstMove = true, score = 0;

var frodoSelector = document.querySelector('.frodo');
var areaSelector = document.querySelector('.area');
var oneRingSelector = document.querySelector('.oneRing');
var mtDoomSelector = document.querySelector('.mtDoom');

class Ring {
    randomLocation() {
        var rndmRingX = Math.floor(Math.random() * (Math.floor(areaSelector.offsetWidth) - oneRingSelector.offsetWidth));
        oneRingSelector.style.left = rndmRingX + 'px';
        var rndmRingY = Math.floor(Math.random() * ((Math.floor(areaSelector.offsetHeight) - oneRingSelector.offsetHeight)));
        rndmRingY = (rndmRingY + 100) / 2;
        oneRingSelector.style.top = rndmRingY + 'px';
    }
}

class MtDoom {
    frodoLocation = [0,0]
    randomLocation() {
        var rndmMtDoom = Math.floor(Math.random() * (Math.floor(areaSelector.offsetWidth) - mtDoomSelector.offsetWidth));
        mtDoomSelector.style.left = rndmMtDoom + 'px';
    }
}

class Frodo {
    startLocation() {
        frodo.frodoLocation = [0, 0];
    }
}

class Animation {
    reset(score) {
        frodoSelector.style.left = 0 + 'px';
        frodoSelector.style.top = 0 + 'px';
        left_rb.checked = false;
        right_rb.checked = false;
        bottom_rb.checked = false;
        top_rb.checked = false;
        frodo.startLocation();
        theRing.randomLocation();
        mtDoom.randomLocation();
        isReset = true;
        firstMove = true;
        score = score;
        document.getElementById("score").textContent = score;
    }

    move() {
        function allClearInterval() {
            clearInterval(id_r);
            clearInterval(id_l);
            clearInterval(id_t);
            clearInterval(id_b);
            animation.move();
        }

        if (right_rb.checked) {
            isReset = false;
            var id_r = setInterval(frame, 20);
            function frame() {
                if (isReset) {
                    clearInterval(id_r);
                    return;
                } else {
                    if (frodo.frodoLocation[0] == (areaSelector.offsetWidth) - frodoSelector.offsetWidth) {
                        clearInterval(id_r);
                    } else {
                        if (left_rb.checked) {
                            allClearInterval();
                        } else {
                            frodo.frodoLocation[0]++;
                            frodoSelector.style.left = frodo.frodoLocation[0] + 'px';
                            if (firstMove) {
                                if (bottom_rb.checked || top_rb.checked) {
                                    allClearInterval();
                                    firstMove=false;
                                }
                            }
                            if (oneRingSelector.offsetLeft <= frodo.frodoLocation[0] && frodo.frodoLocation[0] <= oneRingSelector.offsetLeft + oneRingSelector.offsetWidth) {
                                if (oneRingSelector.offsetTop <= (frodo.frodoLocation[1] + 1) && frodo.frodoLocation[1] <= oneRingSelector.offsetTop + oneRingSelector.offsetHeight) {
                                    oneRingSelector.style.left = (frodo.frodoLocation[0] + 1) + 'px';
                                }
                            }
                            if (frodoSelector.offsetTop == (areaSelector.offsetHeight - frodoSelector.offsetHeight) && (frodoSelector.offsetLeft >= mtDoomSelector.offsetLeft && frodoSelector.offsetLeft <= mtDoomSelector.offsetLeft + mtDoomSelector.offsetWidth - frodoSelector.offsetWidth)) {
                                if (frodoSelector.offsetTop + 1 == oneRingSelector.offsetTop) {
                                    score++;
                                    document.getElementById("score").textContent = score;
                                    alert("You WON ! The eye of Sauron has been destroyed.");
                                } else {
                                    alert("You LOST ! Sauron has taken back his ring and he will rule the world.");
                                    if (score != 0) { score--; }
                                    document.getElementById("score").textContent = score;
                                }
                                animation.reset(score);
                            }
                        }
                    }
                }
            }
        }

        if (left_rb.checked) {
            isReset = false;
            var id_l = setInterval(frame, 20);
            function frame() {
                if (isReset) {
                    clearInterval(id_l);
                    return;
                } else {
                    if (frodo.frodoLocation[0] == areaSelector.offsetLeft) {
                        clearInterval(id_l);
                    } else {
                        if (right_rb.checked) {
                            allClearInterval();
                        } else {
                            frodo.frodoLocation[0]--;
                            frodoSelector.style.left = frodo.frodoLocation[0] + 'px';
                            if (firstMove) {
                                if (bottom_rb.checked || top_rb.checked) {
                                    allClearInterval();
                                    firstMove=false;
                                }
                            }
                            if (oneRingSelector.offsetLeft + oneRingSelector.offsetWidth >= frodo.frodoLocation[0] && (frodo.frodoLocation[0] + 2) >= oneRingSelector.offsetLeft) {
                                if (oneRingSelector.offsetTop <= (frodo.frodoLocation[1] + 1) && frodo.frodoLocation[1] <= oneRingSelector.offsetTop + oneRingSelector.offsetHeight) {
                                    oneRingSelector.style.left = (frodo.frodoLocation[0] - 1) + 'px';
                                }
                            }
                            if (frodoSelector.offsetTop == (areaSelector.offsetHeight - frodoSelector.offsetHeight) && (frodoSelector.offsetLeft >= mtDoomSelector.offsetLeft && frodoSelector.offsetLeft <= mtDoomSelector.offsetLeft + mtDoomSelector.offsetWidth - frodoSelector.offsetWidth)) {
                                if (frodoSelector.offsetTop + 1 == oneRingSelector.offsetTop) {
                                    score++;
                                    document.getElementById("score").textContent = score;
                                    alert("You WON ! The eye of Sauron has been destroyed.");
                                } else {
                                    alert("You LOST ! Sauron has taken back his ring and he will rule the world.");
                                    if (score != 0) { score--; }
                                    document.getElementById("score").textContent = score;
                                }
                                animation.reset(score);
                            }
                        }
                    }
                }
            }
        }

        if (bottom_rb.checked) {
            isReset = false;
            var id_b = setInterval(frame, 20);
            function frame() {
                if (isReset) {
                    clearInterval(id_b);
                    return;
                } else {
                    if (frodo.frodoLocation[1] == (areaSelector.offsetHeight - frodoSelector.offsetHeight)) {
                        clearInterval(id_b);
                    } else {
                        if (top_rb.checked) {
                            allClearInterval();
                        } else {
                            frodo.frodoLocation[1]++;
                            frodoSelector.style.top = frodo.frodoLocation[1] + "px";
                            if (firstMove) {
                                if (right_rb.checked || left_rb.checked) {
                                    allClearInterval();
                                    firstMove=false;
                                }
                            }
                            if (oneRingSelector.offsetLeft <= (frodo.frodoLocation[0] + 1) && (frodo.frodoLocation[0] + 1) <= oneRingSelector.offsetLeft + oneRingSelector.offsetWidth) {
                                if (oneRingSelector.offsetTop <= frodo.frodoLocation[1] && frodo.frodoLocation[1] <= oneRingSelector.offsetTop + oneRingSelector.offsetHeight) {
                                    oneRingSelector.style.top = (frodo.frodoLocation[1] + 1) + 'px';
                                }
                            }
                            if (frodoSelector.offsetTop == (areaSelector.offsetHeight - frodoSelector.offsetHeight) && (frodoSelector.offsetLeft >= mtDoomSelector.offsetLeft && frodoSelector.offsetLeft <= mtDoomSelector.offsetLeft + mtDoomSelector.offsetWidth - frodoSelector.offsetWidth)) {
                                if (frodoSelector.offsetTop + 1 == oneRingSelector.offsetTop) {
                                    score++;
                                    document.getElementById("score").textContent = score;
                                    alert("You WON ! The eye of Sauron has been destroyed.");
                                } else {
                                    alert("You LOST ! Sauron has taken back his ring and he will rule the world.");
                                    if (score != 0) { score--; }
                                    document.getElementById("score").textContent = score;
                                }
                                animation.reset(score);
                            }
                        }
                    }
                }
            }
        }
        
        if (top_rb.checked) {
            isReset = false;
            var id_t = setInterval(frame, 20);
            function frame() {
                if (isReset) {
                    clearInterval(id_t);
                    return;
                } else {
                    if (frodo.frodoLocation[1] == areaSelector.offsetTop) {
                        clearInterval(id_t);
                    } else {
                        if (bottom_rb.checked) {
                            allClearInterval();
                        } else {
                            frodo.frodoLocation[1]--;
                            frodoSelector.style.top = frodo.frodoLocation[1] + "px";
                            if (firstMove) {
                                if (right_rb.checked || left_rb.checked) {
                                    allClearInterval();
                                    firstMove=false;
                                }
                            }
                            if (oneRingSelector.offsetLeft <= (frodo.frodoLocation[0] + 1) && (frodo.frodoLocation[0] + 1) <= oneRingSelector.offsetLeft + oneRingSelector.offsetWidth) {
                                console.log(oneRingSelector.offsetWidth)
                                if (oneRingSelector.offsetTop <= (frodo.frodoLocation[1] + 2) && frodo.frodoLocation[1] <= oneRingSelector.offsetTop + oneRingSelector.offsetHeight) {
                                    oneRingSelector.style.top = (frodo.frodoLocation[1] - 1) + 'px';
                                }
                            }
                            if (frodoSelector.offsetTop == (areaSelector.offsetHeight - frodoSelector.offsetHeight) && (frodoSelector.offsetLeft >= mtDoomSelector.offsetLeft && frodoSelector.offsetLeft <= mtDoomSelector.offsetLeft + mtDoomSelector.offsetWidth - frodoSelector.offsetWidth)) {
                                if (frodoSelector.offsetTop + 1 == mtDoomSelector.offsetTop) {
                                    score++;
                                    document.getElementById("score").textContent = score;
                                    alert("You WON ! The eye of Sauron has been destroyed.");
                                } else {
                                    alert("You LOST ! Sauron has taken back his ring and he will rule the world.");
                                    if (score != 0) { score--; }
                                    document.getElementById("score").textContent = score;
                                }
                                animation.reset(score);
                            }
                        }
                    }
                }
            }
        }
    }
}

var animation = new Animation();
var frodo = new Frodo();
var mtDoom = new MtDoom();
var theRing = new Ring();

mtDoom.randomLocation();
theRing.randomLocation();
frodo.startLocation();

document.querySelector(".btnReset").addEventListener("click", () => animation.reset(0));
document.querySelector(".btnMove").addEventListener("click", animation.move);