 (function () {
            // -------------------- HELPER: getStudentClass (defined once) --------------------
            function getStudentClass(student) {
                return (student.className || student.class || "").trim();
            }

            // -------------------- GLOBAL VARIABLES (only one declaration) --------------------
            let performanceChart, scoreTrendChart, completionChart, distributionChart, topicsChart;
            let calendar;
            let currentPage = 'dashboard';
            let currentConversation = null;
            let testQuestions = [];
            let editingTestId = null;
            let editingQuestionIndex = null;
            let editingStudentId = null;

            // Application Data (from server-side EJS)
            const appData = {
                currentUser: {
                    name: "<%= teacher.name %>",
                    email: "<%= teacher.email %>",
                    role: "<%= teacher.subject %> Teacher",
                    avatar: "<%= (teacher.name || '').split(' ').map(n=>n[0]).join('') %>"
                },
                students: <%- JSON.stringify(students || []) %>,
                allStudents: <%- JSON.stringify(students || []) %>,
                tests: [],   // will be filled by loadTeacherTests
                messages: [],
                analyticsData: {
                    students: [
                        { id: 1, name: "Sarah Anderson", initials: "SA", class: "10-B", roll: "15", score: 95.5, progress: 95, trend: "up", trendValue: 5.2, testsTaken: 12, averageTime: 14.5 },
                        { id: 2, name: "Michael Johnson", initials: "MJ", class: "11-A", roll: "22", score: 92.3, progress: 92, trend: "up", trendValue: 3.8, testsTaken: 10, averageTime: 16.2 }
                    ],
                    scoreTrend: [85, 86, 87, 88, 89, 90, 91, 92, 91, 92, 93, 94],
                    completionRate: [90, 91, 92, 93, 92, 93, 94, 93, 94, 95, 94, 95],
                    distribution: [5, 15, 25, 30, 20, 5],
                    topics: {
                        "Algebra": 85,
                        "Geometry": 88,
                        "Calculus": 82,
                        "Statistics": 90,
                        "Trigonometry": 79
                    }
                },
                calendarEvents: [
                    { title: 'Algebra Final Exam', start: new Date(new Date().setDate(new Date().getDate() + 1)), end: new Date(new Date().setDate(new Date().getDate() + 1)), color: '#e74c3c', description: 'Final exam for Algebra course' },
                    { title: 'Parent-Teacher Meeting', start: new Date(new Date().setDate(new Date().getDate() + 3)), end: new Date(new Date().setDate(new Date().getDate() + 3)), color: '#3498db', description: 'Meeting with parents of class 10-B' }
                ]
            };

            // -------------------- TOAST FUNCTION --------------------
            function showToast(title, message, type = 'info') {
                const toastContainer = document.getElementById('toastContainer');
                if (!toastContainer) return;
                const toast = document.createElement('div');
                toast.className = `toast toast-${type}`;
                toast.innerHTML = `
                    <div class="toast-icon">
                        ${type === 'success' ? '<i class="fas fa-check-circle"></i>' :
                        type === 'error' ? '<i class="fas fa-exclamation-circle"></i>' :
                            '<i class="fas fa-info-circle"></i>'}
                    </div>
                    <div class="toast-content">
                        <h4>${title}</h4>
                        <p>${message}</p>
                    </div>
                `;
                toastContainer.appendChild(toast);
                setTimeout(() => toast.classList.add('show'), 100);
                setTimeout(() => {
                    toast.classList.remove('show');
                    setTimeout(() => toast.remove(), 300);
                }, 3000);
            }

            // -------------------- MODAL FUNCTIONS --------------------
            window.openModal = function (modalId) {
                const el = document.getElementById(modalId);
                if (el) el.classList.add('active');
            };
            window.closeModal = function (modalId) {
                const el = document.getElementById(modalId);
                if (el) el.classList.remove('active');
            };

            // -------------------- UPDATE BADGE --------------------
            function updateMessageBadge() {
                const unreadCount = appData.messages.filter(msg => msg.unread).length;
                const badge = document.getElementById('unreadMessagesCount');
                if (badge) {
                    badge.textContent = unreadCount;
                    badge.style.display = unreadCount > 0 ? 'block' : 'none';
                }
            }

            // -------------------- DASHBOARD PAGE --------------------
            function initializeDashboardPage() {
                const perfCanvas = document.getElementById('performanceChart');
                if (perfCanvas) {
                    const ctx = perfCanvas.getContext('2d');
                    if (performanceChart) performanceChart.destroy();
                    performanceChart = new Chart(ctx, {
                        type: 'line',
                        data: {
                            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
                            datasets: [
                                { label: 'Class 10-A', data: [78, 82, 85, 83, 86, 88], borderColor: '#4a6fa5', backgroundColor: 'rgba(74, 111, 165, 0.1)', borderWidth: 2, fill: true },
                                { label: 'Class 10-B', data: [85, 87, 89, 88, 90, 92], borderColor: '#4fc3a1', backgroundColor: 'rgba(79, 195, 161, 0.1)', borderWidth: 2, fill: true }
                            ]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: { legend: { position: 'top' } },
                            scales: { y: { beginAtZero: false, min: 70, max: 100 } }
                        }
                    });
                }

                // Attach listeners if buttons exist
                const createBtn = document.getElementById('createTestDashboardBtn');
                if (createBtn) createBtn.addEventListener('click', (e) => { e.preventDefault(); openModal('createTestModal'); });
                // (other buttons may be added similarly, but we'll keep the ones from DOMContentLoaded)
            }

            function updateDashboardCounts() {
                const countEl = document.getElementById('activeTestsCount');
                if (countEl) countEl.innerText = appData.tests.length;
            }

            // -------------------- TESTS PAGE --------------------
            function initializeTestsPage() {
                const testsGrid = document.getElementById('testsGrid');
                if (!testsGrid) return;
                testsGrid.innerHTML = '';
                appData.tests.forEach(test => {
                    const progress = test.totalStudents ? (test.submissions / test.totalStudents) * 100 : 0;
                    const statusColors = { active: '#28a745', completed: '#6c757d', upcoming: '#ffc107' };
                    const card = document.createElement('div');
                    card.className = 'test-card';
                    card.innerHTML = `
                        <div class="test-header">
                            <div class="test-title">${test.title}</div>
                            <div style="display:flex; gap:8px; align-items:center;">
                                <div class="test-badge">${test.status ? test.status.charAt(0).toUpperCase() + test.status.slice(1) : 'Unknown'}</div>
                                <button class="btn btn-outline btn-sm" onclick="deleteTest('${test.id}')"><i class="fas fa-trash"></i></button>
                            </div>
                        </div>
                        <div class="test-body">
                            <div class="test-info">
                                <div class="info-item"><div class="info-label">Subject</div><div class="info-value">${test.subject}</div></div>
                                <div class="info-item"><div class="info-label">Class</div><div class="info-value">${test.class}</div></div>
                                <div class="info-item"><div class="info-label">Date</div><div class="info-value">${test.date || ''}</div></div>
                                <div class="info-item"><div class="info-label">Duration</div><div class="info-value">${test.duration} min</div></div>
                            </div>
                            <div class="test-progress">
                                <div class="progress-info"><span>Submissions: ${test.submissions || 0}/${test.totalStudents || 0}</span><span>${progress.toFixed(0)}%</span></div>
                                <div class="progress-bar"><div class="progress-fill" style="width: ${progress}%; background: ${statusColors[test.status] || '#888'};"></div></div>
                            </div>
                            <div class="test-info">
                                <div class="info-item"><div class="info-label">Average Score</div><div class="info-value">${test.averageScore > 0 ? test.averageScore.toFixed(1) + '%' : 'N/A'}</div></div>
                                <div class="info-item"><div class="info-label">Questions</div><div class="info-value">${test.questions ? test.questions.length : 0}</div></div>
                            </div>
                            <div class="test-actions">
                                <a href="/teacher/view-test/${test.id}" class="btn btn-primary btn-sm"><i class="fas fa-eye"></i> View</a>
                                <button class="btn btn-outline btn-sm" onclick="editTest('${test.id}')"><i class="fas fa-edit"></i> Edit</button>
                                <button class="btn btn-outline btn-sm" onclick="viewTestResults('${test.id}')"><i class="fas fa-chart-bar"></i> Results</button>
                                <button class="btn btn-success btn-sm" onclick="sendTest('${test.id}')"><i class="fas fa-paper-plane"></i> Send Test</button>
                            </div>
                        </div>
                    `;
                    testsGrid.appendChild(card);
                });

                // Attach listener for create new test button
                const createNewBtn = document.getElementById('createNewTestBtn');
                if (createNewBtn) {
                    createNewBtn.addEventListener('click', () => {
                        testQuestions = [];
                        const qList = document.getElementById('questionList');
                        if (qList) qList.innerHTML = '';
                        openModal('createTestModal');
                    });
                }
                const filterBtn = document.getElementById('filterTestsBtn');
                if (filterBtn) {
                    filterBtn.addEventListener('click', () => showToast('Filter Tests', 'Filter functionality is coming soon!', 'info'));
                }
            }

            async function loadTeacherTests() {
                try {
                    const res = await fetch("/teacher/my-tests");
                    const tests = await res.json();
                    appData.tests = tests.map(t => {
                        let status = "upcoming";
                        const now = new Date();
                        const start = t.startDate ? new Date(t.startDate) : null;
                        const end = t.endDate ? new Date(t.endDate) : null;
                        if ((t.submissions || 0) > 0) status = "completed";
                        else if (start && end && now >= start && now <= end) status = "active";
                        return {
                            id: t._id,
                            title: t.title,
                            subject: t.subject,
                            class: t.className,
                            duration: t.duration,
                            startDate: t.startDate,
                            endDate: t.endDate,
                            date: (t.startDate && t.endDate) ? `${new Date(t.startDate).toLocaleString("en-IN")} → ${new Date(t.endDate).toLocaleString("en-IN")}` : "Not Set",
                            totalStudents: t.totalStudents || 0,
                            submissions: t.submissions || 0,
                            averageScore: t.averageScore || 0,
                            status: status,
                            questions: t.questions || []
                        };
                    });

                    // Update dashboard stats
                    const activeEl = document.getElementById('activeTestsCount');
                    if (activeEl) activeEl.innerText = appData.tests.length;

                    let totalScore = 0, totalTime = 0, totalSubmissions = 0;
                    // If submissionsData exists, use it; otherwise fallback to test.submissions as count
                    appData.tests.forEach(t => {
                        if (t.submissionsData && Array.isArray(t.submissionsData)) {
                            t.submissionsData.forEach(s => {
                                totalScore += s.score || 0;
                                totalTime += s.timeTaken || 0;
                                totalSubmissions++;
                            });
                        }
                    });
                    let avgScore = totalSubmissions ? (totalScore / totalSubmissions).toFixed(1) : 0;
                    let avgTime = totalSubmissions ? (totalTime / totalSubmissions / 60).toFixed(1) : 0;
                    const avgScoreEl = document.getElementById('averageScore');
                    const avgTimeEl = document.getElementById('averageTime');
                    if (avgScoreEl) avgScoreEl.innerText = avgScore + '%';
                    if (avgTimeEl) avgTimeEl.innerText = avgTime;

                    initializeTestsPage();
                } catch (e) {
                    console.error("Failed to load tests", e);
                }
            }
window.editTest = function (testId) {
                const test = appData.tests.find(t => t.id === testId);
                if (!test) return;
                editingTestId = testId;
                const titleEl = document.getElementById('testTitle');
                if (titleEl) titleEl.value = test.title || '';
                const subjectEl = document.getElementById('testSubject');
                if (subjectEl) subjectEl.value = test.subject || '';
                const classEl = document.getElementById('testClass');
                if (classEl) classEl.value = test.class || '';
                const durEl = document.getElementById('testDuration');
                if (durEl) durEl.value = test.duration || 60;
                const startEl = document.getElementById('testStartDate');
                if (startEl) startEl.value = test.startDate ? test.startDate.substring(0, 16) : '';
                const endEl = document.getElementById('testEndDate');
                if (endEl) endEl.value = test.endDate ? test.endDate.substring(0, 16) : '';
                testQuestions = test.questions ? [...test.questions] : [];
                renderQuestionList();
                openModal('createTestModal');
                const submitBtn = document.getElementById('createTestSubmitBtn');
                if (submitBtn) submitBtn.textContent = 'Update Test';
            };

            window.viewTestResults = function (testId) {
                console.log("Opening analytics for test:", testId);
                navigateTo('analytics');
            };

            function renderQuestionList() {
                const qList = document.getElementById('questionList');
                if (!qList) return;
                qList.innerHTML = '';
                testQuestions.forEach((q, idx) => {
                    const item = document.createElement('div');
                    item.className = 'question-item';
                    item.innerHTML = `
                        <div class="question-header">
                            <div class="question-title">
                                <span>Q${idx + 1}: ${q.text.substring(0, 50)}${q.text.length > 50 ? '...' : ''}</span>
                                <span class="question-type">${q.type ? q.type.replace('-', ' ').toUpperCase() : ''}</span>
                                <span class="question-points">Marks: ${q.points}</span>
                            </div>
                            <div class="question-actions">
                                <button class="btn btn-outline btn-sm" onclick="editQuestion(${idx})"><i class="fas fa-edit"></i></button>
                                <button class="btn btn-outline btn-sm" onclick="removeQuestion(${idx})"><i class="fas fa-trash"></i></button>
                            </div>
                        </div>
                        <div class="question-content">${q.text}</div>
                        ${q.options ? `<div class="question-options">${q.options.map((opt, i) => `<div class="question-option ${i === q.correctAnswer ? 'correct-option' : ''}">${String.fromCharCode(65 + i)}. ${opt} ${i === q.correctAnswer ? ' <i class=\"fas fa-check\"></i>' : ''}</div>`).join('')}</div>` : ''}
                    `;
                    qList.appendChild(item);
                });
            }

            window.addQuestion = function () {
                const type = document.getElementById('questionType')?.value;
                const text = document.getElementById('questionText')?.value.trim();
                const points = parseInt(document.getElementById('questionPoints')?.value) || 1;
                if (!text) { showToast('Error', 'Please enter question text', 'error'); return; }
                let question = { type, text, points };
                if (type === 'multiple-choice' || type === 'true-false') {
                    const options = [];
                    document.querySelectorAll('#optionsList input[type="text"]').forEach(inp => { if (inp.value.trim()) options.push(inp.value.trim()); });
                    if (options.length < 2) { showToast('Error', 'Please add at least 2 options', 'error'); return; }
                    const correct = document.querySelector('input[name="correctOption"]:checked');
                    if (!correct) { showToast('Error', 'Select correct answer', 'error'); return; }
                    question.options = options;
                    question.correctAnswer = parseInt(correct.value);
                }
                if (editingQuestionIndex !== null) {
                    testQuestions[editingQuestionIndex] = question;
                    editingQuestionIndex = null;
                    const addBtn = document.getElementById('addQuestionBtn');
                    if (addBtn) addBtn.innerText = 'Add Question';
                } else {
                    testQuestions.push(question);
                }
                renderQuestionList();
                const qText = document.getElementById('questionText');
                if (qText) qText.value = '';
                document.querySelectorAll('#optionsList input[type="text"]').forEach(i => i.value = '');
            };

            window.editQuestion = function (index) {
                const q = testQuestions[index];
                if (!q) return;
                editingQuestionIndex = index;
                const typeEl = document.getElementById('questionType');
                if (typeEl) typeEl.value = q.type;
                const textEl = document.getElementById('questionText');
                if (textEl) textEl.value = q.text;
                const pointsEl = document.getElementById('questionPoints');
                if (pointsEl) pointsEl.value = q.points;
                if (q.options) {
                    const optsList = document.getElementById('optionsList');
                    if (optsList) {
                        optsList.innerHTML = '';
                        q.options.forEach((opt, i) => {
                            const div = document.createElement('div');
                            div.className = 'form-group';
                            div.innerHTML = `<div class="question-option"><input type="radio" name="correctOption" value="${i}" ${i === q.correctAnswer ? 'checked' : ''}><input type="text" class="form-control" value="${opt}"></div>`;
                            optsList.appendChild(div);
                        });
                    }
                }
                const addBtn = document.getElementById('addQuestionBtn');
                if (addBtn) addBtn.innerText = 'Update Question';
            };

            window.removeQuestion = function (index) {
                testQuestions.splice(index, 1);
                renderQuestionList();
                showToast('Question Removed', 'Question removed', 'success');
            };

            async function createNewTest() {
                if (testQuestions.length === 0) { showToast('Error', 'Please add at least one question', 'error'); return; }
                const data = {
                    title: document.getElementById('testTitle')?.value,
                    subject: document.getElementById('testSubject')?.value,
                    className: document.getElementById('testClass')?.value,
                    duration: document.getElementById('testDuration')?.value,
                    totalMarks: document.getElementById('testTotalMarks')?.value,
                    instructions: document.getElementById('testInstructions')?.value,
                    startDate: document.getElementById('testStartDate')?.value,
                    endDate: document.getElementById('testEndDate')?.value,
                    questions: testQuestions
                };
                let url = "/teacher/create-test";
                let method = "POST";
                if (editingTestId) { url = "/teacher/update-test/" + editingTestId; method = "PUT"; }
                try {
                    const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
                    const result = await res.json();
                    if (result.success) {
                        closeModal('createTestModal');
                        showToast("Success", editingTestId ? "Test Updated" : "Test Created", "success");
                        editingTestId = null;
                        testQuestions = [];
                        await loadTeacherTests();
                    } else {
                        showToast("Error", "Operation Failed", "error");
                    }
                } catch (e) { showToast("Error", "Network error", "error"); }
            }

            // -------------------- STUDENTS PAGE --------------------
            function initializeStudentsPage() {
                const tbody = document.getElementById('studentsTableBody');
                if (!tbody) return;
                tbody.innerHTML = '';
                appData.students.forEach(student => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td><div class="student-cell"><div class="student-avatar">${(student.name || '').split(' ').map(n => n[0]).join('')}</div><div class="student-details"><h4>${student.name || ''}</h4><p>${student.email || ''}</p></div></div></td>
                        <td>${getStudentClass(student) || '-'}</td>
                        <td>${student.roll || ''}</td>
                        <td>0%</td>
                        <td>0</td>
                        <td><span class="status-badge status-active">Active</span></td>
                        <td><div class="action-buttons">
                            <button class="btn-icon view" onclick="viewStudent('${student._id}')"><i class="fas fa-eye"></i></button>
                            <button class="btn-icon message" onclick="messageStudent('${student._id}')"><i class="fas fa-envelope"></i></button>
                            <button class="btn-icon edit" onclick="editStudent('${student._id}')"><i class="fas fa-edit"></i></button>
                            <button class="btn-icon delete" onclick="deleteStudent('${student._id}')"><i class="fas fa-trash"></i></button>
                        </div></td>
                    `;
                    tbody.appendChild(row);
                });

                const addBtn = document.getElementById('addNewStudentBtn');
                if (addBtn) addBtn.addEventListener('click', () => openModal('addStudentModal'));
                const filterBtn = document.getElementById('filterStudentsBtn');
                if (filterBtn) filterBtn.addEventListener('click', () => showToast('Filter Students', 'Filter functionality coming soon!', 'info'));
                const searchInput = document.getElementById('searchStudents');
                if (searchInput) {
                    searchInput.addEventListener('input', function (e) {
                        const term = e.target.value.toLowerCase();
                        const rows = tbody.querySelectorAll('tr');
                        rows.forEach(r => { r.style.display = r.textContent.toLowerCase().includes(term) ? '' : 'none'; });
                    });
                }
            }

            window.viewStudent = function (id) {
                const student = appData.students.find(s => s._id === id);
                if (!student) return;
                const body = document.getElementById('viewStudentBody');
                if (body) body.innerHTML = `<p><b>Name:</b> ${student.name}</p><p><b>Email:</b> ${student.email}</p><p><b>Class:</b> ${getStudentClass(student) || '-'}</p><p><b>Roll:</b> ${student.roll}</p><p><b>Parent Contact:</b> ${student.parentContact || "N/A"}</p>`;
                openModal('viewStudentModal');
            };
            window.messageStudent = function (id) {
                const student = appData.students.find(s => s._id === id);
                if (student) { navigateTo('messages'); setTimeout(() => loadRealMessages(student._id), 100); }
            };
            window.editStudent = function (id) {
                const student = appData.students.find(s => s._id === id);
                if (!student) return;
                editingStudentId = id;
                const parts = student.name.split(' ');
                const fName = document.getElementById('studentFirstName');
                if (fName) fName.value = parts[0] || '';
                const lName = document.getElementById('studentLastName');
                if (lName) lName.value = parts.slice(1).join(' ');
                const email = document.getElementById('studentEmail');
                if (email) email.value = student.email || '';
                const cls = document.getElementById('studentClass');
                if (cls) cls.value = getStudentClass(student) || '';
                const roll = document.getElementById('studentRoll');
                if (roll) roll.value = student.roll || '';
                const parent = document.getElementById('studentParentContact');
                if (parent) parent.value = student.parentContact || '';
                openModal('addStudentModal');
                const submitBtn = document.getElementById('addStudentSubmitBtn');
                if (submitBtn) submitBtn.textContent = 'Update Student';
            };
            window.deleteStudent = async function (id) {
                if (!confirm("Are you sure?")) return;
                try {
                    const res = await fetch("/teacher/delete-student/" + id, { method: "DELETE", credentials: "include" });
                    const result = await res.json();
                    if (result.success) { showToast("Deleted", "Student removed", "success"); location.reload(); }
                    else showToast("Error", "Delete failed", "error");
                } catch (e) { showToast("Error", "Network error", "error"); }
            };
            async function addNewStudent() {
                const data = {
                    name: (document.getElementById('studentFirstName')?.value || '') + ' ' + (document.getElementById('studentLastName')?.value || ''),
                    email: document.getElementById('studentEmail')?.value,
                    class: document.getElementById('studentClass')?.value,
                    roll: document.getElementById('studentRoll')?.value,
                    parentContact: document.getElementById('studentParentContact')?.value
                };
                let url = "/teacher/add-student";
                let method = "POST";
                if (editingStudentId) { url = "/teacher/update-student/" + editingStudentId; method = "PUT"; }
                try {
                    const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(data), credentials: "include" });
                    const result = await res.json();
                    if (result.success) { showToast("Success", editingStudentId ? "Student Updated" : "Student Added", "success"); location.reload(); }
                    else showToast("Error", "Operation Failed", "error");
                } catch (e) { showToast("Error", "Network error", "error"); }
            }

            // -------------------- MESSAGES PAGE --------------------
            async function initializeMessagesPage() {
                try {
                    const res = await fetch("/teacher/conversations", { credentials: "include" });
                    const convs = await res.json();
                    const list = document.getElementById('conversationsList');
                    if (!list) return;
                    list.innerHTML = '';
                    convs.forEach(c => {
                        const item = document.createElement('div');
                        item.className = "conversation-item";
                        item.onclick = () => loadRealMessages(c._id);
                        item.innerHTML = `<div class="conversation-avatar">${(c._id.name || '').split(' ').map(n => n[0]).join('')}</div><div class="conversation-info"><h4>${c._id.name}</h4><p>${c.lastMessage}</p></div><button onclick="deleteConversation('${c._id._id}')">🗑</button>`;
                        list.appendChild(item);
                    });
                } catch (e) { console.error("Failed to load conversations", e); }
            }
            async function loadRealMessages(studentId) {
                try {
                    const res = await fetch("/teacher/messages/" + studentId);
                    const msgs = await res.json();
                    const chatDiv = document.getElementById('chatMessages');
                    if (!chatDiv) return;
                    chatDiv.innerHTML = '';
                    msgs.forEach(msg => {
                        const div = document.createElement('div');
                        div.className = "message " + msg.sender;
                        div.innerHTML = `<div class="message-content">${msg.text}</div>`;
                        chatDiv.appendChild(div);
                    });
                } catch (e) { console.error(e); }
            }
            async function sendMessage() {
                const input = document.getElementById('messageInput');
                if (!input) return;
                const text = input.value.trim();
                if (!text || !currentConversation) return;
                try {
                    await fetch("/teacher/send-message", {
                        method: "POST", headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ studentId: currentConversation.studentId, text: text }),
                        credentials: "include"
                    });
                    input.value = "";
                    loadRealMessages(currentConversation.studentId);
                } catch (e) { console.error(e); }
            }

            // -------------------- ANALYTICS PAGE --------------------
            function initializeAnalyticsPage() {
                loadSubjectsForAnalytics();
                initializeAnalyticsCharts();
                setupAnalyticsEventListeners();
                applyAnalyticsFilters();
            }
            function initializeAnalyticsCharts() {
                if (scoreTrendChart) scoreTrendChart.destroy();
                if (completionChart) completionChart.destroy();
                if (distributionChart) distributionChart.destroy();
                if (topicsChart) topicsChart.destroy();

                const scoreCtx = document.getElementById('scoreTrendChart')?.getContext('2d');
                if (scoreCtx) {
                    scoreTrendChart = new Chart(scoreCtx, {
                        type: 'line',
                        data: { labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], datasets: [{ label: 'Average Score', data: appData.analyticsData.scoreTrend, borderColor: 'var(--accent-color)', backgroundColor: 'rgba(79,195,161,0.1)', borderWidth: 3, fill: true, tension: 0.4 }] },
                        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: false, min: 80, max: 100 } } }
                    });
                }
                const compCtx = document.getElementById('completionChart')?.getContext('2d');
                if (compCtx) {
                    completionChart = new Chart(compCtx, {
                        type: 'bar',
                        data: { labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], datasets: [{ label: 'Completion Rate', data: appData.analyticsData.completionRate, backgroundColor: 'var(--primary-color)', borderColor: 'var(--secondary-color)', borderWidth: 1 }] },
                        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: false, min: 85, max: 100 } } }
                    });
                }
                const distCtx = document.getElementById('distributionChart')?.getContext('2d');
                if (distCtx) {
                    distributionChart = new Chart(distCtx, {
                        type: 'doughnut',
                        data: { labels: ['Excellent (90-100)', 'Good (80-89)', 'Average (70-79)', 'Below Avg (60-69)', 'Poor (50-59)', 'Fail (<50)'], datasets: [{ data: appData.analyticsData.distribution, backgroundColor: ['var(--success-color)', 'var(--accent-color)', 'var(--warning-color)', '#ff9966', '#ff6666', 'var(--danger-color)'], borderWidth: 2, borderColor: 'white' }] },
                        options: { responsive: true, maintainAspectRatio: false, cutout: '70%', plugins: { legend: { position: 'bottom', labels: { padding: 20, usePointStyle: true } } } }
                    });
                }
                const topicsCtx = document.getElementById('topicsChart')?.getContext('2d');
                if (topicsCtx) {
                    topicsChart = new Chart(topicsCtx, {
                        type: 'radar',
                        data: { labels: Object.keys(appData.analyticsData.topics), datasets: [{ label: 'Average Score by Topic', data: Object.values(appData.analyticsData.topics), backgroundColor: 'rgba(74,111,165,0.2)', borderColor: 'var(--primary-color)', borderWidth: 2, pointBackgroundColor: 'var(--primary-color)', pointBorderColor: 'white', pointBorderWidth: 2 }] },
                        options: { responsive: true, maintainAspectRatio: false, scales: { r: { beginAtZero: false, min: 70, max: 100, ticks: { stepSize: 10 } } } }
                    });
                }
            }
            function setupAnalyticsEventListeners() {
                const applyBtn = document.getElementById('applyFilters');
                if (applyBtn) applyBtn.addEventListener('click', applyAnalyticsFilters);
                const refreshBtn = document.getElementById('refreshRanks');
                if (refreshBtn) refreshBtn.addEventListener('click', function () { showToast('Ranks Refreshed', 'Student rankings updated', 'success'); initializeAnalyticsPage(); });
                const downBtn = document.getElementById('downloadRanks');
                if (downBtn) downBtn.addEventListener('click', function () { showToast('Export Started', 'Exporting to CSV', 'info'); });
            }
            function applyAnalyticsFilters() {
                const timeRange = document.getElementById('timeRange')?.value;
                const subjectFilter = document.getElementById('subjectFilter')?.value;
                showToast('Filters Applied', 'Analytics updated', 'info');
            }
            async function loadSubjectsForAnalytics() {
                try {
                    const res = await fetch("/teacher/my-tests");
                    const tests = await res.json();
                    const subjects = [...new Set(tests.map(t => t.subject))];
                    const select = document.getElementById('subjectFilter');
                    if (select) {
                        select.innerHTML = '<option value="all">All Subjects</option>';
                        subjects.forEach(s => select.innerHTML += `<option value="${s}">${s}</option>`);
                    }
                } catch (e) { console.error(e); }
            }
            async function loadTestRankingCards() {
                try {
                    const res = await fetch("/api/teacher/analytics/tests", { credentials: "include" });
                    const tests = await res.json();
                    const tbody = document.getElementById('rankTableBody');
                    if (!tbody) return;
                    tbody.innerHTML = '';
                    tests.forEach((t, idx) => {
                        tbody.innerHTML += `<tr><td>${idx + 1}</td><td>${t.testName}</td><td>-</td><td>${t.studentsCount} Students</td><td>${t.avgScore || 0}%</td><td>-</td><td><button class="btn btn-outline btn-sm" onclick="openAnalyticsPage('${t.testId}')">Details</button></td></tr>`;
                    });
                } catch (e) { console.error(e); }
            }
            window.openAnalyticsPage = function (testId) { window.location.href = `/teacher/analytics?testId=${testId}`; };

            // -------------------- CALENDAR PAGE (simplified) --------------------
            function initializeCalendarPage() {
                const calEl = document.getElementById('calendar');
                if (!calEl) return;
                if (calendar) calendar.destroy();
                calendar = new FullCalendar.Calendar(calEl, {
                    initialView: 'dayGridMonth',
                    headerToolbar: { left: 'prev,next today', center: 'title', right: 'dayGridMonth,timeGridWeek,timeGridDay' },
                    events: appData.calendarEvents,
                    eventClick: info => showToast('Event Details', `${info.event.title} - ${info.event.extendedProps.description || ''}`, 'info'),
                    eventColor: '#4a6fa5',
                    height: 'auto'
                });
                calendar.render();
            }

            // -------------------- SETTINGS PAGE --------------------
            function initializeSettingsPage() {
                document.querySelectorAll('.settings-tab').forEach(tab => {
                    tab.addEventListener('click', function () {
                        document.querySelectorAll('.settings-tab').forEach(t => t.classList.remove('active'));
                        document.querySelectorAll('.settings-section').forEach(s => s.style.display = 'none');
                        this.classList.add('active');
                        const tabId = this.getAttribute('data-tab');
                        const sec = document.getElementById(tabId + 'Tab');
                        if (sec) sec.style.display = 'block';
                    });
                });
                const saveProfile = document.getElementById('saveProfileBtn');
                if (saveProfile) {
                    saveProfile.addEventListener('click', async () => {
                        const fullName = (document.getElementById('firstName')?.value || '') + ' ' + (document.getElementById('lastName')?.value || '');
                        const data = {
                            name: fullName.trim(),
                            email: document.getElementById('email')?.value,
                            subject: document.getElementById('subject')?.value,
                            phone: document.getElementById('phone')?.value,
                            bio: document.getElementById('bio')?.value
                        };
                        try {
                            const res = await fetch("/teacher/update-profile", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
                            const result = await res.json();
                            if (result.success) showToast("Saved", "Profile Updated", "success");
                            else showToast("Error", "Update Failed", "error");
                        } catch (e) { showToast("Error", "Network error", "error"); }
                    });
                }
                const updateAcc = document.getElementById('updateAccountBtn');
                if (updateAcc) updateAcc.addEventListener('click', () => showToast('Account Updated', 'Account settings updated', 'success'));
            }

            // -------------------- NAVIGATION --------------------
            function navigateTo(page) {
                // Hide all pages
                document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
                const target = document.getElementById(page + 'Page');
                if (target) target.classList.add('active');

                // Update sidebar active class
                document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-item a[data-page="${page}"]`);
                if (activeLink) activeLink.parentElement.classList.add('active');

                // Update page title if element exists
                const titleEl = document.getElementById('pageTitle');
                if (titleEl) {
                    const titles = { dashboard: 'Dashboard', tests: 'Tests & Assignments', students: 'Students Management', messages: 'Messages', analytics: 'Analytics & Reports', calendar: 'Create Birthday Website', settings: 'Settings' };
                    titleEl.textContent = titles[page] || page;
                }
                currentPage = page;

                // Close mobile sidebar
                closeMobileSidebar();

                // Page-specific initialization
                if (page === 'analytics') {
                    loadTestRankingCards();
                    initializeAnalyticsPage();
                }
                if (page === 'dashboard') { initializeDashboardPage(); updateDashboardCounts(); }
                if (page === 'tests') { initializeTestsPage(); loadTeacherTests(); }
                if (page === 'students') {
                    const filter = document.getElementById('classFilterSelect');
                    if (filter) filter.value = "All Classes";
                    appData.students = [...appData.allStudents];
                    initializeStudentsPage();
                    loadClasses();
                }
                if (page === 'messages') initializeMessagesPage();
                if (page === 'settings') initializeSettingsPage();
                if (page === 'calendar') initializeCalendarPage();

                updateMessageBadge();
                if (page !== 'dashboard') showToast('Page Loaded', `Navigated to ${page}`, 'info');
            }

            // Mobile sidebar functions
            function closeMobileSidebar() {
                const sidebar = document.getElementById('sidebar');
                if (sidebar) sidebar.classList.remove('mobile-show');
                const overlay = document.getElementById('sidebarOverlay');
                if (overlay) overlay.classList.remove('active');
            }
            function toggleMobileSidebar() {
                const sidebar = document.getElementById('sidebar');
                if (sidebar) sidebar.classList.toggle('mobile-show');
                const overlay = document.getElementById('sidebarOverlay');
                if (overlay) overlay.classList.toggle('active');
            }

            // Toggle sidebar (desktop)
            function toggleSidebar() {
                const sidebar = document.getElementById('sidebar');
                const main = document.getElementById('mainContent');
                const icon = document.querySelector('#toggleSidebar i');
                if (sidebar) sidebar.classList.toggle('collapsed');
                if (main) main.classList.toggle('expanded');
                if (icon) {
                    if (sidebar?.classList.contains('collapsed')) icon.className = 'fas fa-chevron-right';
                    else icon.className = 'fas fa-chevron-left';
                }
            }

            // -------------------- CLASS MANAGEMENT --------------------
            async function loadClasses() {
                try {
                    const res = await fetch("/teacher/classes", { credentials: "include" });
                    const classes = await res.json();
                    const studentClass = document.getElementById('studentClass');
                    const classFilter = document.getElementById('classFilterSelect');
                    const dropdown = document.getElementById('classDropdownMenu');
                    if (studentClass) studentClass.innerHTML = '';
                    if (classFilter) classFilter.innerHTML = '<option>All Classes</option>';
                    if (dropdown) dropdown.innerHTML = '';
                    classes.forEach(c => {
                        if (studentClass) studentClass.innerHTML += `<option value="${c.name}">${c.name}</option>`;
                        if (classFilter) classFilter.innerHTML += `<option>${c.name}</option>`;
                        if (dropdown) dropdown.innerHTML += `<div class="class-dropdown-item"><span>${c.name}</span><div><button onclick="editClass('${c._id}','${c.name}')">✏️</button><button onclick="deleteClass('${c._id}')">🗑️</button></div></div>`;
                    });
                } catch (e) { console.error(e); }
            }
            window.toggleClassDropdown = function () {
                const menu = document.getElementById('classDropdownMenu');
                if (menu) menu.classList.toggle('active');
            };
            window.addEventListener('click', function (e) {
                if (!e.target.closest('.manage-class-dropdown')) {
                    const menu = document.getElementById('classDropdownMenu');
                    if (menu) menu.classList.remove('active');
                }
            });
            window.editClass = async function (id, oldName) {
                const newName = prompt("Enter new class name", oldName);
                if (!newName) return;
                try {
                    const res = await fetch("/teacher/update-class/" + id, { method: "PUT", headers: { "Content-Type": "application/json" }, credentials: "include", body: JSON.stringify({ name: newName }) });
                    const result = await res.json();
                    if (result.success) { showToast("Updated", "Class name updated", "success"); loadClasses(); }
                    else showToast("Error", "Update failed", "error");
                } catch (e) { showToast("Error", "Network error", "error"); }
            };
            window.createClass = async function () {
                const name = document.getElementById('classNameInput')?.value.trim();
                if (!name) { showToast("Error", "Enter class name", "error"); return; }
                try {
                    const res = await fetch("/teacher/create-class", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "include", body: JSON.stringify({ name: name }) });
                    const result = await res.json();
                    if (result.success) {
                        showToast("Success", "Class Created", "success");
                        closeModal('createClassModal');
                        const inp = document.getElementById('classNameInput');
                        if (inp) inp.value = '';
                        loadClasses();
                    } else showToast("Error", "Create failed", "error");
                } catch (e) { showToast("Error", "Network error", "error"); }
            };
            window.deleteClass = async function (id) {
                if (!confirm("Delete this class?")) return;
                try {
                    const res = await fetch("/teacher/delete-class/" + id, { method: "DELETE", credentials: "include" });
                    const result = await res.json();
                    if (result.success) { showToast("Deleted", "Class removed", "success"); loadClasses(); }
                    else showToast("Error", "Delete failed", "error");
                } catch (e) { showToast("Error", "Network error", "error"); }
            };

            // -------------------- SEND TEST / QR --------------------
            window.sendTest = function (testId) {
                navigateTo('students');
                setTimeout(() => {
                    fetch("/teacher/send-test-link/" + testId).then(res => res.json()).then(data => {
                        if (!data.success) return alert("Error generating link");
                        const box = document.getElementById('sendTestBox');
                        if (box) box.style.display = 'block';
                        const linkInp = document.getElementById('testLink');
                        if (linkInp) linkInp.value = data.link;
                        const qrCanvas = document.getElementById('qrCanvas');
                        if (qrCanvas) QRCode.toCanvas(qrCanvas, data.link, { width: 200 });
                    }).catch(console.error);
                }, 300);
            };
            window.copyTestLink = function () {
                const inp = document.getElementById('testLink');
                if (!inp) return;
                inp.select();
                document.execCommand('copy');
                alert("Link Copied!");
            };
            window.closeSendBox = function () {
                const box = document.getElementById('sendTestBox');
                if (box) box.style.display = 'none';
            };

            // -------------------- DELETE TEST --------------------
            window.deleteTest = async function (testId) {
                if (!confirm("Delete this test?")) return;
                try {
                    const res = await fetch("/teacher/delete-test/" + testId, { method: "DELETE", credentials: "include" });
                    const result = await res.json();
                    if (result.success) { showToast("Deleted", "Test removed", "success"); loadTeacherTests(); }
                    else showToast("Error", "Delete failed", "error");
                } catch (e) { showToast("Error", "Network error", "error"); }
            };

            // -------------------- GLOBAL SEARCH (simplified) --------------------
            function setupGlobalSearch() {
                const searchInput = document.getElementById('globalSearch');
                if (!searchInput) return;
                searchInput.addEventListener('input', function () {
                    const term = this.value.toLowerCase().trim();
                    if (term === "") {
                        if (currentPage === 'students') initializeStudentsPage();
                        if (currentPage === 'tests') initializeTestsPage();
                        if (currentPage === 'messages') initializeMessagesPage();
                        return;
                    }
                    if (currentPage === 'students') {
                        const rows = document.querySelectorAll('#studentsTableBody tr');
                        rows.forEach(r => { r.style.display = r.textContent.toLowerCase().includes(term) ? '' : 'none'; });
                    }
                    if (currentPage === 'tests') {
                        const cards = document.querySelectorAll('.test-card');
                        cards.forEach(c => { c.style.display = c.textContent.toLowerCase().includes(term) ? '' : 'none'; });
                    }
                    if (currentPage === 'messages') {
                        const items = document.querySelectorAll('.conversation-item');
                        items.forEach(i => { i.style.display = i.textContent.toLowerCase().includes(term) ? '' : 'none'; });
                    }
                    if (currentPage === 'dashboard') {
                        const els = document.querySelectorAll('.dashboard-card, .stat-card, .activity-item');
                        els.forEach(el => { el.style.display = el.textContent.toLowerCase().includes(term) ? '' : 'none'; });
                    }
                });
            }

             // -------------------- BIRTHDAY GIFT FORM --------------------
             const BASE_URL = "http://localhost:9191";
            document.addEventListener('submit', async function (e) {
                if (e.target.id === 'giftForm') {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    try {
                       const res = await fetch(BASE_URL + "/create-gift", {
                        method: "POST",
                         body: formData
                         });
                        const data = await res.json();
                        console.log(data);
                        if (!data.success) { alert("Gift create failed"); return; }
                        const link = BASE_URL + data.url;
                        showGiftPopup(link);
                    } catch (err) { alert("Error"); }
                }
            });
            window.showGiftPopup = function (link) {
                const popup = document.getElementById('giftPopup');
                if (popup) {
                    const inp = document.getElementById('popupLink');
                    if (inp) inp.value = link;
                    popup.style.display = 'flex';
                }
            };
            window.closeGiftPopup = function () {
                const popup = document.getElementById('giftPopup');
                if (popup) popup.style.display = 'none';
            };
            window.copyPopupLink = function () {
                const inp = document.getElementById('popupLink');
                if (!inp) return;
                navigator.clipboard.writeText(inp.value).then(() => alert("Link Copied!"));
            };
            window.copyLink = function () {
                const inp = document.getElementById('generatedLink');
                if (!inp) return;
                inp.select();
                navigator.clipboard.writeText(inp.value).then(() => alert("Link Copied Successfully!"));
            };
            window.logout = function () { window.location.href = "index.html"; };

            // -------------------- CLASS FILTER CHANGE --------------------
            const classFilter = document.getElementById('classFilterSelect');
            if (classFilter) {
                classFilter.addEventListener('change', function () {
                    const selected = this.value;
                    if (selected === "All Classes") appData.students = [...appData.allStudents];
                    else appData.students = appData.allStudents.filter(s => getStudentClass(s) === selected);
                    initializeStudentsPage();
                });
            }

            // -------------------- DOMContentLoaded: ATTACH ALL EVENT LISTENERS --------------------
            document.addEventListener('DOMContentLoaded', async function () {
                // Navigation clicks
                document.querySelectorAll('.nav-item a[data-page]').forEach(link => {
                    link.addEventListener('click', function (e) {
                        e.preventDefault();
                        const page = this.getAttribute('data-page');
                        if (page) navigateTo(page);
                    });
                });

                // Sidebar toggle
                const toggleBtn = document.getElementById('toggleSidebar');
                if (toggleBtn) toggleBtn.addEventListener('click', toggleSidebar);

                // Mobile menu
                const mobileBtn = document.getElementById('mobileMenuBtn');
                if (mobileBtn) mobileBtn.addEventListener('click', toggleMobileSidebar);
                const overlay = document.getElementById('sidebarOverlay');
                if (overlay) overlay.addEventListener('click', closeMobileSidebar);

                // Global search
                setupGlobalSearch();

                // Notification & help (dummy)
                const notif = document.getElementById('notifications');
                if (notif) notif.addEventListener('click', () => showToast('Notifications', 'You have 3 unread notifications', 'info'));
                const help = document.getElementById('helpBtn');
                if (help) help.addEventListener('click', () => showToast('Help Center', 'Opening help', 'info'));

                // Create test submit
                const testSubmit = document.getElementById('createTestSubmitBtn');
                if (testSubmit) testSubmit.addEventListener('click', createNewTest);

                // Add student submit
                const studentSubmit = document.getElementById('addStudentSubmitBtn');
                if (studentSubmit) studentSubmit.addEventListener('click', addNewStudent);

                // Add question
                const addQ = document.getElementById('addQuestionBtn');
                if (addQ) addQ.addEventListener('click', addQuestion);

                // Add option
                const addOpt = document.getElementById('addOptionBtn');
                if (addOpt) {
                    addOpt.addEventListener('click', function () {
                        const list = document.getElementById('optionsList');
                        if (!list) return;
                        const count = list.children.length;
                        if (count >= 6) { showToast('Maximum Options', 'Only up to 6 options', 'error'); return; }
                        const div = document.createElement('div');
                        div.className = 'form-group';
                        div.style.marginBottom = '10px';
                        div.innerHTML = `<div class="question-option"><input type="radio" name="correctOption" value="${count}"><input type="text" class="form-control" placeholder="Option ${String.fromCharCode(65 + count)}" id="option${count}"></div>`;
                        list.appendChild(div);
                    });
                }

                // Question type change
                const qType = document.getElementById('questionType');
                if (qType) {
                    qType.addEventListener('change', function () {
                        const type = this.value;
                        const optContainer = document.getElementById('optionsContainer');
                        if (!optContainer) return;
                        if (type === 'multiple-choice' || type === 'true-false') {
                            optContainer.style.display = 'block';
                            const optsList = document.getElementById('optionsList');
                            if (type === 'true-false') {
                                optsList.innerHTML = `
                                    <div class="form-group" style="margin-bottom:10px;"><div class="question-option"><input type="radio" name="correctOption" value="0" checked><input type="text" class="form-control" value="True" id="option0" readonly></div></div>
                                    <div class="form-group" style="margin-bottom:10px;"><div class="question-option"><input type="radio" name="correctOption" value="1"><input type="text" class="form-control" value="False" id="option1" readonly></div></div>
                                `;
                                const addBtn = document.getElementById('addOptionBtn');
                                if (addBtn) addBtn.style.display = 'none';
                            } else {
                                optsList.innerHTML = `
                                    <div class="form-group" style="margin-bottom:10px;"><div class="question-option"><input type="radio" name="correctOption" value="0" checked><input type="text" class="form-control" placeholder="Option A" id="option0"></div></div>
                                    <div class="form-group" style="margin-bottom:10px;"><div class="question-option"><input type="radio" name="correctOption" value="1"><input type="text" class="form-control" placeholder="Option B" id="option1"></div></div>
                                `;
                                const addBtn = document.getElementById('addOptionBtn');
                                if (addBtn) addBtn.style.display = 'block';
                            }
                        } else {
                            optContainer.style.display = 'none';
                        }
                    });
                }

                // Initial data load
                await loadTeacherTests();
                await loadClasses();
                initializeDashboardPage();
                updateMessageBadge();
                updateDashboardCounts();

                // Clear search if present
                const globalSearch = document.getElementById('globalSearch');
                if (globalSearch) globalSearch.value = '';

                // Welcome toast
                setTimeout(() => {
                    showToast('Welcome!', `Welcome back, ${appData.currentUser.name}!`, 'success');
                }, 1000);
            });

            // Expose functions needed globally (for onclick attributes)
            window.navigateTo = navigateTo;
            window.showToast = showToast;
            window.openAllStudents = function () {
                navigateTo('students');
                const filter = document.getElementById('classFilterSelect');
                if (filter) filter.value = "All Classes";
                appData.students = [...appData.allStudents];
                initializeStudentsPage();
            };
            // Also expose other functions that might be called from HTML onclick
            window.viewStudent = viewStudent;
            window.messageStudent = messageStudent;
            window.editStudent = editStudent;
            window.deleteStudent = deleteStudent;
            window.editClass = editClass;
            window.deleteClass = deleteClass;
            window.createClass = createClass;
            window.toggleClassDropdown = toggleClassDropdown;
            window.copyTestLink = copyTestLink;
            window.closeSendBox = closeSendBox;
            window.sendTest = sendTest;
            window.deleteTest = deleteTest;
            window.editTest = editTest;
            window.viewTestResults = viewTestResults;
            window.addQuestion = addQuestion;
            window.editQuestion = editQuestion;
            window.removeQuestion = removeQuestion;
            window.logout = logout;
            window.copyLink = copyLink;
            window.copyPopupLink = copyPopupLink;
            window.closeGiftPopup = closeGiftPopup;
            window.showGiftPopup = showGiftPopup;
            // For messages
            window.loadRealMessages = loadRealMessages;
            window.sendMessage = sendMessage;
            // For analytics
            window.openAnalyticsPage = openAnalyticsPage;

            // For message delete (dummy)
            window.deleteConversation = function (id) { showToast('Delete', 'Conversation deleted (demo)', 'info'); };
        })();

        function navigateTo(pageName) {
    // sab page hide karo
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });

    // target page show karo
    const targetPage = document.getElementById(pageName + 'Page');
    if (targetPage) {
        targetPage.classList.add('active');
    }
}
document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const page = this.getAttribute('data-page');
        navigateTo(page);
    });
});
document.getElementById("scheduleClassBtn").addEventListener("click", function(e){
    e.preventDefault();
    navigateTo("calendar");
});

