// (function() {
//     const appData = window.QuizData;

//     const STORAGE_LANG = 'codeques_lang';
//     const STORAGE_TOPIC = 'codeques_topic';
//     const STORAGE_DARK = 'codeques_dark';
//     const RATINGS_KEY = 'codeques_ratings';

//     let currentLanguage = localStorage.getItem(STORAGE_LANG) || 'py';
//     let currentTopic = localStorage.getItem(STORAGE_TOPIC) || null;
//     let searchTerm = '';
//     let showAllMode = false;
//     let ratings = JSON.parse(localStorage.getItem(RATINGS_KEY)) || {};

//     const body = document.body;
//     if (localStorage.getItem(STORAGE_DARK) === 'true') {
//         body.classList.add('dark');
//     }

//     const langHeader = document.getElementById('langHeader');
//     const topicsContainer = document.getElementById('topicsContainer');
//     const questionsArea = document.getElementById('questionsArea');
//     const searchInput = document.getElementById('searchInput');
//     const searchBtn = document.getElementById('searchBtn');
//     const darkToggle = document.getElementById('darkToggle');
//     const showAllBtn = document.getElementById('showAllBtn');

//     function updateDarkToggle() {
//         darkToggle.textContent = body.classList.contains('dark') ? '☀️ Light' : '🌙 Dark';
//     }
//     updateDarkToggle();

//     darkToggle.addEventListener('click', () => {
//         body.classList.toggle('dark');
//         localStorage.setItem(STORAGE_DARK, body.classList.contains('dark'));
//         updateDarkToggle();
//     });

//     function renderLanguages() {
//         langHeader.innerHTML = '';
//         appData.languages.forEach(lang => {
//             const btn = document.createElement('button');
//             btn.className = `lang-btn ${currentLanguage === lang.id ? 'active' : ''}`;
//             btn.textContent = lang.name;
//             btn.dataset.lang = lang.id;
//             btn.addEventListener('click', () => {
//                 currentLanguage = lang.id;
//                 currentTopic = null;
//                 showAllMode = false;
//                 searchTerm = '';
//                 searchInput.value = '';
//                 localStorage.setItem(STORAGE_LANG, currentLanguage);
//                 localStorage.removeItem(STORAGE_TOPIC);
//                 renderLanguages();
//                 renderTopics();
//                 renderQuestions();
//             });
//             langHeader.appendChild(btn);
//         });
//     }

//     function renderTopics() {
//         const filteredTopics = appData.topics.filter(t => 
//             t.langId === currentLanguage && 
//             t.name.toLowerCase().includes(searchTerm.toLowerCase())
//         );

//         topicsContainer.innerHTML = '';
//         if (filteredTopics.length === 0) {
//             topicsContainer.innerHTML = '<div class="empty-message">✨ No matching topics</div>';
//             showAllBtn.style.display = 'none';
//             return;
//         }

//         filteredTopics.forEach(topic => {
//             const chip = document.createElement('span');
//             chip.className = `topic-chip ${currentTopic === topic.id && !showAllMode ? 'active' : ''}`;
//             chip.textContent = topic.name;
//             chip.dataset.topicId = topic.id;
//             chip.addEventListener('click', () => {
//                 currentTopic = topic.id;
//                 showAllMode = false;
//                 localStorage.setItem(STORAGE_TOPIC, currentTopic);
//                 renderTopics();
//                 renderQuestions();
//             });
//             topicsContainer.appendChild(chip);
//         });

//         showAllBtn.style.display = showAllMode ? 'none' : 'inline-block';
//     }

//     function renderQuestions() {
//         if (!currentTopic && !showAllMode) {
//             questionsArea.innerHTML = `<div class="empty-message">👈 Select a topic or click "Show all questions"</div>`;
//             return;
//         }

//         if (showAllMode) {
//             const topicIdsForLang = appData.topics.filter(t => t.langId === currentLanguage).map(t => t.id);
//             const questionsToShow = appData.questions.filter(q => topicIdsForLang.includes(q.topicId));
//             const grouped = {};
//             questionsToShow.forEach(q => {
//                 const topic = appData.topics.find(t => t.id === q.topicId);
//                 if (!grouped[topic.id]) grouped[topic.id] = { topicName: topic.name, questions: [] };
//                 grouped[topic.id].questions.push(q);
//             });

