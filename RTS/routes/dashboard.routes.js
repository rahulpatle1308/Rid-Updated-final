const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard.controller');
const { requireAuth } = require('../middleware/auth');
const { route } = require('./quiz.routes');


// Dashboard page
router.get('/dashboard', dashboardController.getDashboard);


// Dashboard API routes
router.get('/api/dashboard/stats', requireAuth, dashboardController.getStats);
router.put('/api/dashboard/profile', requireAuth, dashboardController.updateProfile);
router.post('/api/dashboard/change-password', requireAuth, dashboardController.changePassword);

// router.get('/technical-coding', requireAuth, (req, res) => {
  router.get('/technical-coding', (req, res) => {

  res.render('dashboard/Technical/technical');
});


// /* HTML course main page */
// router.get('/html/purchase', requireAuth, (req, res) => {
//   res.render('dashboard/Technical/html/purchase', {
//     title: 'HTML Test Series',
   
//   });
// });

// router.get("/html/purchase", requireAuth, (req, res) => {
router.get("/html/purchase", (req, res) => {
  res.render("dashboard/Technical/html/purchase", {
    category: "technical",
    subject: "html"
  });
});

// JEE routes all 
router.get("/jee/subparts", (req, res) => {
  res.render("dashboard/JEE/jeesub-parts", {
    category: "jee",
    subject: "JEE",
    user: req.user || {}   
  });
});
router.get("/jee/mains", (req, res) => {
  res.render("dashboard/JEE/jeemeans/purchase", {
    category: "jee",
    subject: "JEE"
  });
});
router.get("/jee/advance", (req, res) => {
  res.render("dashboard/JEE/jeeadvance/purchase", {
    category: "jee",
    subject: "JEE"
  });
});

// SSC routes all 
router.get("/ssc/subparts", (req, res) => {
  res.render("dashboard/SSC/ssc", {
    category: "ssc",
    subject: "SSC",
     user: req.user || {}
  });
});
router.get("/Group-B/purchase", (req, res) => {
  res.render("dashboard/SSC/Group-B/purchase", {
    category: "ssc",
    subject: "SSC"
  });
});
router.get("/Group-C/purchase", (req, res) => {
  res.render("dashboard/SSC/Group-C/purchase", {
    category: "ssc",
    subject: "SSC"
  });
});


// NEET ROUTES
router.get("/neet", (req, res) => {
  res.render("dashboard/NEET/neet", {
    category: "neet",
    subject: "NEET",
    user: req.user || {} 
  });
});
router.get("/neet/biology",(req,res)=>{
  res.render("dashboard/NEET/biology/purchase",{
     category: "neet",
    subject: "NEET"
  })
 
})

router.get("/neet/chemistry",(req,res)=>{
  res.render("dashboard/NEET/Chemistry/purchase")
})

router.get("/neet/Physics",(req,res)=>{
  res.render("dashboard/NEET/Physics/purchase")
})

/* Python course main page */
router.get('/python/purchase', (req, res) => {
  res.render('dashboard/Technical/python/purchase', {
    title: 'Python Test Series',
    description: 'Python programming test series'
  });
});


/* css course main page */
router.get('/css/purchase', (req, res) => {
  res.render('dashboard/Technical/css/purchase', {
    title: 'CSS Test Series',
    description: 'CSS test series'
  });
});


/* js course main page */
router.get('/js/purchase',(req, res) => {
  res.render('dashboard/Technical/javascript/purchase', {
    title: 'js Test Series',
    description: 'js test series'
  });
});


/* C course main page */
router.get('/C/purchase', (req, res) => {
  res.render('dashboard/Technical/C/purchase', {
    title: 'C Test Series',
    description: 'C test series'
  });
});


/* C++ course main page */
router.get('/C_plus/purchase', (req, res) => {
  res.render('dashboard/Technical/C++/purchase', {
    title: 'C Test Series',
    description: 'C test series'
  });
});


/* GO course main page */
router.get('/GO/purchase', (req, res) => {
  res.render('dashboard/Technical/GO/purchase', {
    title: 'GO Test Series',
    description: 'GO test series'
  });
});


/* PHP course main page */
router.get('/PHP/purchase', (req, res) => {
  res.render('dashboard/Technical/PHP/purchase', {
    title: 'PHP Test Series',
    description: 'PHP test series'
  });
});

/* JAVA course main page */
router.get('/java/purchase', (req, res) => {
  res.render('dashboard/Technical/JAVA/purchase', {
    title: 'JAVA Test Series',
    description: 'JAVA test series'
  });
});

/* MogoDB course main page */
router.get('/MogoDB/purchase', (req, res) => {
  res.render('dashboard/Technical/mongoDB/purchase', {
    title: 'MogoDB Test Series',
    description: 'MogoDB test series'
  });
});


/* MySql course main page */
router.get('/MySql/purchase', (req, res) => {
  res.render('dashboard/Technical/mysql/purchase', {
    title: 'MogoDB Test Series',
    description: 'MogoDB test series'
  });
});


/* nodejs course main page */
router.get('/Nodejs/purchase', (req, res) => {
  res.render('dashboard/Technical/nodejs/purchase', {
    title: 'Nodejs Test Series',
    description: 'Nodejs test series'
  });
});

/* Rust course main page */
router.get('/Rust/purchase', (req, res) => {
  res.render('dashboard/Technical/Rust/purchase', {
    title: 'Rust Test Series',
    description: 'Rust test series'
  });
});