// Birthday Website Functions
document.addEventListener("submit", async function (e) {
    if (e.target.id === "giftForm") {
        e.preventDefault();

        const generateBtn = document.getElementById('createBirthdayBtn');
        const originalText = generateBtn.innerHTML;
        
        // Show loading
        generateBtn.innerHTML = '<span class="loading-spinner"></span> Creating...';
        generateBtn.disabled = true;

        try {
            const formData = new FormData(e.target);

            const res = await fetch("/create-gift", {
                method: "POST",
                body: formData
            });

            const data = await res.json();

            if (data.success) {
                const link = window.location.origin + data.url;
                
                // Update modal link
                document.getElementById("modalGeneratedLink").value = link;
                
                // Show modal
                document.getElementById("birthdayModal").classList.add('active');
                
                // Show success toast
                if (typeof showToast === 'function') {
                    showToast('Success', 'Birthday website created!', 'success');
                }
            } else {
                if (typeof showToast === 'function') {
                    showToast('Error', data.message || 'Failed to create website', 'error');
                } else {
                    alert('Failed to create website: ' + (data.message || 'Unknown error'));
                }
            }
        } catch (error) {
            console.error('Error:', error);
            if (typeof showToast === 'function') {
                showToast('Error', 'Something went wrong. Please try again.', 'error');
            } else {
                alert('Something went wrong. Please try again.');
            }
        } finally {
            // Reset button
            generateBtn.innerHTML = originalText;
            generateBtn.disabled = false;
        }
    }
});