//             if (Object.keys(grouped).length === 0) {
//                 questionsArea.innerHTML = `<div class="empty-message">📭 No questions for this language</div>`;
//                 return;
//             }

//             let html = '';
//             for (let topicId in grouped) {
//                 html += `<div class="topic-group"><h3>📘 ${grouped[topicId].topicName}</h3>`;
//                 grouped[topicId].questions.forEach(q => {
//                     html += renderQuestionCard(q);
//                 });
//                 html += '</div>';
//             }
//             questionsArea.innerHTML = html;
//         } else {
//             const questionsToShow = appData.questions.filter(q => q.topicId === currentTopic);
//             if (questionsToShow.length === 0) {
//                 questionsArea.innerHTML = `<div class="empty-message">📭 No questions yet for this topic</div>`;
//                 return;
//             }
//             let html = '';
//             questionsToShow.forEach(q => {
//                 html += renderQuestionCard(q);
//             });
//             questionsArea.innerHTML = html;
//         }

//         attachSolutionEvents();
//         attachRatingEvents();
//         attachCodeRunnerEvents();
//         Prism.highlightAll();
//     }

//     function renderQuestionCard(q) {
//         const rating = ratings[q.id] || { up: 0, down: 0 };
//         const language = getLanguageFromTopic(q.topicId);
//         return `
//             <div class="question-card" data-qid="${q.id}">
//                 <div class="question-text">❓ ${q.question}</div>
//                 <button class="toggle-solution" data-target="sol-${q.id}">🔍 View Solution</button>
//                 <button class="run-code-btn" data-target="run-${q.id}">▶ Run Code</button>
                
//                 <div id="sol-${q.id}" class="solution-panel">
//                     <div class="solution-content">
//                         <div class="math-solution">📐 ${q.mathSolution}</div>
//                         <pre class="code-solution"><code class="language-${getLanguageClass(q)}">${escapeHtml(q.codeSolution)}</code></pre>
//                         <div class="rating">
//                             <button class="rating-btn up" data-qid="${q.id}">👍 <span class="rating-count">${rating.up}</span></button>
//                             <button class="rating-btn down" data-qid="${q.id}">👎 <span class="rating-count">${rating.down}</span></button>
//                         </div>
//                     </div>
//                 </div>

//                 <div id="run-${q.id}" class="code-runner-panel">
//                     <div class="code-runner-content">
//                         <textarea id="editor-${q.id}" class="code-editor" placeholder="Write your code here...">${escapeHtml(q.codeSolution)}</textarea>
//                      <button type="button" class="execute-btn" data-qid="${q.id}" data-lang="${language}">
// ⚡ Execute</button>
//                         <div id="output-${q.id}" class="output-area">Output will appear here...</div>
//                     </div>
//                 </div>
//             </div>
//         `;
//     }

//     function getLanguageFromTopic(topicId) {
//         const topic = appData.topics.find(t => t.id === topicId);
//         return topic ? topic.langId : 'py';
//     }

//     function escapeHtml(unsafe) {
//         return unsafe.replace(/[&<>"]/g, function(m) {
//             if(m === '&') return '&amp;'; 
//             if(m === '<') return '&lt;'; 
//             if(m === '>') return '&gt;'; 
//             if(m === '"') return '&quot;';
//             return m;
//         });
//     }

//     function attachCodeRunnerEvents() {
//         document.querySelectorAll('.run-code-btn').forEach(btn => {
//             btn.removeEventListener('click', toggleCodeRunner);
//             btn.addEventListener('click', toggleCodeRunner);
//         });
//         document.querySelectorAll('.execute-btn').forEach(btn => {
//             btn.removeEventListener('click', executeCode);
//             btn.addEventListener('click', executeCode);
//         });
//     }

