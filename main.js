
class TypingWriting{
    constructor(textElement, words,wait = 3000,color){
        this.textElement = textElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait,10);
        this.type();
        this.isDeleting = false;  
        //this.codes = JSON.parse(["#f72f77", "#f9dc06" , "#0376f7" , '#4ed55f' , '#59c5f3' , '#f9b122' ,'#5752d0' ,'#f93b2f']);

        
        this.color = words;
       // this.color='';
    }
    type(){
        const currenttext = this.wordIndex % this.words.length;
        const fulltext = this.words[currenttext];
        const colors = ["#f72f77", "#f9dc06" , "#0376f7" , '#4ed55f' , '#59c5f3' , '#f9b122' ,'#5752d0' ,'#f93b2f'];
        const color = colors[currenttext];
       
        if(this.isDeleting){
            this.txt = fulltext.substring(0,this.txt.length -1);
        }else{
            this.txt = fulltext.substring(0,this.txt.length +1);
        }
        this.textElement.innerHTML= `<sapn class="fulltext"style="color:${color}">${this.txt}</span>`

        let timeSpeed = 300;
        if(this.isDeleting){
            timeSpeed /= 3;
        }
        if(!this.isDeleting && this.txt === fulltext){
            timeSpeed = this.wait;
            this.isDeleting = true;
        }else if(this.isDeleting && this.txt === ''){
            this.isDeleting=false;
            this.wordIndex ++;
            timeSpeed=500;
        }

        setTimeout(() => this.type(), timeSpeed);
    }
}



//init on DOM load
document.addEventListener('DOMContentLoaded',init);
function init(){
    const textElement= document.querySelector('.departments');
    const words = JSON.parse(textElement.getAttribute('data-text'));
    const wait = textElement.getAttribute('data-wait');
     new TypingWriting(textElement, words, wait);
   ;
}
