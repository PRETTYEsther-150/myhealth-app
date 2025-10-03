let selectedDate = null;
let selectedTime = null;
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

        // Login functionality
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Login button clicked!');
    alert('Form submitted');

    document.getElementById('login-page').style.display = 'none';
    
    // Show main app
    document.getElementById('app').style.display = 'block';

    const email = document.querySelector('input[type="email"]').value.trim();
    const password = document.querySelector('input[type="password"]').value.trim();
    const errorMessage = document.getElementById('errorMessage');
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
});
/*
    if (!email || !password) {
        alert('Please enter both email and password.');
        return;
    }

    if (password.length < 8) {
        errorMessage.textContent = 'Password must be at least 8 characters long.';
        return;
    }
    if (!hasNumber) {
        errorMessage.textContent = 'Password must contain at least one number.';
        return;
    }
    if (!hasSymbol) {
        errorMessage.textContent = 'Password must contain at least one special character.';
        return;
    }

    errorMessage.textContent = '';
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('app').style.display = 'block';
});
*/
        function logout() {
            document.getElementById('app').style.display = 'none';
            document.getElementById('login-page').style.display = 'flex';
        }

        // Navigation
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const pageId = this.dataset.page;
                document.querySelectorAll('.page').forEach(page => {
                    page.classList.remove('active');
                });
                document.getElementById(pageId).classList.add('active');
            });
        });

        // Calendar functionality
        function renderCalendar() {
            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
            
            document.getElementById('currentMonth').textContent = `${monthNames[currentMonth]} ${currentYear}`;
            
            const grid = document.getElementById('calendarGrid');
            grid.innerHTML = '';
            
            // Day headers
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            days.forEach(day => {
                const dayEl = document.createElement('div');
                dayEl.className = 'calendar-day';
                dayEl.textContent = day;
                grid.appendChild(dayEl);
            });
            
            // Get first day and total days
            const firstDay = new Date(currentYear, currentMonth, 1).getDay();
            const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
            const today = new Date();
            
            // Empty cells before first day
            for (let i = 0; i < firstDay; i++) {
                grid.appendChild(document.createElement('div'));
            }
            
            // Date cells
            for (let day = 1; day <= daysInMonth; day++) {
                const dateEl = document.createElement('div');
                dateEl.className = 'calendar-date';
                dateEl.textContent = day;
                
                const cellDate = new Date(currentYear, currentMonth, day);
                
                // Disable past dates
                if (cellDate < today.setHours(0,0,0,0)) {
                    dateEl.classList.add('disabled');
                } else {
                    dateEl.addEventListener('click', function() {
                        if (!this.classList.contains('disabled')) {
                            document.querySelectorAll('.calendar-date').forEach(d => d.classList.remove('selected'));
                            this.classList.add('selected');
                            selectedDate = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                            showTimeSlots();
                        }
                    });
                }
                
                grid.appendChild(dateEl);
            }
        }

        function previousMonth() {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            renderCalendar();
        }

        function nextMonth() {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            renderCalendar();
        }

        function showTimeSlots() {
            const card = document.getElementById('timeSlotsCard');
            const slotsContainer = document.getElementById('timeSlots');
            card.style.display = 'block';
            slotsContainer.innerHTML = '';
            
            const times = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
                          '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'];
            
            times.forEach(time => {
                const slot = document.createElement('div');
                slot.className = 'time-slot';
                slot.textContent = time;
                slot.addEventListener('click', function() {
                    document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
                    this.classList.add('selected');
                    selectedTime = time;
                });
                slotsContainer.appendChild(slot);
            });
        }

        function submitAppointment() {
            const name = document.getElementById('patientName').value;
            const phone = document.getElementById('patientPhone').value;
            const department = document.getElementById('departmentSelect').value;
            
            if (!name || !phone || !department || !selectedDate || !selectedTime) {
                alert('Please fill in all fields and select a date and time');
                return;
            }
            
            alert(`Appointment booked successfully!\n\nName: ${name}\nDepartment: ${department}\nDate: ${selectedDate}\nTime: ${selectedTime}`);
            
            // Reset form
            document.getElementById('patientName').value = '';
            document.getElementById('patientPhone').value = '';
            document.getElementById('departmentSelect').value = '';
            selectedDate = null;
            selectedTime = null;
            document.getElementById('timeSlotsCard').style.display = 'none';
            renderCalendar();
        }

        // Symptom checker
        function checkSymptoms() {
            const symptoms = [];
            document.querySelectorAll('#symptomsList input:checked').forEach(checkbox => {
                symptoms.push(checkbox.value);
            });
            
            if (symptoms.length === 0) {
                alert('Please select at least one symptom');
                return;
            }
            
            let recommendation = '';
            let department = '';
            
            // Simple logic for recommendations
            if (symptoms.includes('breathing') || (symptoms.includes('fever') && symptoms.includes('cough'))) {
                department = 'Doctor (Urgent)';
                recommendation = 'Based on your symptoms, we recommend seeing a doctor immediately. Your symptoms may require urgent medical attention.';
            } else if (symptoms.includes('fever') || symptoms.includes('bodyAches') || symptoms.includes('fatigue')) {
                department = 'Doctor';
                recommendation = 'We recommend scheduling an appointment with a doctor for proper diagnosis and treatment.';
            } else if (symptoms.includes('stomachPain') || symptoms.includes('nausea')) {
                department = 'Doctor or Lab';
                recommendation = 'Your symptoms may require medical consultation. Consider booking both a doctor consultation and lab tests if recommended.';
            } else {
                department = 'Doctor';
                recommendation = 'We recommend consulting with a doctor to properly evaluate your symptoms.';
            }
            
            const recDiv = document.getElementById('recommendation');
            recDiv.style.display = 'block';
            recDiv.className = 'recommendation';
            recDiv.innerHTML = `
                <h3>Recommendation: ${department}</h3>
                <p>${recommendation}</p>
                <p><strong>Symptoms reported:</strong> ${symptoms.join(', ')}</p>
                <button class="btn btn-primary" onclick="goToBooking()" style="margin-top: 15px;">Book Appointment Now</button>
            `;
        }

        function goToBooking() {
            document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
            document.getElementById('book-appointment').classList.add('active');
        }

         renderCalendar();
