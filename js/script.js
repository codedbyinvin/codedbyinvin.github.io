document.addEventListener("DOMContentLoaded", () => {
    class Counter {
        constructor(counterId, resetId, storageKey) {
            this.counterElement = document.getElementById(counterId);
            this.resetButton = document.getElementById(resetId);
            this.storageKey = storageKey;
            this.today = new Date();
            this.firstVisit = this.getFirstVisit();
            this.updateCounter();
            this.resetButton.addEventListener("click", () => this.resetCounter());
        }

        getFirstVisit() {
            let firstVisit = new Date(parseInt(localStorage.getItem(this.storageKey)));
            if (!firstVisit || isNaN(firstVisit.getTime())) {
                firstVisit = this.today;
                localStorage.setItem(this.storageKey, firstVisit.getTime());
            }
            return firstVisit;
        }

        getTimeSince() {
            this.today = new Date();
            let difference = this.today.getTime() - this.firstVisit.getTime();
        
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            difference -= days * 1000 * 60 * 60 * 24;
        
            const hours = Math.floor(difference / (1000 * 60 * 60));
            difference -= hours * 1000 * 60 * 60;
        
            const minutes = Math.floor(difference / (1000 * 60));
            difference -= minutes * 1000 * 60;
        
            const seconds = Math.floor(difference / 1000);
        
            return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
        }
        updateCounter() {
            this.counterElement.innerHTML = this.getTimeSince();
        }

        resetCounter() {
            this.firstVisit = new Date();
            localStorage.setItem(this.storageKey, this.firstVisit.getTime());
            this.updateCounter();
        }
    }

        new Counter("counter_moine", "reset_moine", "firstVisit_ill");
        new Counter("counter_fit", "reset_fit", "firstVisit_fit");
        new Counter("counter_eat", "reset_eat", "firstVisit_eat");

        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        var W = window.innerWidth;
        var H = window.innerHeight;

        canvas.width = W;
        canvas.height = H;

        var fontSize = 16;
        var columns = Math.floor(W / fontSize);
        var drops = [];
        for(var i=0; i<columns; i++){
            drops.push(0);
        }
        var str = "JavaScript Hacking Effect";
        function draw(){
            context.fillStyle = "rgba(0,0,0,0.05)";
            context.fillRect(0, 0, W, H);
            context.fontSize = "700 " + fontSize + "px";
            context.fillStyle = "#00cc33";
            for(var i=0; i<columns; i++){
                var index = Math.floor(Math.random()*str.length);
                var x = i * fontSize;
                var y = drops[i] * fontSize;
                context.fillText(str[index], x, y);
                if(y >= canvas.height && Math.random() > 0.99){
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        draw();
        setInterval(draw, 35);

});