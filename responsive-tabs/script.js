function hideAll() {
    document.querySelectorAll('.tab-content').forEach(function(x) {
        x.style.display = 'none';
    });

    document.querySelectorAll('.tab-list button').forEach(function(x) {
        x.style.backgroundColor = 'white';
    });
}

hideAll();
document.querySelector('.tab-content:first-of-type').style.display = 'block';
document.querySelector('.tab-list button:first-of-type').style.backgroundColor = '#22A7F0';

document.querySelectorAll('.tab-list button').forEach(function(x) {
    x.addEventListener('click', function() {
        hideAll();
        x.style.backgroundColor = '#22A7F0';
        const target = x.dataset.target;
        const content = document.querySelector(target);
        content.style.display = 'block';
    });
});

