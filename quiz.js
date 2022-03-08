// 문제 전역변수 -------------------------------------------------------------------------------
var number_id, problem_id, answer_id, board_id;
var problem_arr = ['q1.png', 'q2.png', 'q3.png', 'q4.png', 'q5.png', 'qres.png']
var answer_arr = ['O', 'O', 'X', 'O', 'O'];
			
var selectAnswer, score;
var imgNum, startNum, endNum;

score = 0;

// 학생정보 입력 -------------------------------------------------------------------------------
// 학교, 학년, 반, 번호
function Student(school, syear, sclass, snum) {

	this.school = school;
	this.syear = syear;
	this.sclass = sclass;
	this.snum = snum;
}


function addStudent() {
	let objectArr = [];
	let schoolTableData = document.getElementsByClassName("school");
	let syearTableData = document.getElementsByClassName("syear");
	let sclassTableData = document.getElementsByClassName("sclass");
	let snumTableData = document.getElementsByClassName("snum");

	for (let i = 0; i < 1; i++) {
		let school = prompt("학교를 입력하세요.(띄어쓰기 없이))");
		let syear = prompt("학년을 입력하세요.");
		let sclass = prompt("반을 입력하세요.");
		let snum = prompt("번호를 입력하세요.");

		objectArr.push(new Student(school, syear, sclass, snum));

		var form = document.createElement("form");     
		
		
		form.setAttribute("method","post");
		form.target = "_blank";              
		form.setAttribute("action","http://49.50.172.236:8080/scores/farmgageupdate.do");
		document.body.appendChild(form);                        
	
		//input
		var school_id = document.createElement("input");  
		school_id.setAttribute("type", "hidden");                 
		school_id.setAttribute("name", "school");                        
		school_id.setAttribute("value", school);

		var syear_id = document.createElement("input");  
		syear_id.setAttribute("type", "hidden");                 
		syear_id.setAttribute("name", "syear");                        
		syear_id.setAttribute("value", syear);

		var sclass_id = document.createElement("input");  
		sclass_id.setAttribute("type", "hidden");                 
		sclass_id.setAttribute("name", "sclass");                        
		sclass_id.setAttribute("value", sclass); 

		var snum_id = document.createElement("input");  
		snum_id.setAttribute("type", "hidden");                 
		snum_id.setAttribute("name", "snum");                        
		snum_id.setAttribute("value", snum);

		// var fscore_id = document.createElement("input");
		// fscore_id.setAttribute("type", "hidden");                 
		// fscore_id.setAttribute("name", "fscore");                        
		// fscore_id.setAttribute("value", score);
		// form.appendChild(fscore_id);
		
		form.appendChild(school_id);
		form.appendChild(syear_id);
		form.appendChild(sclass_id);
		form.appendChild(snum_id);

		
		//폼전송
		form.submit();
	}

	console.log(objectArr)

	for (let i = 0; i < 1; i++) {
		schoolTableData[i].innerHTML = objectArr[i].school;
		syearTableData[i].innerHTML = objectArr[i].syear;
		sclassTableData[i].innerHTML = objectArr[i].sclass;
		snumTableData[i].innerHTML = objectArr[i].snum;
	}

	
}

function getScore(){
	var form = document.createElement("form");

	form.setAttribute("method","post");
	form.target = "_blank";              
	form.setAttribute("action","http://49.50.172.236:8080/scores/lightupdate.do");
	document.body.appendChild(form);

    var school = document.querySelector('input[name="school"]').value;
	var school_id = document.createElement("input");
	school_id.setAttribute("type", "hidden");
	school_id.setAttribute("name", "school")
	school_id.setAttribute("value", school);
	form.append(school_id);

    var syear = document.querySelector('input[name="syear"]').value;
	var syear_id = document.createElement("input");
	syear_id.setAttribute("type", "hidden");
	syear_id.setAttribute("name", "syear")
	syear_id.setAttribute("value", syear);
	form.append(syear_id);

    var sclass = document.querySelector('input[name="sclass"]').value;
	var sclass_id = document.createElement("input");
	sclass_id.setAttribute("type", "hidden");
	sclass_id.setAttribute("name", "sclass")
	sclass_id.setAttribute("value", sclass);
	form.append(sclass_id);

    var snum = document.querySelector('input[name="snum"]').value;
	var snum_id = document.createElement("input");
	snum_id.setAttribute("type", "hidden");
	snum_id.setAttribute("name", "snum")
	snum_id.setAttribute("value", snum);
	form.append(snum_id);

    var score = document.querySelector('input[name="scores"]').value;
	var score_id = document.createElement("input");
	score_id.setAttribute("type", "hidden");
	score_id.setAttribute("name", "fscore")
	score_id.setAttribute("value", score);
	form.append(score_id);
		
	var survey = document.querySelector('input[name="survey1"]:checked').value;
	var survey_id = document.createElement("input");
	survey_id.setAttribute("type", "hidden");
	survey_id.setAttribute("name", "fscore_survey_one")
	survey_id.setAttribute("value", survey);
	form.append(survey_id);

    var survey2 = document.querySelector('input[name="survey2"]:checked').value;
	var survey2_id = document.createElement("input");
	survey2_id.setAttribute("type", "hidden");
	survey2_id.setAttribute("name", "fscore_survey_two")
	survey2_id.setAttribute("value", survey2);
	form.append(survey2_id);

    var survey3 = document.querySelector('input[name="survey3"]').value;
	var survey3_id = document.createElement("input");
	survey3_id.setAttribute("type", "hidden");
	survey3_id.setAttribute("name", "fscore_survey_three")
	survey3_id.setAttribute("value", survey3);
	form.append(survey3_id);

	//폼전송
	form.submit();
}

