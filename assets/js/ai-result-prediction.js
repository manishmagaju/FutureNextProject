
    const form = document.getElementById('prediction-form');
    const loading = document.getElementById('loading');
    const resultCard = document.getElementById('result-card');
    const resultText = document.getElementById('result-text');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      loading.style.display = 'block';
      resultCard.style.display = 'none';

      setTimeout(() => {
        loading.style.display = 'none';
        const attendance = parseInt(document.getElementById('attendance').value);
        const assignments = parseInt(document.getElementById('assignments').value);
        const examScore = parseInt(document.getElementById('exam-score').value);

        const average = (attendance * 0.3) + (assignments * 0.3) + (examScore * 0.4);

        resultCard.style.display = 'block';
        if (average >= 70) {
          resultText.innerHTML = `Predicted performance: <span class="result-good">Excellent</span> (${average.toFixed(2)}%)`;
        } else if (average >= 50) {
          resultText.innerHTML = `Predicted performance: <span style="color:#f9a825;font-weight:700;">Average</span> (${average.toFixed(2)}%)`;
        } else {
          resultText.innerHTML = `Predicted performance: <span class="result-poor">Needs Improvement</span> (${average.toFixed(2)}%)`;
        }
      }, 2000);
    });
  