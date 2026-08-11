function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
emailjs.init("jIgMP45fS2suAnfsy");
let selectedFood = [];

let selectedPlan = '';

function selectPlan(name) {
  selectedPlan = name;
  showScreen('screen3');
}
let selectedTime = '';

function selectTime(el, time) {
  document.querySelectorAll('.time-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  selectedTime = time;
}

function goNext() {
  const date = document.getElementById('dateInput').value;
  if (!date || !selectedTime) {
    alert('Выбери дату и время 💕');
    return;
  }

  emailjs.send("service_ss1jdmq", "template_81b0ap8", {
    plan: selectedPlan,
    date: date,
    time: selectedTime
  });

  showScreen('screen4');
}