init();
// ---------------------------------------------------------------------------------------
function init(){
	// const div = document.getElementById("User");
	// div.remove();


	number_id = document.getElementById("number_id");
	problem_id = document.getElementById("problem_id");
	answer_id = document.getElementById("answer_id");
				
	startNum = 0;
	endNum = 5;
	
	
	// document.body.style.backgroundImage = "url('img/board.png')";
	setProblem1();
}

// DB이동 변수 : [ myname , score ]

// 사용자 입력 (이름) DB 이동
// function setName(){
// 	var myname = prompt("이름을 입력하세요", "");
// 	if(myname != null){
// 		init();
// 	}
// 	while(1){
// 		if(myname == ''){
// 			myname = prompt("이름칸이 비었습니다. 다시 입력해주세요", "");
// 			continue;
// 		}else{
// 			break;
// 		}
// 	}
// }
// setName();

			
function setProblem(){
	problem_id.innerHTML = "<img src='./img/" + problem_arr[startNum] + "' class='problem_img'>";
	if(startNum == endNum){
		number_id.innerHTML = "<span class='label'>< 결과보기 ></span>";
		// <button typle='button' class='button restart' onclick='history.go(0);'>다시하기</button>"
		answer_id.innerHTML = "<button type='button' class='button res' onclick='btnResFunc();'>결과보기</button><button typle='button' class='button restart' onclick='survey();'>설문조사</button>";
	}else{
		number_id.innerHTML = "<span class='label'>< " + parseInt(startNum+1) + " / " + endNum +" ></span>";
		answer_id.innerHTML = "<button type='button' class='button o' onclick='btnOFunc();'><img src='img/o.PNG' class='o_img'></button>" + "　　　　　　　　　　　　　　　　　　" +"<button type='button' class='button x' onclick='btnXFunc();'><img src='img/x.PNG' class='x_img'></button></button>";
	}
}

// 퀴즈문제 ----------------------------------------------------------

function Process1(){
	Swal.fire({
		title: '',
		text: '',
		customClass: 'swal-wide',
		html: "<img src='img/p1.PNG' style='width: 800px;'>"
	})
}

function Process2(){
	Swal.fire({
		title: '',
		text: '',
		customClass: 'swal-wide',
		html: "<img src='img/p2.PNG' style='width: 800px;'>"
	})
}

function Process3(){
	Swal.fire({
		title: '',
		text: '',
		customClass: 'swal-wide',
		html: "<img src='img/p3.PNG' style='width: 800px;'>"
	})
}

function Process4(){
	Swal.fire({
		title: '',
		text: '',
		customClass: 'swal-wide',
		html: "<img src='img/p4.PNG' style='width: 800px;'>"
	})
}

function Process5(){
	Swal.fire({
		title: '',
		text: '',
		customClass: 'swal-wide',
		html: "<img src='img/p5.PNG' style='width: 800px;'>"
	})
}

function Process(){
	Swal.fire({
		title: '',
		text: '',
		html: "<b>오답입니다</b>"
	})
}

function setProblem1(){
	problem_id.innerHTML = "<img src='./img/" + problem_arr[0] + "' class='problem_img'>";
	number_id.innerHTML = "<span class='label'>< " + parseInt(1) + " / " + endNum +" ></span>";
	answer_id.innerHTML = "<button type='button' class='button o' onclick='setProblem2();btnOFunc();'><img src='img/o.PNG' class='o_img'></button>" + "　　　　　　　　　　　　　　　　　　" +"<button type='button' class='button x' onclick='setProblem2();btnXFunc();Process1();'><img src='img/x.PNG' class='x_img'></button></button>";
}

