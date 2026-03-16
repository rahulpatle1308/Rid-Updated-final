const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard.controller');
const { requireAuth } = require('../middleware/auth');


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





/* Python course main page */
router.get('/python/purchase', requireAuth, (req, res) => {
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
router.get('/C/purchase', requireAuth, (req, res) => {
  res.render('dashboard/Technical/C/purchase', {
    title: 'C Test Series',
    description: 'C test series'
  });
});


/* C++ course main page */
router.get('/C_plus/purchase', requireAuth, (req, res) => {
  res.render('dashboard/Technical/C++/purchase', {
    title: 'C Test Series',
    description: 'C test series'
  });
});


/* GO course main page */
router.get('/GO/purchase', requireAuth, (req, res) => {
  res.render('dashboard/Technical/GO/purchase', {
    title: 'GO Test Series',
    description: 'GO test series'
  });
});


/* PHP course main page */
router.get('/PHP/purchase', requireAuth, (req, res) => {
  res.render('dashboard/Technical/PHP/purchase', {
    title: 'PHP Test Series',
    description: 'PHP test series'
  });
});

/* JAVA course main page */
router.get('/java/purchase', requireAuth, (req, res) => {
  res.render('dashboard/Technical/JAVA/purchase', {
    title: 'JAVA Test Series',
    description: 'JAVA test series'
  });
});

/* MogoDB course main page */
router.get('/MogoDB/purchase', requireAuth, (req, res) => {
  res.render('dashboard/Technical/mongoDB/purchase', {
    title: 'MogoDB Test Series',
    description: 'MogoDB test series'
  });
});


/* MySql course main page */
router.get('/MySql/purchase', requireAuth, (req, res) => {
  res.render('dashboard/Technical/mysql/purchase', {
    title: 'MogoDB Test Series',
    description: 'MogoDB test series'
  });
});


/* nodejs course main page */
router.get('/Nodejs/purchase', requireAuth, (req, res) => {
  res.render('dashboard/Technical/nodejs/purchase', {
    title: 'Nodejs Test Series',
    description: 'Nodejs test series'
  });
});

/* Rust course main page */
router.get('/Rust/purchase', requireAuth, (req, res) => {
  res.render('dashboard/Technical/Rust/purchase', {
    title: 'Rust Test Series',
    description: 'Rust test series'
  });
});


/* Swift course main page */
router.get('/Swift/purchase', requireAuth, (req, res) => {
  res.render('dashboard/Technical/Swift/purchase', {
    title: 'Rust Test Series',
    description: 'Rust test series'
  });
});


/* Reactjs course main page */
router.get('/Reactjs/purchase', requireAuth, (req, res) => {
  res.render('dashboard/Technical/Reactjs/purchase', {
    title: 'Reactjs Test Series',
    description: 'Reactjs test series'
  });
});



/* DjanGo course main page */
router.get('/DjanGo/purchase', requireAuth, (req, res) => {
  res.render('dashboard/Technical/DjanGo/purchase', {
    title: 'DjanGo Test Series',
    description: 'DjanGo test series'
  });
});
// Main boards page
router.get("/state-boards", requireAuth, (req, res) => {
  res.render("dashboard/StateBoard/stateboard", {
    title: "State Boards",
  });
});


/* UpBoard course main page */
router.get('/upboard/purchase', requireAuth, (req, res) => {
  res.render('dashboard/StateBoard/UpBoard/purchase', {
    title: 'UpBoard Test Series',
   
  });
});



// Home Guard page
router.get("/HomeGuard", (req, res) => {
  res.render("dashboard/HomeGuard/homeguard", {
    title: "Home Guard",
  });
});
router.get("/HomeGuard/subjects", (req, res) => {
  res.render("dashboard/HomeGuard/UpHomeGuard/purchase", {
    title: "Home Guard Tests",
  });
});

/* UP HomeGuard course main page */
// router.get('/uphomeguard/purchase', requireAuth, (req, res) => {
//   res.render('dashboard/HomeGuard/UpHomeGuard/purchase', {
//     title: 'U.P HomeGuard',
   
//   });
// });



// Railway Guard page
router.get("/railway",(req, res) => {
  res.render("dashboard/Railway/railway",{
    title: "Home Guard",
  });
});


// BPSC TEACHER
router.get("/bpsc",(req,res)=>{
  res.render("dashboard/BPSC/bpsc",{
    title:"BPSC"
  });
});
router.get("/bpsc/higher-secondary",(req,res)=>{
  res.render("dashboard/BPSC/Higher-Secondary/purchase",{
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


router.get("/quiz/:category/:subject/:testNo", (req, res) => {

  const category = req.params.category;
  const subject = req.params.subject;
  const testNo = parseInt(req.params.testNo);

  console.log("CATEGORY:", category);
  console.log("SUBJECT:", subject);
  console.log("TEST NO:", testNo);

  res.render(`dashboard/${category}/${subject}/test`, {
    category: category,
    subject: subject,
    testNo: testNo
  });

});





// router.get("/quiz/:category/:subject/:testNo", async (req, res, next) => {
//   const { category, subject, testNo } = req.params;

//   // ✅ First test free
//   if (Number(testNo) === 1) {
//     return res.render(`dashboard/${category}/${subject}/test`, {
//       category: category.toUpperCase(),
//       subject: subject.toUpperCase(),
//       testNo: Number(testNo)
//     });
//   }

//   // 🔒 Other tests require login
//   if (!req.session || !req.session.userId) {
//     return res.redirect("/rts/login");
//   }

//   next();
// }, (req, res) => {
//   const { category, subject, testNo } = req.params;

//   res.render(`dashboard/${category}/${subject}/test`, {
//     category: category.toUpperCase(),
//     subject: subject.toUpperCase(),
//     testNo: Number(testNo)
//   });
// });




router.get('/profile', requireAuth, dashboardController.getProfilePage);



module.exports = router;