//     function toggleCodeRunner(e) {
//         const btn = e.currentTarget;
//         const targetId = btn.dataset.target;
//         const panel = document.getElementById(targetId);
//         panel.classList.toggle('show');
//         btn.textContent = panel.classList.contains('show') ? '▲ Hide Code Runner' : '▶ Run Code';
//     }
//     async function executeCode(e) {
//         e.preventDefault();
    
//         const btn = e.currentTarget;
//         const qid = btn.dataset.qid;
//         const langId = btn.dataset.lang;
//         const code = document.getElementById(`editor-${qid}`).value;
//         const outputDiv = document.getElementById(`output-${qid}`);
    
//         outputDiv.textContent = "⏳ Running...";
//         btn.disabled = true;
    
//         const languageMap = {
//             py: "python",
//             js: "javascript",
//             cpp: "cpp",
//             java: "java"
//         };
    
//         try {
//             const response = await fetch("/execute", {   // ✅ fixed
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                     language: languageMap[langId],
//                     files: [{ content: code }]
//                 })
//             });
    
//             if (!response.ok) {
//                 throw new Error("Server error");
//             }
    
//             const data = await response.json();
    
//             if (data.run?.stderr && data.run.stderr.trim() !== "") {
//                 outputDiv.textContent = data.run.stderr;
//             } else if (data.run?.stdout && data.run.stdout.trim() !== "") {
//                 outputDiv.textContent = data.run.stdout;
//             } else {
//                 outputDiv.textContent = "⚠ Program executed but no output";
//             }
            
    
//         } catch (err) {
//             outputDiv.textContent = "🚨 Error: " + err.message;
//         }
    
//         btn.disabled = false;
//     }
    
   

//     function getLanguageClass(q) {
//         const topic = appData.topics.find(t => t.id === q.topicId);
//         if (!topic) return 'plaintext';
//         const lang = topic.langId;
//         if (lang === 'py') return 'python';
//         if (lang === 'js') return 'javascript';
//         if (lang === 'cpp') return 'cpp';
//         if (lang === 'java') return 'java';
//         return 'plaintext';
//     }

//     function attachSolutionEvents() {
//         document.querySelectorAll('.toggle-solution').forEach(btn => {
//             btn.removeEventListener('click', toggleSolutionHandler);
//             btn.addEventListener('click', toggleSolutionHandler);
//         });
//     }

//     function toggleSolutionHandler(e) {
//         const btn = e.currentTarget;
//         const targetId = btn.dataset.target;
//         const panel = document.getElementById(targetId);
//         panel.classList.toggle('show');
//         btn.textContent = panel.classList.contains('show') ? '▲ Hide Solution' : '🔍 View Solution';
//         Prism.highlightAllUnder(panel);
//     }

//     function attachRatingEvents() {
//         document.querySelectorAll('.rating-btn').forEach(btn => {
//             btn.removeEventListener('click', ratingHandler);
//             btn.addEventListener('click', ratingHandler);
//         });
//     }

//     function ratingHandler(e) {
//         const btn = e.currentTarget;
//         const qid = btn.dataset.qid;
//         const type = btn.classList.contains('up') ? 'up' : 'down';
//         if (!ratings[qid]) ratings[qid] = { up: 0, down: 0 };
//         ratings[qid][type] += 1;
//         localStorage.setItem(RATINGS_KEY, JSON.stringify(ratings));
//         const countSpan = btn.querySelector('.rating-count');
//         countSpan.textContent = ratings[qid][type];
//     }

//     function handleSearch() {
//         searchTerm = searchInput.value.trim();
//         currentTopic = null;
//         showAllMode = false;
//         localStorage.removeItem(STORAGE_TOPIC);
//         renderTopics();
//         renderQuestions();
//     }

//     searchBtn.addEventListener('click', handleSearch);
//     searchInput.addEventListener('keyup', (e) => {
//         if (e.key === 'Enter') handleSearch();
//     });

//     showAllBtn.addEventListener('click', () => {
//         showAllMode = true;
//         currentTopic = null;
//         localStorage.removeItem(STORAGE_TOPIC);
//         renderTopics();
//         renderQuestions();
//     });

//     renderLanguages();
//     renderTopics();
//     renderQuestions();
// })();


