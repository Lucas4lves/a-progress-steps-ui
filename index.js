const progressBar = document.querySelector('.progress');
let multi = 1;

function trackProgress(){
    progressBar.classList.add('dynamicProgress');

}
function incProgress(){
    if(multi === 9){
        return
    }
    const styles = [`
    .dynamicProgress {
        width: calc(42.5px*${multi});
        transition: width 1s ease-out;
    }
    `]
    trackProgress();
    const styleSheet = document.createElement('style');
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    multi += 2;
    
}
