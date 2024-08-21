const fs = require('fs');
let logFile = []; 

// 로그 파일 읽기
try {
    let data = fs.readFileSync('logs2', 'utf8');
    // console.log(data);
    let lines = data.split('\n');
    // console.log(lines);

    // 정규 표현식 객체로 변환
    const pattern = /(\w+)\(([\w\.]+):(\d+)\)/; 
    // console.log(pattern)
    for (let i of lines) {
        let match = pattern.exec(i);
        console.log("iiiiiii", i);
        console.log("matchmatchmatch",match);
        // console.log(match.level)

        if (match) {
            let [, level, filename, line] = match;
            console.log(level,"levellevellevellevellevellevel")
            // if (!logFile[filename]) {
            //     logFile[filename] = [];
            // }
            logFile.push({ "메소드명":level, "파일이름":filename,"줄번호":line });
        }

    }

    console.log(logFile); // 결과 출력

} catch (error) {
    console.log(error);
}