/* Swift course main page */
router.get('/Swift/purchase', (req, res) => {
  res.render('dashboard/Technical/Swift/purchase', {
    title: 'Rust Test Series',
    description: 'Rust test series'
  });
});


/* Reactjs course main page */
router.get('/Reactjs/purchase', (req, res) => {
  res.render('dashboard/Technical/Reactjs/purchase', {
    title: 'Reactjs Test Series',
    description: 'Reactjs test series'
  });
});



/* DjanGo course main page */
router.get('/DjanGo/purchase', (req, res) => {
  res.render('dashboard/Technical/DjanGo/purchase', {
    title: 'DjanGo Test Series',
    description: 'DjanGo test series'
  });
});


// Main boards page
router.get("/state-boards", (req, res) => {
  res.render("dashboard/StateBoard/stateboard", {
    title: "State Boards",
   
  });
});


/* UpBoard course main page */
router.get('/upboard/purchase', (req, res) => {
  res.render('dashboard/StateBoard/UpBoard/purchase', {
    title: 'UpBoard Test Series',
   
  });
});

/* MP course main page */
router.get('/mpboard/purchase', (req, res) => {
  res.render('dashboard/StateBoard/MP Board/purchase', {
    title: 'MP Board Test Series',
   
  });
});
/* Punjab course main page */
router.get('/mpboard/purchase', (req, res) => {
  res.render('dashboard/StateBoard/MP Board/purchase', {
    title: 'MP Board Test Series',
   
  });
});

// Home Guard page
router.get("/HomeGuard", (req, res) => {
  res.render("dashboard/HomeGuard/homeguard", {
    title: "Home Guard",
    user: req.user || {}  
  });
});



router.get("/HomeGuard/subjects", (req, res) => {
  res.render("dashboard/HomeGuard/UpHomeGuard/purchase", {
    title: "Home Guard Tests",
  });
});


/* UP HomeGuard course main page */
router.get('/uphomeguard/purchase', (req, res) => {
  res.render('dashboard/HomeGuard/UpHomeGuard/purchase', {
    title: 'U.P HomeGuard',
   
  });
});



// Railway Guard page
router.get("/railway",(req, res) => {
  res.render("dashboard/Railway/railway",{
    title: "Railway",
    user: req.user || {}  
  });
});

//RRB NTPC
router.get('/ntpc/purchase', (req, res) => {
  res.render('dashboard/Railway/NTPC/purchase', {
    title: 'RRB NTPC ',
   
  });
});


// BPSC TEACHER
router.get("/bpsc",(req,res)=>{
  res.render("dashboard/BPSC/bpsc",{
    title:"BPSC",
     user: req.user || {}  
  });
});
// router.get("/bpsc/higher-secondary",(req,res)=>{
//   res.render("dashboard/BPSC/Higher-Secondary/purchase",{
//     title:"BPSC Higher-Secondary"
//   });
// });

router.get("/ComingSoon",(req,res)=>{
  res.render("dashboard/Coming Soon",{
    title:"BPSC Higher-Secondary"
  });
});

router.get("/bpsc/middle-school-teacher",(req,res)=>{
  res.render("dashboard/BPSC/Middle-School-Teacher/purchase",{
    title:"BPSC Middle-School-Teacher"
  });
});
router.get("/bpsc/primary-teacher",(req,res)=>{
  res.render("dashboard/BPSC/Primary-Teacher/purchase",{
    title:"BPSC Primary-Teacher"
  });
});



router.get("/birthday-software", (req, res) => {
    res.render("dashboard/partials/birthday");
});

// router.get("/quiz/:category/:subject/:testNo", (req, res) => {
//   const { category, subject, testNo } = req.params;

//   res.render(`dashboard/Technical/${subject}/test`, {
//     category,
//     subject,
//     testNo
//   });
// });

router.get("/quiz/:category/:subject/:testNo", (req, res) => {

  const category = req.params.category;
  const subject = req.params.subject;
  const testNo = parseInt(req.params.testNo);

  // console.log("CATEGORY:", category);
  // console.log("SUBJECT:", subject);
  // console.log("TEST NO:", testNo);

  res.render(`dashboard/${category}/${subject}/test`, {
    category: category,
    subject: subject,
    testNo: testNo
  });

});

router.post("/quiz/:category/:subject/:testNo/submit", (req, res) => {
  try {
    const { category, subject, testNo } = req.params;

    const resultData = {
      subject: subject,
      setNo: testNo,
      total: req.body.totalQuestions,
      attempted: req.body.attempted,
      correct: req.body.correct,
      incorrect: req.body.attempted - req.body.correct,
      percentage: req.body.percentage,
      accuracy: req.body.accuracy,
      timeSpent: req.body.timeSpent,
      timeInSeconds: 3600 // optional (timer से भी भेज सकते हो)
    };

    console.log("🔥 Final Result:", resultData);

    res.json({
      success: true,
      resultId: Date.now(),
      result: resultData   // 🔥 IMPORTANT
    });

  } catch (err) {
    console.error(err);
    res.json({ success: false });
  }
});

router.get("/quiz/:category/:subject/test-:testNo/result/:resultId", (req, res) => {
  res.render("test-result");   // 🔥 सिर्फ page open करो
});

router.get('/profile', requireAuth, dashboardController.getProfilePage);



module.exports = router;