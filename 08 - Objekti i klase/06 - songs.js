function solve(arr) {
    class Song {
        constructor(tl, n, t) {
            this.typeList = tl;
            this.name = n;
            this.time = t;
        }

        print() {
            console.log(`Song ${this.name} runs ${this.calcSeconds()} seconds.`);
        }

        calcSeconds() {
            // this.time = "3:14";
            let tokens = this.time.split(":");
            let minutes = Number(tokens[0]);
            let seconds = Number(tokens[1]);
            let totalSeconds = minutes * 60 + seconds;
            return totalSeconds;
        }
    }

    let n = Number(arr.shift());
    let filter = arr.pop();
    for (let i = 1; i <= n; i++) {
        let songInfo = arr.shift();
        let tokens = songInfo.split("_");
        let listType = tokens[0];
        let name = tokens[1];
        let time = tokens[2];
        let song = new Song(listType, name, time);
        if (song.typeList == filter || filter == "all") {
            song.print();
            //song.calcSeconds();
        }
    }
}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    );