function setProblem2(){
	problem_id.innerHTML = "<img src='./img/" + problem_arr[1] + "' class='problem_img'>";
	number_id.innerHTML = "<span class='label'>< " + parseInt(2) + " / " + endNum +" ></span>";
	answer_id.innerHTML = "<button type='button' class='button o' onclick='setProblem3();btnOFunc();'><img src='img/o.PNG' class='o_img'></button>" + "　　　　　　　　　　　　　　　　　　" +"<button type='button' class='button x' onclick='setProblem3();btnXFunc();Process2();'><img src='img/x.PNG' class='x_img'></button></button>";
}


function setProblem3(){
	problem_id.innerHTML = "<img src='./img/" + problem_arr[2] + "' class='problem_img'>";
	number_id.innerHTML = "<span class='label'>< " + parseInt(3) + " / " + endNum +" ></span>";
	answer_id.innerHTML = "<button type='button' class='button o' onclick='setProblem4();btnOFunc();Process3();'><img src='img/o.PNG' class='o_img'></button>" + "　　　　　　　　　　　　　　　　　　" +"<button type='button' class='button x' onclick='setProblem4();btnXFunc();'><img src='img/x.PNG' class='x_img'></button></button>";
}

function setProblem4(){
	problem_id.innerHTML = "<img src='./img/" + problem_arr[3] + "' class='problem_img'>";
	number_id.innerHTML = "<span class='label'>< " + parseInt(4) + " / " + endNum +" ></span>";
	answer_id.innerHTML = "<button type='button' class='button o' onclick='setProblem5();btnOFunc();'><img src='img/o.PNG' class='o_img'></button>" + "　　　　　　　　　　　　　　　　　　" +"<button type='button' class='button x' onclick='setProblem5();btnXFunc();Process4();'><img src='img/x.PNG' class='x_img'></button></button>";
}

function setProblem5(){
	problem_id.innerHTML = "<img src='./img/" + problem_arr[4] + "' class='problem_img'>";
	number_id.innerHTML = "<span class='label'>< " + parseInt(5) + " / " + endNum +" ></span>";
	answer_id.innerHTML = "<button type='button' class='button o' onclick='setProblem6();btnOFunc();'><img src='img/o.PNG' class='o_img'></button>" + "　　　　　　　　　　　　　　　　　　" +"<button type='button' class='button x' onclick='setProblem6();btnXFunc();Process5();'><img src='img/x.PNG' class='x_img'></button></button>";
}

function setProblem6(){
	problem_id.innerHTML = "<img src='./img/" + problem_arr[5] + "' class='problem_img'>";
	number_id.innerHTML = "<span class='label'>< 결과보기 ></span>";
	// <button typle='button' class='button restart' onclick='history.go(0);'>다시하기</button>"
	answer_id.innerHTML = "<button type='button' class='button res' onclick='btnResFunc();'>결과보기</button><button typle='button' class='button restart' onclick='survey();'>설문조사</button>";
}


// OX버튼 --------------------------------------------------------
function btnOFunc(){
	selectAnswer = "O";
	if(answer_arr[startNum] == selectAnswer){
		score++;
	}
	startNum++;
}
			
function btnXFunc(){
	selectAnswer = "X";
	if(answer_arr[startNum] == selectAnswer){
		score++;
	}
	startNum++;
}

// 점수(socre) DB 이동 ------------------------------------------------------
function btnResFunc(){
	Swal.fire({
		title: '',
		text: '',
		html: "<b>수고하셨습니다!</b><br><b>당신의 점수는 " + score + "점입니다.</b><br><b>모든체험이 완료되었습니다.</b><br><b>이제 설문조사에 참여하고 종료해주세요.</b>"
	})
}


// 설문조사페이지 이동
function survey(){
	location.href="index2.html";
}

function gopost(){
	var survey1 = document.getElementById("fscore_survey_one").value;

	var form = document.createElement("form");     

	form.setAttribute("method","post");
	form.target = "_blank";
	form.setAttribute("action","http://49.50.172.236:8080/scores/farmgageupdate.do");        
	document.body.appendChild(form);
	

	var fscore_survey_one_id = document.createElement("input");  
	fscore_survey_one_id.setAttribute("type", "hidden");                 
	fscore_survey_one_id.setAttribute("name", "fscore_survey_one");                        
	fscore_survey_one_id.setAttribute("value", survey1); 
		
	form.appendChild(fscore_survey_one_id);

		
	//폼전송
	form.submit();
	surveyFunc();
}

function surveyFunc(){
	Swal.fire({
		title: '',
		text: '',
		html: "<b>제출이 완료되었습니다</b>"
	})
}