// Modal functions
window.copyBirthdayLink = function() {
    const linkInput = document.getElementById('modalGeneratedLink');
    linkInput.select();
    linkInput.setSelectionRange(0, 99999);
    
    try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(linkInput.value).then(() => {
                if (typeof showToast === 'function') {
                    showToast('Copied!', 'Link copied to clipboard', 'success');
                }
            });
        } else {
            document.execCommand('copy');
            if (typeof showToast === 'function') {
                showToast('Copied!', 'Link copied to clipboard', 'success');
            }
        }
    } catch (err) {
        console.error('Copy failed:', err);
    }
};

window.openBirthdayWebsite = function() {
    const link = document.getElementById('modalGeneratedLink').value;
    window.open(link, '_blank');
};

window.closeBirthdayModal = function() {
    document.getElementById('birthdayModal').classList.remove('active');
};

// File name display
document.addEventListener('DOMContentLoaded', function() {
    // Show file names when selected
    const didiImage = document.getElementById('didiImage');
    const jijaImage = document.getElementById('jijaImage');
    const songFile = document.getElementById('songFile');
    
    if (didiImage) {
        didiImage.addEventListener('change', function(e) {
            const fileName = e.target.files[0] ? e.target.files[0].name : 'No file chosen';
            const span = document.querySelector('#didiImageName span');
            if (span) span.textContent = fileName;
        });
    }
    
    if (jijaImage) {
        jijaImage.addEventListener('change', function(e) {
            const fileName = e.target.files[0] ? e.target.files[0].name : 'No file chosen';
            const span = document.querySelector('#jijaImageName span');
            if (span) span.textContent = fileName;
        });
    }
    
    if (songFile) {
        songFile.addEventListener('change', function(e) {
            const fileName = e.target.files[0] ? e.target.files[0].name : 'No file chosen';
            const span = document.querySelector('#songFileName span');
            if (span) span.textContent = fileName;
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        const modal = document.getElementById('birthdayModal');
        if (e.target === modal) {
            closeBirthdayModal();
        }
    });
    // WhatsApp Share Function - YAHAN ADD KARO
window.shareOnWhatsApp = function() {
    const link = document.getElementById('modalGeneratedLink').value;
    
    // Birthday person ka name le lo agar available ho
    let name = '';
    const nameInput = document.querySelector('input[name="didiName"]');
    if (nameInput && nameInput.value) {
        name = nameInput.value + ' ke liye ';
    }
    
    const message = encodeURIComponent(`🎂 ${name}Birthday Website! 🎉\n\n${link}\n\nMade with love ❤️`);
    
    // Detect if mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    // Create WhatsApp URL based on device
    let whatsappUrl;
    if (isMobile) {
        // Mobile device - try to open WhatsApp app
        whatsappUrl = `whatsapp://send?text=${message}`;
    } else {
        // Desktop - open WhatsApp Web
        whatsappUrl = `https://web.whatsapp.com/send?text=${message}`;
    }
    
    // Try to open WhatsApp
    const newWindow = window.open(whatsappUrl, '_blank');
    
    // Fallback if popup blocked or fails
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        const fallbackUrl = `https://wa.me/?text=${message}`;
        window.open(fallbackUrl, '_blank');
    }
    
    // Show toast message
    if (typeof showToast === 'function') {
        showToast('WhatsApp', 'Opening WhatsApp...', 'info');
    }
};
});
function sendTest(testId) {
    const link = window.location.origin + "/test/" + testId;

    // 🔥 link input me daal
    document.getElementById("testLink").value = link;

    // 🔥 QR generate
    QRCode.toCanvas(document.getElementById("qrCanvas"), link, function (error) {
        if (error) {
            console.error(error);
            alert("QR generate failed");
        } else {
            console.log("QR generated");
        }
    });

    // 🔥 box show karo
    document.getElementById("sendTestBox").style.display = "block";
}
document.addEventListener("DOMContentLoaded", function () {

    // CREATE TEST BUTTON
    const createTestBtn = document.getElementById("createTestBtn");
    if (createTestBtn) {
        createTestBtn.addEventListener("click", function (e) {
            e.preventDefault();
            openModal("createTestModal");
        });
    }

    // ADD STUDENT BUTTON ✅
    const addStudentBtn = document.getElementById("addStudentBtn");
    if (addStudentBtn) {
        addStudentBtn.addEventListener("click", function (e) {
            e.preventDefault();
            openModal("addStudentModal");
        });
    }

    // VIEW REPORTS BUTTON
    const viewReportsBtn = document.getElementById("viewReportsBtn");
    if (viewReportsBtn) {
        viewReportsBtn.addEventListener("click", function (e) {
            e.preventDefault();
            navigateTo("analytics");
        });
    }

    // SETTINGS BUTTON
    const settingsBtn = document.getElementById("settingsBtn");
    if (settingsBtn) {
        settingsBtn.addEventListener("click", function (e) {
            e.preventDefault();
            navigateTo("settings");
        });
    }

});